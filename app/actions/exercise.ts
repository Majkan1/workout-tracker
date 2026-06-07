"use server"
import {auth} from "@clerk/nextjs/server"
import { getPrisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createExercise(name:string,repsNumber:number,setsNumber:number,weightNumber:number,workoutId:string){
  const {userId} = await auth()

  if(!userId)  throw new Error("Unauthorized");

  const workout = await getPrisma().workout.findUnique({
    where: { id: workoutId },
    select: { userId: true },
  })

  if (!workout || workout.userId !== userId) {
    throw new Error("Not found or unauthorized")
  }

  await getPrisma().exercise.create({
    data:{
              name,
              reps: repsNumber,
              sets: setsNumber,
              weight: weightNumber,
              workout:{ connect:{id:workoutId}},
            }
    }
)
revalidatePath("/dashboard")
}