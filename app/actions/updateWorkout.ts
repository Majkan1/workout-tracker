"use server"
import {auth} from "@clerk/nextjs/server"
import { getPrisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { createWorkoutSchema } from "@/app/actions/createWorkout"

export async function updateWorkout(name:string,id:string){
    const {userId} = await auth();

    if(!userId) throw new Error("Unauthorized");

    const result = createWorkoutSchema.safeParse({
        name,
    })

    if(!result.success){
        throw new Error(result.error.issues[0].message)
    }

    const workout = await getPrisma().workout.findUnique({
        where:{id},
        select:{userId:true}
    })

    if(!workout || workout.userId !== userId){
        throw new Error("Not found or unauthorized")
    }

    await getPrisma().workout.update({
        where:{id},
        data:{
            name: result.data.name,
        }
    })
    revalidatePath("/dashboard")
}
