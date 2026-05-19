import { WorkoutCard } from "./WorkoutCard"
import { Workout } from "@/app/types"
import Link from "next/link"

export function WorkoutList({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto max-w-lg text-center bg-amber-100 rounded-4xl">
      <h1 className="text-3xl">My trainings</h1>
      {workout.length===0?
      <p>No exercises</p>:
      workout.map((item)=>(
        <WorkoutCard key={item.id} workout={item}/>
      ))}
      <Link href="/dashboard/workouts" className="text-xl my-4">
        +Add new trainings
      </Link>
    </div>
  )
}