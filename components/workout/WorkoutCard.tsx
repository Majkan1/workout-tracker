import Link from "next/link"
type Workout = {
  id : string 
  name : string 
  createdAt : Date
  exercises : {id:string } []
}

export function WorkoutCard({ workout}:{workout:Workout}){
  return(
    <div>
      <p>{workout.id}</p>
      <p>{workout.exercises.length}</p>
      <p>{workout.name}</p>
      <p>{workout.createdAt.toLocaleDateString("pl-PL")}</p>
      <Link href={`/dashboard/workouts/${workout.id}`}>Create new workout</Link>
    </div>
  )
}