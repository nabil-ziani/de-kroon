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
                            Assalaamoe'alaikoem wa rahmatoellah wa barakaatoeh,
                        </Text>

                        <Text style={messageText}>
                            U heeft een nieuw bericht ontvangen via het contactformulier.
                        </Text>

                        <Hr style={hr} />

                        <Section style={messageBox}>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Van:</strong> {data.name}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Email:</strong> {data.email}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Onderwerp:</strong> {data.subject}
                            </Text>
                        </Section>

                        <Text style={messageText}>
                            <strong>Bericht:</strong>
                        </Text>
                        <Text style={messageContent}>
                            {data.message}
                        </Text>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Dit bericht is verzonden via het contactformulier op moskee-nasr.be
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    margin: '0',
    padding: '40px 20px',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    maxWidth: '600px',
    padding: '20px 0 48px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

const logo = {
    margin: '0 auto 32px',
    display: 'block',
};

const section = {
    padding: '24px 48px',
    textAlign: 'center' as const,
};

const greeting = {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: '600',
    color: '#374151',
    fontSize: '15px',
    lineHeight: '24px',
    margin: '0 0 24px',
    fontStyle: 'italic',
};

const messageText = {
    color: '#111827',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 32px',
};

const messageBox = {
    backgroundColor: '#f8fafc',
    padding: '24px',
    borderRadius: '12px',
    marginTop: '24px',
    marginBottom: '24px',
    borderLeft: '4px solid #efc01b',
};

const detailText = {
    color: '#374151',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '12px 0',
    display: 'flex',
    gap: '8px',
};

const labelStyle = {
    color: '#efc01b',
    minWidth: '120px',
    display: 'inline-block',
};

const messageContent = {
    ...messageText,
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    whiteSpace: 'pre-wrap' as const,
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '32px 0',
};

const footer = {
    color: '#6b7280',
    fontSize: '14px',
    textAlign: 'center' as const,
}; 