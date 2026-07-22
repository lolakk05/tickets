/*
  Warnings:

  - You are about to drop the column `created_at` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `ends_at` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `starts_at` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `Event` table. All the data in the column will be lost.
  - Added the required column `endsAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsAt` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "created_at",
DROP COLUMN "ends_at",
DROP COLUMN "starts_at",
DROP COLUMN "update_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
