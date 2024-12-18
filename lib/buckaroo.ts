import crypto from 'crypto';

interface BuckarooConfig {
    websiteKey: string;
    secretKey: string;
    mode: 'test' | 'live';
}

interface ServiceListItem {
    name: string;
    action: string;
    parameters?: Array<{
        name: string;
        value: string;
    }>;
}

interface PaymentRequest {
    amount: number;
    currency?: string;
    description: string;
    returnUrl: string;
    returnUrlCancel?: string;
    returnUrlError?: string;
    returnUrlReject?: string;
    isRecurring?: boolean;
    interval?: 'monthly' | 'yearly';
}

export class BuckarooService {
    private config: BuckarooConfig;
    private baseUrl: string;

    constructor(config: BuckarooConfig) {
        this.config = config;
        this.baseUrl = config.mode === 'test'
            ? 'https://testcheckout.buckaroo.nl/json'
            : 'https://checkout.buckaroo.nl/json';
    }

    async createPayment(request: PaymentRequest) {
        // Basic payment data
        const payload = {
            currency: request.currency || 'EUR',
            amountDebit: request.amount,
            invoice: crypto.randomUUID(),
            description: request.description,
            returnURL: request.returnUrl,
            returnURLCancel: request.returnUrlCancel || request.returnUrl,
            returnURLError: request.returnUrlError || request.returnUrl,
            returnURLReject: request.returnUrlReject || request.returnUrl,
            serviceList: [{
                name: 'ideal',
                action: 'Pay'
            }] as ServiceListItem[],
            continueOnIncomplete: 1
        };

        // Add recurring parameters if needed
        if (request.isRecurring) {
            payload.serviceList[0].parameters = [{
                name: 'recurring',
                value: 'true'
            }];

            if (request.interval) {
                payload.serviceList[0].parameters.push({
                    name: 'recurringInterval',
                    value: request.interval
                });
            }
        }

        // Create authentication components
        const nonce = crypto.randomBytes(16).toString('hex');
        const timestamp = Math.floor(Date.now() / 1000);
        const httpMethod = 'POST';

        // Remove protocol and host, then encode
        const requestUri = this.config.mode === 'test'
            ? 'testcheckout.buckaroo.nl/json/transaction'
            : 'checkout.buckaroo.nl/json/transaction';
        const encodedUri = encodeURIComponent(requestUri).toLowerCase();

        // Create content MD5 hash and convert to base64
        const content = JSON.stringify(payload);
        const contentMD5 = crypto.createHash('md5').update(content, 'utf8').digest();
        const contentBase64 = contentMD5.toString('base64');

        // Create signature string (concatenate as raw data)
        const signatureString =
            this.config.websiteKey +
            httpMethod +
            encodedUri +
            timestamp +
            nonce +
            contentBase64;

        // Create HMAC signature
        const hmac = crypto.createHmac('sha256', this.config.secretKey);
        hmac.update(signatureString, 'utf8');
        const signature = hmac.digest('base64');

        try {
            const response = await fetch(`${this.baseUrl}/Transaction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `hmac ${this.config.websiteKey}:${signature}:${nonce}:${timestamp}`,
                    'Culture': 'nl-NL'
                },
                body: content
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Buckaroo error: ${text}`);
            }

            const data = await response.json();
            return {
                redirectUrl: data.RequiredAction?.RedirectURL,
                transactionKey: data.Key
            };
        } catch (error) {
            console.error('Buckaroo request failed:', error);
            throw error;
        }
    }
}

export const buckarooConfig: BuckarooConfig = {
    websiteKey: process.env.NEXT_PUBLIC_BUCKAROO_WEBSITE_KEY || '',
    secretKey: process.env.BUCKAROO_SECRET_KEY || '',
    mode: process.env.BUCKAROO_TEST_MODE === 'true' ? 'test' : 'live'
}; 