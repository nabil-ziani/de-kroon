import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { EnrollmentFormData } from '@/utils/validation';
import { Font } from './custom-font';

interface EnrollmentEmailProps {
    data: EnrollmentFormData;
}

export default function EnrollmentEmail({ data }: EnrollmentEmailProps) {
    return (
        <Html>
            <Head>
                <Font />
            </Head>
            <Preview>Nieuwe inschrijving voor {data.courseName} van {data.studentName}</Preview>
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
                            Nieuwe inschrijving ontvangen via het inschrijfformulier:
                        </Text>

                        <Hr style={hr} />

                        <Section style={messageBox}>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Student:</strong> {data.studentName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Email:</strong> {data.email}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Telefoonnummer:</strong> {data.phone}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Geboortedatum:</strong> {new Date(data.birthDate).toLocaleDateString('nl-BE')}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Cursus:</strong> {data.courseName}
                            </Text>
                        </Section>

                        {data.message && (
                            <>
                                <Text style={messageContent}>
                                    {data.message}
                                </Text>
                            </>
                        )}

                        <Hr style={hr} />

                        <Text style={footer}>
                            Deze inschrijving is verzonden via het inschrijfformulier op moskee-nasr.be
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// Styling
const main = {
    backgroundColor: '#ffffff',
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
};

const messageBox = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '24px',
    marginBottom: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    textAlign: 'left' as const,
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

const hr = {
    borderTop: 'dotted 4px rgba(26, 47, 51, 0.2)',
    margin: '32px 0 16px 0',
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

const footer = {
    color: '#64748b',
    fontSize: '14px',
    textAlign: 'center' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    margin: '24px 0 0',
}; 