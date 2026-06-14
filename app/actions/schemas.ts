import { z } from "zod"

export const createWorkoutSchema = z.object({
  name: z.string().min(1, "The name should contain at least one letter or number"),
})

export const createExerciseSchema = z.object({
  name: z.string().min(1, "Exercise name is required"),
  sets: z.number().min(1, "Number of sets must be minimum 1"),
  reps: z.number().min(1, "Number of reps must be minimum 1"),
  weight: z.number().optional(),
})
