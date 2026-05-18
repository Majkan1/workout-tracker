import { WorkoutCard } from "./WorkoutCard"

type Workout = {
  id : string 
  name : string 
  createdAt : Date
  exercises: {id:string } []
}

export function WorkoutList({workout}:{workout:Workout []}){
  return(
    <div>
      {workout.map((item)=>(
        <WorkoutCard key={item.id} workout={item}/>
      ))}
    </div>
  )
}