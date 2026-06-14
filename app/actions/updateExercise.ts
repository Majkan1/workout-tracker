"use server"
import {auth} from "@clerk/nextjs/server"
import { getPrisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { createExerciseSchema } from "@/app/actions/createExercise"

export async function updateExercise(name:string,repsNumber:number,setsNumber:number,weightNumber:number,id:string){
    const {userId} = await auth();

    if(!userId) throw new Error("Unauthorized access");

    const result = createExerciseSchema.safeParse({
        name,
        sets:setsNumber,
        reps:repsNumber,
        weight:weightNumber,
    })

    if(!result.success){
        throw new Error(result.error.issues[0].message)
    }

    const exercise = await getPrisma().exercise.findUnique({
        where:{id},
        include:{workout:true}
    })

    if(!exercise|| exercise.workout.userId !== userId){
        throw new Error("Not found or anauthorized")
    }

    await getPrisma().exercise.update({
        where:{id},
            data:{
              name: result.data.name,
              reps: result.data.reps,
              sets: result.data.sets,
              weight: result.data.weight,
            }
    })
    revalidatePath("/dashboard")
}