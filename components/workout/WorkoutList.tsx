import { WorkoutCard } from "./WorkoutCard"
import { Workout } from "@/app/types"
import Link from "next/link"

export function WorkoutList({workout}:{workout:Workout []}){
  return(
    <div>
      <h1>My trainings</h1>
      {workout.length===0?
      <p>No exercises</p>:
      workout.map((item)=>(
        <WorkoutCard key={item.id} workout={item}/>
      ))}
      <Link href="/dashboard/workouts">
        +Add new trainings
      </Link>
    </div>
  )
}