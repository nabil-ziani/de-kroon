/*
  Warnings:

  - You are about to drop the column `course2Id` on the `Schedule` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_course2Id_fkey";

-- DropIndex
DROP INDEX "Schedule_course2Id_idx";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "course2Id";
