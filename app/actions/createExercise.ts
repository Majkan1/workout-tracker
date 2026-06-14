"use server"
import {z} from "zod"
import {auth} from "@clerk/nextjs/server"
import { getPrisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createExerciseSchema = z.object({
  name: z.string().min(1,"Exercise name is required"),
  sets: z.number().min(1,"Number of sets must be minimum 1"),
  reps: z.number().min(1,"Number of reps must be minimum 1"),
  weight: z.number().optional(),
})

export async function createExercise(name:string,repsNumber:number,setsNumber:number,weightNumber:number,workoutId:string){
  const {userId} = await auth()

  if(!userId)  throw new Error("Unauthorized");

  const result = createExerciseSchema.safeParse({
    name,
    sets:setsNumber,
    reps:repsNumber,
    weight:weightNumber,
  })

  if(!result.success){
    throw new Error(result.error.issues[0].message)
  }
  
  const workout = await getPrisma().workout.findUnique({
    where: { id: workoutId },
    select: { userId: true },
  })

  if (!workout || workout.userId !== userId) {
    throw new Error("Not found or unauthorized")
  }

  await getPrisma().exercise.create({
    data:{
              name: result.data.name,
              reps: result.data.reps,
              sets: result.data.sets,
              weight: result.data.weight,
              workout:{ connect:{id:workoutId}},
            }
    }
)
revalidatePath("/dashboard")
}