import { getPrisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { WorkoutList } from "@/components/workout/WorkoutList";

export default async function WorkoutsPage() {
  const db = getPrisma();
  const { userId } = await auth();

  if (!userId) return null;

  const workout = await db.workout.findMany({
    where: { userId },
    include: { exercises: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <WorkoutList workout={workout} />
    </div>
  );
}
