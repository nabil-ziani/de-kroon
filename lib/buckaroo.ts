interface BuckarooConfig {
    websiteKey: string;
    secretKey: string;
    mode: 'test' | 'live';
}

interface PaymentRequest {
    amount: number;
    currency?: string;
    description: string;
    returnUrl: string;
    isRecurring?: boolean;
    interval?: 'monthly' | 'yearly';
}

export class BuckarooService {
    private config: BuckarooConfig;

    constructor(config: BuckarooConfig) {
        this.config = config;
    }

    async createPayment(request: PaymentRequest) {
        // TODO: Implement actual Buckaroo API call
        const testResponse = {
            redirectUrl: 'https://testcheckout.buckaroo.nl/dummy',
            transactionKey: 'test123',
        };

        return testResponse;
    }

    async generateQRCode(request: PaymentRequest) {
        // TODO: Implement QR code generation
        return 'QR_CODE_DATA';
    }

    // Helper method to create HMAC signature
    private createSignature(data: string): string {
        // TODO: Implement HMAC signature generation
        return 'dummy_signature';
    }
}

// Test configuration
export const buckarooConfig: BuckarooConfig = {
    websiteKey: process.env.NEXT_PUBLIC_BUCKAROO_WEBSITE_KEY || 'test_key',
    secretKey: process.env.BUCKAROO_SECRET_KEY || 'test_secret',
    mode: (process.env.NODE_ENV === 'production') ? 'live' : 'test'
}; 