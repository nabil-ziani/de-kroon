import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { EnrollmentFormData } from '@/utils/validation';

interface EnrollmentEmailProps {
    data: EnrollmentFormData;
}

export default function EnrollmentEmail({ data }: EnrollmentEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Nieuwe inschrijving voor {data.courseName} van {data.studentName}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={section}>
                        <Heading style={h1}>Nieuwe Inschrijving</Heading>
                        
                        <Text style={greeting}>
                            Assalaamoe'alaikoem wa rahmatoellah wa barakaatoeh,
                        </Text>

                        <Text style={messageText}>
                            Er is een nieuwe inschrijving ontvangen via het inschrijfformulier.
                        </Text>

                        <Hr style={hr} />

                        <div style={messageBox}>
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
                        </div>

                        {data.message && (
                            <>
                                <Hr style={hr} />
                                <Text style={messageText}>
                                    <strong>Extra informatie:</strong>
                                </Text>
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

const h1 = {
    color: '#1f2937',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.25',
    padding: '0 48px',
    textAlign: 'center' as const,
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
    borderLeft: '4px solid #e4a500',
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
    color: '#e4a500',
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