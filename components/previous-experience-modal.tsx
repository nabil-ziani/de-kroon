import { Fragment, useState } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { FaTimes, FaCheck, FaTimes as FaCross } from 'react-icons/fa';
import { PreviousExperience } from '@prisma/client';
import toast from 'react-hot-toast';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Partial<PreviousExperience>) => void;
}

type Category = {
    title: string;
    description: string;
    questions: {
        key: keyof PreviousExperience;
        question: string;
        type: 'boolean' | 'number' | 'text';
        required?: boolean;
    }[];
};

const categories: Category[] = [
    {
        title: 'Leesvaardigheid',
        description: 'Beoordeel de leesvaardigheid van het kind',
        questions: [
            { key: 'canRecognizeLetters', question: 'Het kind kan de letters losstaand herkennen', type: 'boolean', required: true },
            { key: 'canRecognizeLetterForms', question: 'Het kind kan de letters in begin-, midden- en eindvorm herkennen', type: 'boolean', required: true },
            { key: 'canReadDiacritics', question: 'Het kind kan de letters met de leestekens lezen', type: 'boolean', required: true },
            { key: 'canReadExtensions', question: 'Het kind kan de letters lezen met de verleningen', type: 'boolean', required: true },
            { key: 'canReadThreeLetterWords', question: 'Het kind kan woordjes lezen bestaand uit 3 letters', type: 'boolean', required: true },
            { key: 'canReadFourLetterWords', question: 'Het kind kan woordjes lezen bestaand uit meer dan 4 letters', type: 'boolean', required: true },
            { key: 'canReadShadda', question: 'Het kind kan de "shadda" (verdubbeling) correct lezen', type: 'boolean', required: true },
            { key: 'canReadSokoun', question: 'Het kind kan de "sokoun" correct lezen', type: 'boolean', required: true },
            { key: 'canReadThreeWordSentence', question: 'Het kind kan een zin lezen bestaand uit 3 woordjes', type: 'boolean', required: true },
            { key: 'canReadFourWordSentence', question: 'Het kind kan een zin lezen bestaand uit meer dan 4 woordjes', type: 'boolean', required: true },
            { key: 'canStopAtEndOfSentence', question: 'Het kind kan op het juiste leesteken stoppen op het einde van de zin', type: 'boolean', required: true },
        ],
    },
    {
        title: 'Schrijfvaardigheid',
        description: 'Beoordeel de schrijfvaardigheid van het kind',
        questions: [
            { key: 'canWriteLetters', question: 'Het kind kan de letters losstaand schrijven', type: 'boolean', required: true },
            { key: 'canWriteLetterForms', question: 'Het kind kan de letters in begin-, midden-, en eindvorm schrijven', type: 'boolean', required: true },
            { key: 'canConnectLetters', question: 'Het kind kan de letters correct met elkaar verbinden', type: 'boolean', required: true },
            { key: 'knowsSunAndMoonLetters', question: 'Het kind kent de zon- en maanletters en kan dit toepassen', type: 'boolean', required: true },
            { key: 'canWriteDictation', question: 'Het kind is in staat om gedicteerde (gekende) woordjes correct op te schrijven', type: 'boolean', required: true },
        ],
    },
    {
        title: 'Spreekvaardigheid',
        description: 'Beoordeel de spreekvaardigheid van het kind',
        questions: [
            { key: 'canTranslateToNL', question: 'Het kind kan een Arabische tekst mondeling vertalen naar het Nederlands met behulp van een woordenschatlijst', type: 'boolean', required: true },
            { key: 'canAnswerYesNo', question: 'Het kind kan op Ja-NEEN vragen antwoorden', type: 'boolean', required: true },
            { key: 'canAnswerQuestions', question: 'Het kind kan op vragen (vanuit een gelezen tekst) antwoorden in het Arabisch', type: 'boolean', required: true },
            { key: 'canIntroduceInArabic', question: 'Het kind kan zich in het Arabisch voorstellen', type: 'boolean', required: true },
            { key: 'canGivePresentationInArabic', question: 'Het kind kan een spreekbeurt geven van 5 minuten in het Arabisch', type: 'boolean', required: true },
        ],
    },
    {
        title: 'Koran',
        description: 'Beoordeel de Koran kennis van het kind',
        questions: [
            { key: 'canReadQuranIndependently', question: 'Het kind kan zelfstandig koran lezen', type: 'boolean', required: true },
            { key: 'canReadQuranWithRules', question: 'Het kind leest de koran met de juiste regels', type: 'boolean', required: true },
            { key: 'numberOfAhzaab', question: 'Hoeveel ahzaab kent het kind?', type: 'text', required: true },
            { key: 'lastKnownSurah', question: 'Indien het kind minder dan 3 ahzaab kent, tot welke soerah kent hij of zij?', type: 'text', required: false },
            { key: 'threeYearGoal', question: 'Wat is jullie doel (kind en ouders) binnen 3 jaar – of hoeveel ahzaab wil je leren in 3 jaar tijd?', type: 'text', required: true },
        ],
    },
];

export default function PreviousExperienceModal({ isOpen, onClose, onSubmit }: Props) {
    const [answers, setAnswers] = useState<Partial<PreviousExperience>>({});
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handleAnswer = (key: keyof PreviousExperience, value: boolean | number | string) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
    };

    const isCurrentCategoryComplete = () => {
        const currentQuestions = categories[currentCategoryIndex].questions;
        return currentQuestions.every(q => {
            const answer = answers[q.key];
            if (q.key === 'lastKnownSurah') {
                const ahzaabAnswer = (answers.numberOfAhzaab || '') as string;
                if (ahzaabAnswer.includes('3')) {
                    return true;
                }
            }
            if (!q.required) return true;
            if (q.type === 'boolean') return typeof answer === 'boolean';
            return typeof answer === 'string' && answer.trim() !== '';
        });
    };

    const handleSubmit = () => {
        const allQuestionsAnswered = categories.every(category =>
            category.questions.every(q => {
                const answer = answers[q.key];
                if (q.key === 'lastKnownSurah') {
                    const ahzaabAnswer = (answers.numberOfAhzaab || '') as string;
                    if (ahzaabAnswer.includes('3')) {
                        return true;
                    }
                }
                if (!q.required) return true;
                if (q.type === 'boolean') return typeof answer === 'boolean';
                return typeof answer === 'string' && answer.trim() !== '';
            })
        );

        if (!allQuestionsAnswered) {
            toast.error('Vul alstublieft alle verplichte vragen in voordat u de test voltooit.');
            return;
        }

        onSubmit(answers);
        onClose();
    };

    const nextCategory = () => {
        if (!isCurrentCategoryComplete()) {
            toast.error('Beantwoord alstublieft alle vragen in deze categorie voordat u verder gaat.');
            return;
        }

        if (currentCategoryIndex < categories.length - 1) {
            setCurrentCategoryIndex(prev => prev + 1);
        }
    };

    const previousCategory = () => {
        if (currentCategoryIndex > 0) {
            setCurrentCategoryIndex(prev => prev - 1);
        }
    };

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50">
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                </Transition.Child>

                {/* Modal */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-4xl transform transition-all">
                                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
                                    {/* Header - blijft vast bovenaan */}
                                    <div className="bg-white px-8 py-6 border-b border-gray-100">
                                        <button
                                            onClick={onClose}
                                            className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors rounded-lg p-2 hover:bg-gray-100"
                                        >
                                            <FaTimes className="w-5 h-5" />
                                        </button>

                                        <Dialog.Title className="text-3xl font-bold text-gray-800 mb-2">
                                            Eerdere ervaring
                                        </Dialog.Title>
                                        <p className="text-gray-500">
                                            Help ons het niveau van uw kind beter te begrijpen door onderstaande vragen te beantwoorden.
                                        </p>
                                    </div>

                                    {/* Content - scrollbaar */}
                                    <div className="flex-1 overflow-y-auto">
                                        <div className="p-8">
                                            <div className="mb-8">
                                                {/* Progress Indicator */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-xl font-bold text-gray-800">
                                                        {categories[currentCategoryIndex].title}
                                                    </h3>
                                                    <span className="text-sm text-gray-500">
                                                        {currentCategoryIndex + 1} van {categories.length}
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-crown transition-all duration-300"
                                                        style={{ width: `${((currentCategoryIndex + 1) / categories.length) * 100}%` }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Questions */}
                                            <div className="space-y-6">
                                                {categories[currentCategoryIndex].questions.map((q) => (
                                                    <div key={q.key} className="bg-gray-50 rounded-xl p-6">
                                                        <p className="text-gray-800 font-medium mb-4">
                                                            {q.question}
                                                            {q.required && <span className="text-red-500 ml-1">*</span>}
                                                        </p>
                                                        {q.type === 'boolean' ? (
                                                            <div className="flex gap-4">
                                                                <button
                                                                    onClick={() => handleAnswer(q.key, true)}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                                                                        ${answers[q.key] === true
                                                                            ? 'bg-green-500 text-white'
                                                                            : 'bg-white text-gray-600 hover:bg-green-50'}`}
                                                                >
                                                                    <FaCheck className="w-4 h-4" />
                                                                    Ja
                                                                </button>
                                                                <button
                                                                    onClick={() => handleAnswer(q.key, false)}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                                                                        ${answers[q.key] === false
                                                                            ? 'bg-red-500 text-white'
                                                                            : 'bg-white text-gray-600 hover:bg-red-50'}`}
                                                                >
                                                                    <FaCross className="w-4 h-4" />
                                                                    Nee
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <input
                                                                type="text"
                                                                value={answers[q.key] as string || ''}
                                                                onChange={(e) => handleAnswer(q.key, e.target.value)}
                                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-crown/50 text-gray-800"
                                                                placeholder="Typ hier uw antwoord..."
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer - blijft vast onderaan */}
                                    <div className="bg-white px-8 py-6 border-t border-gray-100">
                                        <div className="flex justify-between">
                                            <button
                                                onClick={previousCategory}
                                                className={`px-6 py-3 rounded-xl font-medium transition-colors
                                                    ${currentCategoryIndex === 0
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                                disabled={currentCategoryIndex === 0}
                                            >
                                                Vorige
                                            </button>
                                            {currentCategoryIndex === categories.length - 1 ? (
                                                <button
                                                    onClick={handleSubmit}
                                                    className="bg-crown text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
                                                >
                                                    Voltooien
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={nextCategory}
                                                    className="bg-crown text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors"
                                                >
                                                    Volgende
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}