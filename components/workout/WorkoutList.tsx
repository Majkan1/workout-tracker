import { WorkoutCard } from "./WorkoutCard"
import { Workout } from "@/app/types"

export function WorkoutList({workout}:{workout:Workout []}){
  return(
    <div>
      {workout.map((item)=>(
        <WorkoutCard key={item.id} workout={item}/>
      ))}
    </div>
  )
}