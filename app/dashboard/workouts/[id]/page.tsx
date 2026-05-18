import { notFound } from "next/navigation";
import { userId } from  "@clerk/nextjs"
export default async function WorkoutsId(){
  const { id } = await params
  const { userId } = await auth()
  if(!userId) return;

  const workout = await db.workout.findUnique({
    where:{ id,userId},
    include: {exercises: true }
  })

  if (!workout) notFound()
  return(
    <div>
      <button>Come back</button>
      <p>{workout.name}</p>
      <data>{workout.data}</data>
      <p>{workout.exercises.name}</p>
      <p>{workout.exercises.sets}</p>
      <p>{workout.exercises.reps}</p>
      <p>{workout.exercises.weight}</p>
      <p>{!workout?"Brak ćwiczeń":workout}</p>
    </div>
  )
}