import { WorkoutList } from "@/components/workout/WorkoutList";
import {getPrisma} from "@/lib/prisma"
import {auth} from "@clerk/nextjs/server"
const db = getPrisma();
const userId = await auth();

type Workout = {
  id: string
  name: string
  createdAt: Date
  exercises: Exercise []
}

export default async function Dashboard(){

  await db.workout.findMany({
    where:{
      userId? = res
    }
  }
  )

  return(
    <div>
      <WorkoutList res = {workout}/>
    </div>
  )
}