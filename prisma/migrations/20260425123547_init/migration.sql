-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "EXERCISE"(
    "id" INT NOT NULL,
    "name" TEXT NOT NULL,
    "sets" INT NOT NULL,
    "reps" INT NOT NULL,
    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
)