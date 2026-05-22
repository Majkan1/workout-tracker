import { Workout } from "@/app/types"
import Link from "next/link"
export function RecentWorkouts({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto max-w-2xl text-center justify-center items-center">
      <p className="font-semibold uppercase tracking-widest text-slate-400">Latest Trainings</p>
      <div>
        <div className="flex gap-3 justify-center">
          <p className="font-medium text-slate-800 text-lg">{workout[0]?.name}</p>
          <p className="mt-0.5 text-lg text-slate-400">{workout[0]?.createdAt?.toLocaleDateString()}</p>
        </div>
        <div>
          <p className="rounded-md bg-emerald-100 px-3 py-1 text-xl
          font-medium text-emerald-700">
            {workout[0]?.exercises?.length || 0}</p>
        </div>
        <div>
          <div>
            <p className="text-lg">{workout[1]?.name}</p>
            <p className="text-lg">{workout[1]?.createdAt?.toLocaleDateString()}</p>
          </div>
          <div>
            <p className="m-4 text-lg">{workout[1]?.exercises?.length || 0}</p>
          </div>
        </div>
      </div>
      <Link href="/dashboard/workouts/new" className=" rounded-xl bg-emerald-700
        text-xl hover:bg-emerald-800 m-3 p-2">
         + Add new workout
      </Link>
    </div>
  )
}