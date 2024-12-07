import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Link,
    Img,
} from '@react-email/components';
import { ContactFormData } from '@/utils/validation';

interface ContactConfirmationEmailProps {
    data: ContactFormData;
}

export default function ContactConfirmationEmail({ data }: ContactConfirmationEmailProps) {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Preview>Bedankt voor uw bericht</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={headerSection}>
                        <Img
                            src="https://kidskroon.be/logo-2.png"
                            width="120"
                            height="120"
                            alt="Kids Kroon"
                            style={logo}
                        />
                    </Section>

                    <Section style={section}>
                        <Text style={text}>
                            Assalaamoe'alaikoem wa rahmatoellah wa barakaatoeh,
                        </Text>

                        <Text style={text}>
                            We hebben uw bericht goed ontvangen en zullen zo snel mogelijk contact met u opnemen.
                        </Text>

                        <Hr style={hr} />

                        <Text style={footer}>
                            BaarakAllahoe fiekoem,<br />
                            <span style={brandName}>Kids Kroon</span>
                        </Text>

                        <Hr style={hr} />

                        <div style={socialContainer}>
                            <Link href="https://facebook.com/kidskroon" style={socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280" style={socialIcon}>
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </Link>
                            <Link href="https://youtube.com/@kidskroon" style={socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280" style={socialIcon}>
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </Link>
                        </div>

                        <Text style={contactInfo}>
                            Kroonstraat 72<br />
                            2140 Borgerhout<br />
                            info@kidskroon.be<br />
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
    fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '40px 20px',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    maxWidth: '600px',
    padding: '48px 0',
};

const headerSection = {
    background: 'linear-gradient(135deg, #e4a500 0%, #f6c028 100%)',
    padding: '40px 0',
    marginBottom: '24px',
    textAlign: 'center' as const,
};

const logo = {
    margin: '0 auto 24px',
    display: 'block',
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