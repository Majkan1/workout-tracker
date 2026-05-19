import Link from "next/link"
import { Workout } from "@/app/types"

export function WorkoutCard({ workout}:{workout:Workout}){
  return(
    <div>
      <Link href={`/dashboard/workouts/${workout.id}`}>
      <p>{workout.exercises.length}</p>
      <p>{workout.name}</p>
      <p>{workout.createdAt.toLocaleDateString("pl-PL")}</p>
      </Link>
    </div>
  )
}