import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getPrisma } from "@/lib/prisma";
import { PageProps } from "@/app/types";
import WorkoutDetails from "@/components/workout/WorkoutDetail";

export default async function WorkoutsId({ params }: PageProps) {
  const { id } = await params;
  const { userId } = await auth();
  if (!userId) return null;

  const db = getPrisma();
  const workout = await db.workout.findUnique({
    where: { id, userId },
    include: { exercises: true },
  });

  if (!workout) notFound();
  return <WorkoutDetails workout={workout}/>;

}