import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Img,
} from '@react-email/components';
import { ContactFormData } from '@/utils/validation';
import { Font } from './custom-font';

interface ContactEmailProps {
    data: ContactFormData;
}

export default function ContactEmail({ data }: ContactEmailProps) {
    return (
        <Html>
            <Head>
                <Font />
            </Head>
            <Preview>Nieuw bericht van {data.name}</Preview>
            <Body style={main}>
                <Img
                    src={`https://de-kroon.vercel.app/logo-2.png`}
                    width="auto"
                    height="100"
                    alt="De Kroon"
                    style={logo}
                />

                <Container style={container}>
                    <Section style={section}>
                        <Text style={greeting}>
                            Nieuw bericht ontvangen via het contactformulier:
                        </Text>

                        <Hr style={hr} />

                        <Section style={messageBox}>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Naam:</strong> {data.name}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Email:</strong> {data.email}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Onderwerp:</strong> {data.subject}
                            </Text>
                        </Section>

                        <Text style={messageContent}>
                            {data.message}
                        </Text>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Dit bericht is verzonden via het contactformulier op kidskroon.be
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    margin: '0',
    padding: '40px 20px',
};

const logo = {
    margin: '0 auto 32px',
    display: 'block',
};

const container = {
    margin: '0 auto',
    backgroundColor: '#f6f9fc',
    maxWidth: '600px',
    padding: '20px 0 48px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

const section = {
    padding: '24px 48px',
};

const greeting = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    fontWeight: '600',
    color: '#1a2f33',
    fontSize: '16px',
    lineHeight: '32px',
    margin: '0 0 24px',
    textAlign: 'center' as const,
};

const messageBox = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '24px',
    marginBottom: '24px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
};

const detailText = {
    color: '#64748b',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '12px 0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    display: 'flex',
    gap: '8px',
    alignItems: 'center' as const,
};

const labelStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    fontWeight: '600',
    color: '#1a2f33',
    display: 'inline-block',
    textAlign: 'left' as const,
};

const messageContent = {
    color: '#64748b',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 32px',
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    whiteSpace: 'pre-wrap' as const,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '32px 0 16px 0',
};

const footer = {
    color: '#64748b',
    fontSize: '14px',
    textAlign: 'center' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    margin: '24px 0 0',
}; 