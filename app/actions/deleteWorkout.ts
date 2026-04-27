"use server"

import {getPrisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import {auth} from "@clerk/nextjs/server"

export async function deleteWorkout(id:string){
    const {userId} = await auth()
    if(!userId) throw new Error("Unauthorized ")
    await getPrisma().workout.delete({
        where:{
            id,
            userId
        }
    })
    revalidatePath("/")
}