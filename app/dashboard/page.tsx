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
    where: {
      userId,
    },
    include: {
      exercises: true,
    },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <WelcomeHeader />
      <StatsGrid workout={workout} />
      <RecentWorkouts workout={workout} />
      <div className="mt-6">
        <Link
          href="/dashboard/workouts"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          See all workouts
        </Link>
      </div>
    </div>
  )
}
