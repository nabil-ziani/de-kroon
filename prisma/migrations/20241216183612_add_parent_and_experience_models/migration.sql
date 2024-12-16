-- CreateEnum
CREATE TYPE "PickupMethod" AS ENUM ('ALONE', 'PARENTS', 'SIBLINGS');

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "childName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "hadPreviousClasses" BOOLEAN NOT NULL DEFAULT false,
    "fatherId" TEXT,
    "motherId" TEXT,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "learningDisorders" TEXT,
    "allergies" TEXT,
    "pickupMethod" "PickupMethod" NOT NULL,
    "courseName" TEXT NOT NULL,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "donorEmail" TEXT,
    "donorName" TEXT,
    "transactionId" TEXT,
    "buckarooKey" TEXT,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreviousExperience" (
    "id" TEXT NOT NULL,
    "enrollmentId" TEXT NOT NULL,
    "canRecognizeLetters" BOOLEAN,
    "canRecognizeLetterForms" BOOLEAN,
    "canReadDiacritics" BOOLEAN,
    "canReadExtensions" BOOLEAN,
    "canReadThreeLetterWords" BOOLEAN,
    "canReadFourLetterWords" BOOLEAN,
    "canReadShadda" BOOLEAN,
    "canReadSokoun" BOOLEAN,
    "canReadThreeWordSentence" BOOLEAN,
    "canReadFourWordSentence" BOOLEAN,
    "canStopAtEndOfSentence" BOOLEAN,
    "canWriteLetters" BOOLEAN,
    "canWriteLetterForms" BOOLEAN,
    "canConnectLetters" BOOLEAN,
    "knowsSunAndMoonLetters" BOOLEAN,
    "canWriteDictation" BOOLEAN,
    "canTranslateToNL" BOOLEAN,
    "canAnswerYesNo" BOOLEAN,
    "canAnswerQuestions" BOOLEAN,
    "canIntroduceInArabic" BOOLEAN,
    "canGivePresentationInArabic" BOOLEAN,
    "canReadQuranIndependently" BOOLEAN,
    "canReadQuranWithRules" BOOLEAN,
    "numberOfAhzaab" INTEGER,
    "lastKnownSurah" TEXT,
    "threeYearGoal" TEXT,

    CONSTRAINT "PreviousExperience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donation_transactionId_key" ON "Donation"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_buckarooKey_key" ON "Donation"("buckarooKey");

-- CreateIndex
CREATE UNIQUE INDEX "PreviousExperience_enrollmentId_key" ON "PreviousExperience"("enrollmentId");

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "Parent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_motherId_fkey" FOREIGN KEY ("motherId") REFERENCES "Parent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreviousExperience" ADD CONSTRAINT "PreviousExperience_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
