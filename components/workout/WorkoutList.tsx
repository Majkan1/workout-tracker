import { WorkoutCard } from "./WorkoutCard"
import { Workout } from "@/app/types"
import Link from "next/link"

export function WorkoutList({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto max-w-lg text-center bg-amber-100 rounded-4xl">
      <h1 className="text-3xl">My Workouts</h1>
      {workout.length===0?
      <p>No exercises</p>:
      workout.map((item)=>(
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.createdAt.toLocaleDateString("PL-pl")}</p>
          <WorkoutCard  workout={item}/>
        </div>
      ))}
      <Link href="/dashboard/workouts/new" className="text-xl my-4">
        +Add new workout
      </Link>
    </div>
  )
}
