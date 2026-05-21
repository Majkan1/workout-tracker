import { Workout } from "@/app/types"
import Link from "next/link"
export function RecentWorkouts({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto text-w-2xl text-center justify-center items-center">
      <p className="font-semibold uppercase tracking-widest text-slate-400">Latest Trainings</p>
      <div>
        <div className="flex gap-3 justify-center">
          <p>{workout[0]?.name}</p>
          <p>{workout[0]?.createdAt?.toLocaleDateString()}</p>
        </div>
        <div>
          <p>{workout[0]?.exercises?.length || 0}</p>
        </div>
        <div>
          <div>
            <p>{workout[1].name}</p>
            <p>{workout[1]?.createdAt?.toLocaleDateString()}</p>
          </div>
          <div>
            <p className="m-4">{workout[1]?.exercises?.length || 0}</p>
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