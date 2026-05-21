import {getPrisma} from "@/lib/prisma"
import {auth} from "@clerk/nextjs/server"
import { WelcomeHeader } from "./_components/WelcomeHeader";
import { StatsGrid } from "./_components/StatsGrid";
import { RecentWorkouts } from "./_components/RecentWorkouts";
import Link from "next/link";

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
      <Link 
        href="/dashboard/workouts" 
        className="mx-auto mt-6 block w-60 rounded-xl bg-amber-300 py-3 text-center text-xl font-semibold text-amber-950 transition-colors hover:bg-amber-400"
      >
        See all workouts
      </Link>
    </div>
  )
}