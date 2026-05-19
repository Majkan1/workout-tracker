import Link from "next/link"
import { Workout } from "@/app/types"

export function WorkoutCard({ workout}:{workout:Workout}){
  return(
    <div>
      <p>{workout.exercises.length}</p>
      <p>{workout.name}</p>
      <p>{workout.createdAt.toLocaleDateString("pl-PL")}</p>
    </div>
  )
}