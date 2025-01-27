import crypto from 'crypto';

interface BuckarooConfig {
    websiteKey: string;
    secretKey: string;
    mode: 'test' | 'live';
}

interface ServiceListItem {
    Name: string;
    Action: string;
    Version?: number;
    Parameters?: Array<{
        Name: string;
        GroupType?: string;
        GroupID?: string;
        Value: string;
    }>;
}

interface BuckarooPayload {
    Currency: string;
    AmountDebit: number;
    Invoice: string;
    Description?: string;
    ReturnURL?: string;
    ReturnURLCancel?: string;
    ReturnURLError?: string;
    ReturnURLReject?: string;
    ServicesSelectableByClient?: string;
    ServicesExcludedForClient?: string;
    StartRecurrent?: boolean;
    Services: {
        ServiceList: ServiceListItem[];
    };
    ContinueOnIncomplete?: any;
    OriginalTransactionKey?: string;
    CustomParameters: {
        List: Array<{
            Name: string;
            Value: string;
        }>;
    };
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
    originalTransactionKey?: string;
    collectDate?: string;
    customerName?: string;
    customerEmail?: string;
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

    // Helper function to create authentication components
    private async createAuthenticationComponents(payload: BuckarooPayload) {
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

        return { content, nonce, timestamp, signature };
    }

    async createPayment(request: PaymentRequest) {
        const payload: BuckarooPayload = {
            Currency: request.currency || 'EUR',
            AmountDebit: request.amount,
            Invoice: crypto.randomUUID(),
            Description: request.description,
            ReturnURL: request.returnUrl,
            ReturnURLCancel: request.returnUrlCancel || request.returnUrl,
            ReturnURLError: request.returnUrlError || request.returnUrl,
            ReturnURLReject: request.returnUrlReject || request.returnUrl,
            Services: {
                ServiceList: [] as ServiceListItem[]
            },
            CustomParameters: {
                List: []
            },
            StartRecurrent: request.isRecurring,
            ContinueOnIncomplete: 1
        };

        // Add customer info as custom parameters
        if (request.customerName) {
            payload.CustomParameters.List.push({
                Name: 'CustomerName',
                Value: request.customerName
            });
        }

        if (request.customerEmail) {
            payload.CustomParameters.List.push({
                Name: 'CustomerEmail',
                Value: request.customerEmail
            });
        }

        const services = request.isRecurring ? ["bancontactmrcash"] : ["ideal", "payconiq", "bancontactmrcash"];
        services.forEach(serviceName => {
            const service: ServiceListItem = {
                Name: serviceName,
                Action: "Pay"
            }

            payload.Services.ServiceList.push(service);
        })

        const { content, nonce, timestamp, signature } = await this.createAuthenticationComponents(payload);

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
            return data;
        } catch (error) {
            console.error('Buckaroo request failed:', error);
            throw error;
        }
    }

    async createRecurringPayment(request: PaymentRequest) {
        const payload: BuckarooPayload = {
            Currency: request.currency || 'EUR',
            OriginalTransactionKey: request.originalTransactionKey,
            AmountDebit: request.amount,
            Invoice: crypto.randomUUID(),
            Services: {
                ServiceList: [
                    {
                        Name: "bancontactmrcash",
                        Action: "PayRecurring"
                    }
                ] as ServiceListItem[]
            },
            CustomParameters: {
                List: []
            }
        };

        // Add customer info as custom parameters
        if (request.customerName) {
            payload.CustomParameters.List.push({
                Name: 'CustomerName',
                Value: request.customerName
            });
        }

        if (request.customerEmail) {
            payload.CustomParameters.List.push({
                Name: 'CustomerEmail',
                Value: request.customerEmail
            });
        }

        const { content, nonce, timestamp, signature } = await this.createAuthenticationComponents(payload);

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
            return data;
        } catch (error) {
            console.error('Buckaroo request failed:', error);
            throw error;
        }
    }
}

export const buckarooConfig: BuckarooConfig = {
    websiteKey: process.env.BUCKAROO_WEBSITE_KEY || '',
    secretKey: process.env.BUCKAROO_SECRET_KEY || '',
    mode: process.env.BUCKAROO_TEST_MODE === 'true' ? 'test' : 'live'
}; 