import EditWorkoutForm from "./EditWorkoutForm"
import EditExerciseForm from "./EditExerciseForm"
import { auth } from "@clerk/nextjs/server";
import { getPrisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { PageProps } from "@/app/types";

export default async  function Edit({params}:PageProps){
  const {id} = await params
  const {userId} = await auth();
  if(!userId) return null

  const workout = await getPrisma().workout.findUnique({
    where:{id,userId},
    include:{exercises:true}
  })
  if(!workout) return notFound();

  return(
    <div>
      <EditWorkoutForm workout={workout}/>
      {
      workout.exercises.map((exercise)=>(
        <EditExerciseForm key={exercise.id} exercise={exercise}/>
      ))
    }
      </div>
  )
}