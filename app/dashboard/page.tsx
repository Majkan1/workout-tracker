import { WorkoutList } from "@/components/workout/WorkoutList";
import {getPrisma} from "@/lib/prisma"
import {auth} from "@clerk/nextjs/server"
import { WelcomeHeader } from "./_components/WelcomeHeader";
import { StatsGrid } from "./_components/StatsGrid";
import { RecentWorkouts } from "./_components/RecentWorkouts";

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
      <StatsGrid workout={workout}/>
      <RecentWorkouts workout={workout}/>
      <WorkoutList workout = {workout}/>
    </div>
  )
}