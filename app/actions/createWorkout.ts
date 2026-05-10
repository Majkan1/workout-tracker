"use server"

import {getPrisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import {auth} from "@clerk/nextjs/server"

export async function createWorkout(name:string){
    const {userId} = await auth()

    if (!userId) throw new Error("Unauthorized")
    await getPrisma().workout.create({
        data:{
            name,
            userId
        }
    })
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/workouts/new");
}
