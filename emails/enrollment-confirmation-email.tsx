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
import { EnrollmentFormData } from '@/utils/validation';
import { Font } from './custom-font';

interface EnrollmentConfirmationEmailProps {
    data: EnrollmentFormData;
}

export default function EnrollmentConfirmationEmail({ data }: EnrollmentConfirmationEmailProps) {
    return (
        <Html>
            <Head>
                <Font />
            </Head>
            <Preview>Bedankt voor uw inschrijving</Preview>
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
                            Bedankt voor uw inschrijving. We hebben deze goed ontvangen en zullen deze zo snel mogelijk verwerken.
                        </Text>

                        <Hr style={hr} />

                        <Section style={messageBox}>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Cursus:</strong> {data.courseName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Student:</strong> {data.studentName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Geboortedatum:</strong> {new Date(data.birthDate).toLocaleDateString('nl-BE')}
                            </Text>
                        </Section>

                        <Hr style={hr} />

                        <Text style={contactInfo}>
                            <span style={brandName}>De Kroon</span>
                            <br />
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
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    margin: '0',
    padding: '40px 20px',
};

const logo = {
    margin: '0 auto 32px',
    display: 'block',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    maxWidth: '600px',
    padding: '20px 0 48px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

const section = {
    padding: '24px 48px',
};

const greeting = {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: '600',
    color: '#374151',
    fontSize: '15px',
    lineHeight: '24px',
    margin: '0 0 24px',
    fontStyle: 'italic',
    textAlign: 'center' as const
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
    borderRadius: '8px',
    marginTop: '24px',
    marginBottom: '24px',
};

const detailText = {
    color: '#374151',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '12px 0',
    display: 'flex',
    gap: '8px',
    alignItems: 'center' as const,
    justifyContent: 'flex-start' as const,
};

const labelStyle = {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: '600',
    color: '#111827',
    display: 'inline-block',
    textAlign: 'left' as const,
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '32px 0 16px 0',
};

const brandName = {
    color: '#efc01b',
    fontWeight: '600',
    fontSize: '18px',
};

const contactInfo = {
    color: '#6b7280',
    fontSize: '13px',
    lineHeight: '20px',
    textAlign: 'center' as const,
    margin: '0',
}; 