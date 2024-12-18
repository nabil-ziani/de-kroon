-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "subjects" TEXT[],
    "ageRange" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "isSaturday" BOOLEAN NOT NULL DEFAULT true,
    "course2Id" TEXT,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");

-- CreateIndex
CREATE INDEX "Course_subjects_idx" ON "Course"("subjects");

-- CreateIndex
CREATE INDEX "Schedule_courseId_idx" ON "Schedule"("courseId");

-- CreateIndex
CREATE INDEX "Schedule_course2Id_idx" ON "Schedule"("course2Id");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_course2Id_fkey" FOREIGN KEY ("course2Id") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
