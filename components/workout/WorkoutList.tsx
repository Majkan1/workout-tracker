import { WorkoutCard } from "./WorkoutCard"
import { Workout } from "@/app/types"
import Link from "next/link"

export function WorkoutList({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl">My Workouts</h1>
        <Link 
          href="/dashboard/workouts/new" 
          className="rounded-xl bg-emerald-700 p-2 text-xl text-white hover:bg-emerald-800"
        >
          + Add new workout
        </Link>
      </div>

      {workout.length === 0 ? 
        <div className="bg-slate-100 p-10 rounded-3xl text-center">
          <p className="text-xl font-medium">No exercises</p>
        </div>
      : 
        <div className="grid gap-5 sm:grid-cols-2">
          {workout.map((item) => (
            <div key={item.id} className="bg-amber-100 rounded-3xl p-5 text-center">
              <p className="text-2xl font-bold">{item.name}</p>
              <p className="mb-4 text-lg">{item.createdAt.toLocaleDateString("pl-PL")}</p>
              
              <WorkoutCard workout={item}/>
            </div>
          ))}
        </div>
      }
    </div>
  )
}