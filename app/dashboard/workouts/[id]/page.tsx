import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getPrisma } from "@/lib/prisma";
import { PageProps } from "@/app/types";
import Link from "next/link";

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

  const date = new Date(workout.createdAt).toLocaleDateString("pl-PL");

  return (
    <div className="mx-auto max-w-2xl p-4 text-center text-lg">
      <h2 className="text-2xl font-medium">{workout.name}</h2>
      <p className="text-sm text-gray-500">{date}</p>

      {workout.exercises.length === 0 ? (
        <p className="mt-4">No exercises</p>
      ) : (
        <div className="mt-4 space-y-3">
          {workout.exercises.map((ex) => (
            <div key={ex.id} className="border rounded p-3 text-left">
              <div className="font-semibold">{ex.name}</div>
              <div className="text-sm text-gray-600">Sets: {ex.sets} • Reps: {ex.reps}{ex.weight ? ` • ${ex.weight}kg` : ''}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link href="/dashboard/workouts">Back</Link>
      </div>
    </div>
  );
}
