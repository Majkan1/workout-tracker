"use server"

import { getPrisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs/server"

export async function deleteExercise(id: string) {
  const { userId } = await auth()
  if (!userId) throw new Error("Unauthorized!")

  const exercise = await getPrisma().exercise.findUnique({
    where: { id },
    include: { workout: true },
  })

  if (!exercise || exercise.workout.userId !== userId) {
    throw new Error("Not found or unauthorized")
  }

  await getPrisma().exercise.delete({
    where: { id },
  })
  revalidatePath("/dashboard")
}
