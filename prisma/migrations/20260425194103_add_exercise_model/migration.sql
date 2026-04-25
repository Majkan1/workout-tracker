/*
  Warnings:

  - You are about to drop the `EXERCISE` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "EXERCISE";

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);
