import { Workout } from "@/app/types"
export function StatsGrid({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto text-center text-2xl flex max-w-3xl gap-4 justify-center items-center mb-12">
      <div className="rounded-xl bg-slate-50 p-4">
        <p className="mt-2 text-xl text-slate-500">Workouts together:</p>
        <p className="font-semibold text-emerald-500">{workout.length}</p>
      </div>
      <div className="rounded-xl bg-slate-50 p-4">
        <p className=" mt-2 text-xl text-slate-500">Exercises together:</p>
        <p className="font-semibold text-emerald-500">{workout.reduce((acc,cur)=>(acc+cur.exercises.length),0)}</p>
      </div>
      <div>
        <p className=" mt-2 text-lg text-slate-700">Latest workout:</p>
        <p className="font-semibold text-emerald-500">{workout[0]?.name}</p>
      </div>
    </div>
  )
}