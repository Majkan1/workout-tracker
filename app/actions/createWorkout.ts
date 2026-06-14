"use server"

import {getPrisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import {auth} from "@clerk/nextjs/server"
import { createWorkoutSchema } from "@/app/actions/schemas"

export async function createWorkout(name:string){
    const {userId} = await auth()

    if (!userId) throw new Error("Unauthorized") 

    const result = createWorkoutSchema.safeParse({
        name
    })

    if(!result.success){
        throw new Error(result.error.issues[0].message)
    }
    await getPrisma().workout.create({
        data:{
            name: result.data.name,
            userId
        }
    })
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/workouts/new");
}