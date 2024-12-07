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
    Link,
    Img,
} from '@react-email/components';
import { EnrollmentFormData } from '@/utils/validation';

interface EnrollmentConfirmationEmailProps {
    data: EnrollmentFormData;
}

export default function EnrollmentConfirmationEmail({ data }: EnrollmentConfirmationEmailProps) {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Preview>Bedankt voor uw inschrijving - Kids Kroon</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={headerSection}>
                        <Img
                            src="https://kidskroon.be/images/logo.png"
                            width="120"
                            height="120"
                            alt="Kids Kroon"
                            style={logo}
                        />
                        <Heading style={h1}>Bedankt voor uw inschrijving</Heading>
                    </Section>
                    
                    <Section style={section}>
                        <Text style={text}>
                            Beste {data.studentName},
                        </Text>
                        
                        <Text style={text}>
                            Bedankt voor uw inschrijving. We hebben deze goed ontvangen en zullen deze zo snel mogelijk verwerken.
                        </Text>

                        <div style={messageBox}>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Cursus:</strong> {data.courseName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Student:</strong> {data.studentName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Geboortedatum:</strong> {new Date(data.birthDate).toLocaleDateString('nl-BE')}
                            </Text>
                        </div>

                        <Text style={text}>
                            We nemen binnenkort contact met u op voor verdere details en planning.
                        </Text>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Met vriendelijke groeten,<br />
                            <span style={brandName}>Kids Kroon</span>
                        </Text>

                        <Hr style={hr} />

                        <div style={socialContainer}>
                            <Link href="https://facebook.com/kidskroon" style={socialLink}>
                                <img 
                                    src="https://kidskroon.be/images/icons/facebook.png" 
                                    alt="Facebook"
                                    width="24"
                                    height="24"
                                    style={socialIcon}
                                />
                            </Link>
                            <Link href="https://youtube.com/@kidskroon" style={socialLink}>
                                <img 
                                    src="https://kidskroon.be/images/icons/youtube.png" 
                                    alt="YouTube"
                                    width="24"
                                    height="24"
                                    style={socialIcon}
                                />
                            </Link>
                        </div>

                        <Text style={contactInfo}>
                            Kids Kroon vzw<br />
                            Schoolstraat 111<br />
                            9100 Sint-Niklaas<br />
                            info@kidskroon.be<br />
                            +32 123 45 67 89
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
    fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '40px 0',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '0 0 48px',
    marginBottom: '64px',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    maxWidth: '600px',
};

const headerSection = {
    background: 'linear-gradient(135deg, #e4a500 0%, #f6c028 100%)',
    borderRadius: '16px 16px 0 0',
    padding: '40px 0',
    marginBottom: '24px',
    textAlign: 'center' as const,
};

const logo = {
    margin: '0 auto 24px',
};

const h1 = {
    color: '#ffffff',
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '1.25',
    padding: '0 48px',
    margin: '0',
    textAlign: 'center' as const,
};

const section = {
    padding: '0 48px',
};

const text = {
    color: '#374151',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '16px 0',
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
    ...text,
    margin: '12px 0',
    display: 'flex',
    gap: '8px',
};

const labelStyle = {
    color: '#e4a500',
    minWidth: '120px',
    display: 'inline-block',
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '32px 0',
};

const footer = {
    ...text,
    color: '#6b7280',
    textAlign: 'center' as const,
};

const brandName = {
    color: '#e4a500',
    fontWeight: '600',
    fontSize: '18px',
};

const socialContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '24px',
};

const socialLink = {
    color: '#6b7280',
    textDecoration: 'none',
};

const socialIcon = {
    display: 'block',
};

const contactInfo = {
    ...text,
    color: '#6b7280',
    fontSize: '14px',
    textAlign: 'center' as const,
    marginTop: '32px',
}; 