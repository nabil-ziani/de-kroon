import PDFDocument from 'pdfkit';
import { EnrollmentFormData } from '@/utils/validation';
import path from 'path';

export async function generateEnrollmentPDF(data: EnrollmentFormData): Promise<Buffer> {
    return new Promise((resolve) => {
        const doc = new PDFDocument({
            size: 'A4',
            margins: {
                top: 20,
                bottom: 50,
                left: 50,
                right: 50
            },
            autoFirstPage: true,
            font: undefined
        });

        // Register Poppins fonts
        doc.registerFont('Poppins', path.join(process.cwd(), 'public/fonts/Poppins-Regular.ttf'));
        doc.registerFont('Poppins-Bold', path.join(process.cwd(), 'public/fonts/Poppins-Bold.ttf'));

        // Set default font immediately after registration
        doc.font('Poppins').fontSize(10);

        // Collect the PDF chunks
        const chunks: Buffer[] = [];
        doc.on('data', (chunk: Buffer) => chunks.push(chunk));
        doc.on('end', () => resolve(Buffer.concat(chunks)));

        // Add logo
        const logoPath = path.join(process.cwd(), 'public', 'logo-2.png');
        doc.image(logoPath, {
            fit: [200, 100],
            align: 'center'
        });

        doc.moveDown(5);

        // Title and student info
        doc.fontSize(20)
            .font('Poppins-Bold')
            .text('Resultaten Instaptest', { align: 'center' });

        doc.moveDown();

        doc.fontSize(12)
            .font('Poppins')
            .text(`Student: ${data.childName}`, { align: 'center' })
            .text(`Datum: ${new Date().toLocaleDateString('nl-BE')}`, { align: 'center' });

        doc.moveDown(2);

        if (data.previousExperience) {
            // Reading Skills Section
            addSection(doc, 'Leesvaardigheid', [
                { question: 'Kan de student de letters van het Arabisch alfabet herkennen wanneer ze los staan?', answer: data.previousExperience.canRecognizeLetters },
                { question: 'Kan de student de letters herkennen in hun verschillende vormen (begin, midden, eind)?', answer: data.previousExperience.canRecognizeLetterForms },
                { question: 'Kan de student leestekens (harakaat) correct lezen?', answer: data.previousExperience.canReadDiacritics },
                { question: 'Kan de student verlengingen correct lezen?', answer: data.previousExperience.canReadExtensions },
                { question: 'Kan de student woorden van drie letters lezen?', answer: data.previousExperience.canReadThreeLetterWords },
                { question: 'Kan de student woorden van vier of meer letters lezen?', answer: data.previousExperience.canReadFourLetterWords },
                { question: 'Kan de student de shadda correct lezen?', answer: data.previousExperience.canReadShadda },
                { question: 'Kan de student de sokoun correct lezen?', answer: data.previousExperience.canReadSokoun },
                { question: 'Kan de student zinnen van drie woorden lezen?', answer: data.previousExperience.canReadThreeWordSentence },
                { question: 'Kan de student zinnen van vier of meer woorden lezen?', answer: data.previousExperience.canReadFourWordSentence },
                { question: 'Stopt de student correct bij leestekens aan het einde van een zin?', answer: data.previousExperience.canStopAtEndOfSentence }
            ]);

            // Writing Skills Section
            addSection(doc, 'Schrijfvaardigheid', [
                { question: 'Kan de student Arabische letters schrijven?', answer: data.previousExperience.canWriteLetters },
                { question: 'Kan de student letters in hun verschillende vormen schrijven?', answer: data.previousExperience.canWriteLetterForms },
                { question: 'Kan de student letters correct met elkaar verbinden?', answer: data.previousExperience.canConnectLetters },
                { question: 'Kent de student het verschil tussen zon- en maanletters?', answer: data.previousExperience.knowsSunAndMoonLetters },
                { question: 'Kan de student schrijven volgens dictee?', answer: data.previousExperience.canWriteDictation }
            ]);

            // Speaking Skills Section
            addSection(doc, 'Spreekvaardigheid', [
                { question: 'Kan de student Arabische woorden naar het Nederlands vertalen?', answer: data.previousExperience.canTranslateToNL },
                { question: 'Kan de student ja/nee vragen in het Arabisch beantwoorden?', answer: data.previousExperience.canAnswerYesNo },
                { question: 'Kan de student open vragen in het Arabisch beantwoorden?', answer: data.previousExperience.canAnswerQuestions },
                { question: 'Kan de student zichzelf voorstellen in het Arabisch?', answer: data.previousExperience.canIntroduceInArabic },
                { question: 'Kan de student een spreekbeurt geven in het Arabisch?', answer: data.previousExperience.canGivePresentationInArabic }
            ]);

            // Quran Section
            addSection(doc, 'Koran', [
                { question: 'Kan de student de Koran zelfstandig lezen?', answer: data.previousExperience.canReadQuranIndependently },
                { question: 'Kan de student de Koran lezen met de juiste regels?', answer: data.previousExperience.canReadQuranWithRules },
                { question: 'Hoeveel ahzaab kent de student?', value: data.previousExperience.numberOfAhzaab || 'Niet opgegeven' },
                { question: 'Wat is de laatste soerah die de student heeft geleerd?', value: data.previousExperience.lastKnownSurah || 'Niet opgegeven' },
                { question: 'Wat is het doel van de student voor de komende 3 jaar?', value: data.previousExperience.threeYearGoal || 'Niet opgegeven' }
            ]);
        }

        doc.end();
    });
}

function addSection(doc: typeof PDFDocument, title: string, items: Array<{ question: string, answer?: boolean, value?: string }>) {
    doc.moveDown()
        .fontSize(14)
        .font('Poppins-Bold')
        .text(title)
        .moveDown();

    items.forEach(item => {
        doc.fontSize(10)
            .font('Poppins-Bold')
            .text(item.question)
            .font('Poppins');

        if (typeof item.answer === 'boolean') {
            doc.text(item.answer ? '✓ Ja' : '✗ Nee', {
                indent: 20,
                continued: false
            });
        } else if (item.value) {
            doc.text(item.value, {
                indent: 20,
                continued: false
            });
        }

        doc.moveDown(0.5);
    });
} 