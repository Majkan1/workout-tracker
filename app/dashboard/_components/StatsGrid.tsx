import { Workout } from "@/app/types"
export function StatsGrid({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto text-center text-2xl flex max-w-3xl gap-4 justify-center mb-12">
      <div>
        <p>Workouts together:</p>
        <p>{workout.length}</p>
      </div>
      <div>
        <p>Exercises together:</p>
        <p>{workout.reduce((acc,cur)=>(acc+cur.exercises.length),0)}</p>
      </div>
      <div>
        <p>Latest workout:</p>
        <p>{workout[0]?.name}</p>
      </div>
    </div>
  )
}