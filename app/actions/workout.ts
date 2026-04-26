"use server"

import {getPrisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createWorkout(name:string){
    await getPrisma().workout.create({
        data:{
            name
        }
    })
    revalidatePath("/");
}