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

interface ContactConfirmationEmailProps {
    data: ContactFormData;
}

export default function ContactConfirmationEmail({ data }: ContactConfirmationEmailProps) {
    return (
        <Html>
            <Head>
                <Font />
            </Head>
            <Preview>Bedankt voor uw bericht</Preview>
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
                            Assalaamoe'alaikoem wa rahmatoellah wa barakaatoeh,
                        </Text>

                        <Text style={messageText}>
                            We hebben uw bericht goed ontvangen en zullen zo snel mogelijk contact met u opnemen.
                        </Text>

                        <Hr style={hr} />

                        <Text style={contactInfo}>
                            Kroonstraat 72, 2140 Borgerhout
                            <br />
                            +32 XXX XX XX XX
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// Styling
const main = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    margin: '0',
    padding: '40px 20px',
};

const logo = {
    margin: '0 auto 30px',
    display: 'block',
};

const container = {
    margin: '0 auto',
    maxWidth: '600px',
};

const section = {
    backgroundColor: '#f8fafc',
    padding: '40px 30px',
    borderRadius: '12px',
    textAlign: 'center' as const,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
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

const messageText = {
    color: '#1a2f33',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 32px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '32px 0 16px 0',
};

const contactInfo = {
    color: '#64748b',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center' as const,
    margin: '24px 0 0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}; 