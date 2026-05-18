import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getPrisma } from "@/lib/prisma";
import { PageProps } from "@/app/types";
import Link from "next/link";

export default async function WorkoutsId({ params }: PageProps) {
  const { id } = await params;
  const { userId } = await auth();
  const db = getPrisma();

  if (!userId) return;

  const workout = await db.workout.findUnique({
    where: { id, userId },
    include: { exercises: true },
  });

  if (!workout) notFound();

  return (
    <div>
      <p>{workout.name}</p>
      <p>{workout.createdAt.toLocaleDateString("pl-PL")}</p>
      {workout.exercises.length===0 ? 
      "No exercises" :
      workout.exercises.map((item)=>(
      <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.sets}</p>
      <p>{item.reps}</p>
      </div>
      ))
    }
      <Link href="/dashboard/workouts">
        Come back
      </Link>
    </div>
  );
}
