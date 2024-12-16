import PDFDocument from 'pdfkit';
import { EnrollmentFormData } from '@/utils/validation';

export async function generateEnrollmentPDF(data: EnrollmentFormData): Promise<Buffer> {
    return new Promise((resolve) => {
        const doc = new PDFDocument({
            size: 'A4',
            margins: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            }
        });

        // Collect the PDF chunks
        const chunks: Buffer[] = [];
        doc.on('data', (chunk: Buffer) => chunks.push(chunk));
        doc.on('end', () => resolve(Buffer.concat(chunks)));

        // Add logo
        doc.image('public/logo-2.png', {
            fit: [200, 100],
            align: 'center'
        });

        doc.moveDown(2);

        // Title
        doc.fontSize(20)
            .font('Helvetica-Bold')
            .text('Inschrijvingsformulier', { align: 'center' });

        doc.moveDown(2);

        // Student Info
        addSection(doc, 'Student Informatie', [
            { label: 'Naam', value: data.childName },
            { label: 'Geboortedatum', value: new Date(data.birthDate).toLocaleDateString('nl-BE') },
            { label: 'Eerdere lessen gevolgd', value: data.hadPreviousClasses ? 'Ja' : 'Nee' },
            { label: 'Cursus', value: data.courseName }
        ]);

        // Previous Experience
        if (data.hadPreviousClasses && data.previousExperience) {
            addSection(doc, 'Eerdere Ervaring', [
                { label: 'Leesvaardigheid', isSubheading: true },
                { label: 'Letters losstaand', value: data.previousExperience.canRecognizeLetters ? 'Ja' : 'Nee' },
                { label: 'Letters in vormen', value: data.previousExperience.canRecognizeLetterForms ? 'Ja' : 'Nee' },
                { label: 'Leestekens', value: data.previousExperience.canReadDiacritics ? 'Ja' : 'Nee' },
                { label: 'Verlengingen', value: data.previousExperience.canReadExtensions ? 'Ja' : 'Nee' },
                { label: '3-letter woorden', value: data.previousExperience.canReadThreeLetterWords ? 'Ja' : 'Nee' },
                { label: '4+ letter woorden', value: data.previousExperience.canReadFourLetterWords ? 'Ja' : 'Nee' },
                { label: 'Shadda', value: data.previousExperience.canReadShadda ? 'Ja' : 'Nee' },
                { label: 'Sokoun', value: data.previousExperience.canReadSokoun ? 'Ja' : 'Nee' },
                { label: '3-woord zinnen', value: data.previousExperience.canReadThreeWordSentence ? 'Ja' : 'Nee' },
                { label: '4+ woord zinnen', value: data.previousExperience.canReadFourWordSentence ? 'Ja' : 'Nee' },
                { label: 'Leestekens einde zin', value: data.previousExperience.canStopAtEndOfSentence ? 'Ja' : 'Nee' },

                { label: 'Schrijfvaardigheid', isSubheading: true },
                { label: 'Letters schrijven', value: data.previousExperience.canWriteLetters ? 'Ja' : 'Nee' },
                { label: 'Letters in vormen', value: data.previousExperience.canWriteLetterForms ? 'Ja' : 'Nee' },
                { label: 'Letters verbinden', value: data.previousExperience.canConnectLetters ? 'Ja' : 'Nee' },
                { label: 'Zon- en maanletters', value: data.previousExperience.knowsSunAndMoonLetters ? 'Ja' : 'Nee' },
                { label: 'Dictee', value: data.previousExperience.canWriteDictation ? 'Ja' : 'Nee' },

                { label: 'Spreekvaardigheid', isSubheading: true },
                { label: 'Vertalen naar NL', value: data.previousExperience.canTranslateToNL ? 'Ja' : 'Nee' },
                { label: 'Ja/Nee vragen', value: data.previousExperience.canAnswerYesNo ? 'Ja' : 'Nee' },
                { label: 'Vragen beantwoorden', value: data.previousExperience.canAnswerQuestions ? 'Ja' : 'Nee' },
                { label: 'Zichzelf voorstellen', value: data.previousExperience.canIntroduceInArabic ? 'Ja' : 'Nee' },
                { label: 'Spreekbeurt', value: data.previousExperience.canGivePresentationInArabic ? 'Ja' : 'Nee' },

                { label: 'Koran', isSubheading: true },
                { label: 'Zelfstandig lezen', value: data.previousExperience.canReadQuranIndependently ? 'Ja' : 'Nee' },
                { label: 'Juiste regels', value: data.previousExperience.canReadQuranWithRules ? 'Ja' : 'Nee' },
                { label: 'Aantal ahzaab', value: data.previousExperience.numberOfAhzaab || 'Niet opgegeven' },
                { label: 'Laatste soerah', value: data.previousExperience.lastKnownSurah || 'Niet opgegeven' },
                { label: '3-jaar doel', value: data.previousExperience.threeYearGoal || 'Niet opgegeven' }
            ]);
        }

        // Parents Info
        if (data.father.firstName) {
            addSection(doc, 'Vader', [
                { label: 'Naam', value: `${data.father.firstName} ${data.father.lastName}` },
                { label: 'E-mail', value: data.father.email || 'Niet opgegeven' },
                { label: 'Telefoon', value: data.father.phone || 'Niet opgegeven' }
            ]);
        }

        if (data.mother.firstName) {
            addSection(doc, 'Moeder', [
                { label: 'Naam', value: `${data.mother.firstName} ${data.mother.lastName}` },
                { label: 'E-mail', value: data.mother.email || 'Niet opgegeven' },
                { label: 'Telefoon', value: data.mother.phone || 'Niet opgegeven' }
            ]);
        }

        // Address
        addSection(doc, 'Adres', [
            { label: 'Straat en nummer', value: `${data.street} ${data.houseNumber}` },
            { label: 'Gemeente', value: data.city }
        ]);

        // Extra Info
        const pickupMethods = {
            ALONE: 'Mag alleen naar huis',
            PARENTS: 'Wordt opgehaald door ouders',
            SIBLINGS: 'Wordt opgehaald door broer of zus'
        };

        addSection(doc, 'Extra Informatie', [
            { label: 'Ophaalmethode', value: pickupMethods[data.pickupMethod] },
            { label: 'Leerstoornissen', value: data.learningDisorders || 'Geen' },
            { label: 'Allergieën', value: data.allergies || 'Geen' },
            { label: 'Extra bericht', value: data.message || 'Geen' }
        ]);

        // Footer
        doc.moveDown(2)
            .fontSize(8)
            .text('Dit document werd automatisch gegenereerd via het online inschrijvingsformulier van kidskroon.be', {
                align: 'center',
                lineGap: 0
            });

        doc.end();
    });
}

function addSection(doc: typeof PDFDocument, title: string, items: Array<{ label: string, value?: string, isSubheading?: boolean }>) {
    doc.moveDown()
        .fontSize(14)
        .font('Helvetica-Bold')
        .text(title)
        .moveDown(0.5);

    items.forEach(item => {
        if (item.isSubheading) {
            doc.moveDown(0.5)
                .fontSize(12)
                .font('Helvetica-Bold')
                .text(item.label)
                .moveDown(0.5);
        } else {
            doc.fontSize(10)
                .font('Helvetica')
                .text(`${item.label}: ${item.value}`, {
                    continued: false,
                    indent: 20
                });
        }
    });
} 