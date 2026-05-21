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
    <div className="mx-auto max-w-2xl px-4 py-8">
      <WelcomeHeader/>
      <StatsGrid workout={workout}/>
      <RecentWorkouts workout={workout}/>
    </div>
  )
}