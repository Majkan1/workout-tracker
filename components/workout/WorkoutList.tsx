import { WorkoutCard } from "./WorkoutCard"
import { Workout } from "@/app/types"
import Link from "next/link"
export function WorkoutList({workout}:{workout:Workout []}){
  return(
    <div>
      {workout.map((item)=>(
        <WorkoutCard key={item.id} workout={item}/>
      ))}
      <div>
        <Link href={`/dashboard/workouts/${workout.id}`}>Create new workout</Link>
      </div>
    </div>
  )
}