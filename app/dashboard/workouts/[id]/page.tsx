import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getPrisma } from "@/lib/prisma";
import { PageProps } from "@/app/types";
import Link from "next/link";
import ExerciseForm from "@/components/workout/ExerciseForm";
import { DeleteExercise } from "@/app/actions/deleteExercise";

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
  return (
    <div className="mx-auto max-w-2xl py-12 px-4 text-center">
      <header className="mb-6">
        <h1 className="text-4xl font-serif">{workout.name}</h1>
        <p className="text-sm text-gray-500 mt-2">{new Date(workout.createdAt).toLocaleDateString("pl-PL")}</p>
      </header>

      {workout.exercises.length === 0 ? (
        <p className="text-lg text-gray-600">No exercises</p>
      ) : (
        <div className="rounded-lg border p-4 text-left bg-white shadow-sm">
          {workout.exercises.map((item) => (
            <div key={item.id} className="mb-4">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-sm text-gray-600">Sets: {item.sets} • Reps: {item.reps} • {item.weight ?? "-"}kg</p>
            
              <form action={DeleteExercise.bind(null, item.id)}>
                <button type="submit">
                  Delete exercise
                </button>
              </form>
            </div>
          ))}
        </div>
      )}

      <ExerciseForm/>

      <div className="mt-8">
        <Link href="/dashboard/workouts" className="text-lg">Back</Link>
      </div>
    </div>
  );
}