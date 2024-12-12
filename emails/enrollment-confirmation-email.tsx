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
    Img,
} from '@react-email/components';
import { Font } from './custom-font';

export default function EnrollmentConfirmationEmail() {
    return (
        <Html>
            <Head>
                <Font />
            </Head>
            <Preview>Bedankt voor uw inschrijving</Preview>

            <Body style={main}>
                <Container style={container}>
                    <Img
                        src={`https://de-kroon.vercel.app/logo-2.png`}
                        width="auto"
                        height="100"
                        alt="De Kroon"
                        style={logo}
                    />

                    <Section style={section}>
                        <Text style={greeting}>
                            Assalaamoe'alaikoem wa rahmatoellah wa barakaatoeh,
                        </Text>

                        <Text style={messageText}>
                            Bedankt voor uw inschrijving. We hebben deze goed ontvangen en zullen deze zo snel mogelijk verwerken.
                        </Text>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Kroonstraat 72, 2140 Borgerhout
                            <br />
                            +32 486 13 39 60
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

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

const footer = {
    color: '#374151',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center' as const,
}; 