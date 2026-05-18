import { WorkoutList } from "@/components/workout/WorkoutList";
import {getPrisma} from "@/lib/prisma"
import {auth} from "@clerk/nextjs/server"

type Workout = {
  id: string
  name: string
  createdAt: Date
  exercises: Exercise []
}

type Exercise = {
  id: string
  name: string
  sets: number
  reps: number
  weight: number
}

export default async function Dashboard(){

  const db = getPrisma();
  const { userId } = await auth();

  if(!userId) return;
  const workout = await db.workout.findMany({
    where:{
      userId
    },
    include:
    {
      exercises:true
    }
  }
  )

  return(
    <div>
      <WorkoutList workout = {workout}/>
    </div>
  )
}