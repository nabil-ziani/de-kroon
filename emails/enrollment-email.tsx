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
                    <Heading style={h1}>Nieuwe Inschrijving</Heading>
                    
                    <Section style={section}>
                        <Text style={text}>
                            <strong>Student:</strong> {data.studentName}
                        </Text>
                        <Text style={text}>
                            <strong>Email:</strong> {data.email}
                        </Text>
                        <Text style={text}>
                            <strong>Telefoonnummer:</strong> {data.phone}
                        </Text>
                        <Text style={text}>
                            <strong>Geboortedatum:</strong> {new Date(data.birthDate).toLocaleDateString('nl-BE')}
                        </Text>
                        <Text style={text}>
                            <strong>Cursus:</strong> {data.courseName}
                        </Text>
                        
                        {data.message && (
                            <>
                                <Hr style={hr} />
                                <Text style={text}>
                                    <strong>Extra informatie:</strong>
                                </Text>
                                <Text style={messageText}>
                                    {data.message}
                                </Text>
                            </>
                        )}
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        Deze inschrijving is verzonden via het inschrijfformulier op moskee-nasr.be
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

// Styling
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

const h1 = {
    color: '#1f2937',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.25',
    padding: '0 48px',
};

const section = {
    padding: '24px 48px',
};

const text = {
    color: '#374151',
    fontSize: '16px',
    lineHeight: '24px',
};

const messageText = {
    ...text,
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    marginTop: '4px',
    whiteSpace: 'pre-wrap' as const,
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '20px 0',
};

const footer = {
    color: '#6b7280',
    fontSize: '14px',
    textAlign: 'center' as const,
}; 