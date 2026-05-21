import { Workout } from "@/app/types"
export function RecentWorkouts({workout}:{workout:Workout []}){
  return(
    <div>
      <p>Latest Trainings</p>
      <div>
        <div>
          <p>{workout[0]?.name}</p>
          <p>{workout[0]?.createdAt?.toLocaleDateString()}</p>
        </div>
        <div>
          <p>{workout[0]?.exercises?.length || 0}</p>
        </div>
      </div>
    </div>
  )
}