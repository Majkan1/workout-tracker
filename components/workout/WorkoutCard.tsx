import Link from "next/link"
type Workout = {
  id : string 
  name : string 
  createdAt : Date
  exercises : {id:string } []
}

export default function WorkoutCard({ workout}:{workout:Workout}){
  return(
    <div>
      <p>This is user  Id {workout.id}</p>
      <p>There are an exercises {workout.exercises.length}</p>
      <p>This is a name of exercises {workout.name}</p>
      <p>This is a date of added exercises {workout.createdAt.toLocaleDateString("pl-PL")}</p>
      <Link href="../app/dashboard/workouts/new/page.tsx">Create new workout</Link>
    </div>
  )
}