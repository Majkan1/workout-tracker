import { Workout } from "@/app/types"
import Link from "next/link"
export function RecentWorkouts({workout}:{workout:Workout []}){
  return(
    <div className="mx-auto text-w-2xl text-center justify-center items-center">
      <p>Latest Trainings</p>
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
            <p>{workout[1]?.exercises?.length || 0}</p>
          </div>
        </div>
      </div>
      <Link href="/dashboard/workouts/new">
        <p> + Add new workout </p>
      </Link>
    </div>
  )
}