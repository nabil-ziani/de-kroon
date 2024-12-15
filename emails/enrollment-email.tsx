import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { EnrollmentFormData } from '@/utils/validation';
import { Font } from './custom-font';

interface Props {
    data: EnrollmentFormData;
}

export default function EnrollmentEmail({ data }: Props) {
    const pickupMethods = {
        ALONE: 'Mag alleen naar huis',
        PARENTS: 'Wordt opgehaald door ouders',
        SIBLINGS: 'Wordt opgehaald door broer of zus'
    };

    return (
        <Html>
            <Head>
                <Font />
            </Head>
            <Preview>Nieuwe inschrijving voor {data.courseName}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={section}>
                        <Img
                            src={`https://de-kroon.vercel.app/logo-2.png`}
                            width="auto"
                            height="100"
                            alt="De Kroon"
                            style={logo}
                        />

                        <Text style={greeting}>
                            Nieuwe inschrijving ontvangen via het inschrijfformulier:
                        </Text>

                        {/* Student Info */}
                        <Section style={messageBox}>
                            <Heading style={h2}>Student Informatie</Heading>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Naam:</strong> {data.childName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Geboortedatum:</strong> {new Date(data.birthDate).toLocaleDateString('nl-BE')}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Eerdere lessen gevolgd:</strong> {data.hadPreviousClasses ? 'Ja' : 'Nee'}
                            </Text>
                            {data.previousLevel && (
                                <Text style={detailText}>
                                    <strong style={labelStyle}>Vorig niveau:</strong> {data.previousLevel}
                                </Text>
                            )}
                            <Text style={detailText}>
                                <strong style={labelStyle}>Cursus:</strong> {data.courseName}
                            </Text>
                        </Section>

                        {/* Father Info */}
                        <Section style={messageBox}>
                            <Heading style={h2}>Vader</Heading>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Naam:</strong> {data.father.firstName} {data.father.lastName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>E-mail:</strong> {data.father.email}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Telefoon:</strong> {data.father.phone}
                            </Text>
                        </Section>

                        {/* Mother Info */}
                        <Section style={messageBox}>
                            <Heading style={h2}>Moeder</Heading>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Naam:</strong> {data.mother.firstName} {data.mother.lastName}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>E-mail:</strong> {data.mother.email}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Telefoon:</strong> {data.mother.phone}
                            </Text>
                        </Section>

                        {/* Address */}
                        <Section style={messageBox}>
                            <Heading style={h2}>Adres</Heading>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Straat:</strong> {data.street} {data.houseNumber}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Gemeente:</strong> {data.city}
                            </Text>
                        </Section>

                        {/* Additional Info */}
                        <Section style={messageBox}>
                            <Heading style={h2}>Extra Informatie</Heading>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Ophaalmethode:</strong> {pickupMethods[data.pickupMethod]}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Leerstoornissen:</strong><br /> {data.learningDisorders || 'Geen'}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Allergieën:</strong><br /> {data.allergies || 'Geen'}
                            </Text>
                            <Text style={detailText}>
                                <strong style={labelStyle}>Extra bericht:</strong><br /> {data.message}
                            </Text>
                        </Section>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Deze inschrijving is ontvangen via het online formulier op kidskroon.be
                        </Text>
                    </Section>
                </Container>
            </Body >
        </Html >
    );
}

const main = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    margin: '0',
    padding: '40px 20px',
    backgroundColor: '#f6f9fc',
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

const h2 = {
    color: '#374151',
    fontSize: '18px',
    fontWeight: '800',
    lineHeight: '1.25',
    marginBottom: '16px',
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
    borderColor: '#e5e7eb',
    margin: '24px 0',
};

const footer = {
    color: '#6b7280',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
}; 