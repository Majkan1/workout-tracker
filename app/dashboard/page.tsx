import { WorkoutList } from "@/components/workout/WorkoutList";
import {getPrisma} from "@/lib/prisma"
import {auth} from "@clerk/nextjs/server"
import { WelcomeHeader } from "./_components/WelcomeHeader";

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
      <WelcomeHeader/>
      <WorkoutList workout = {workout}/>
    </div>
  )
}