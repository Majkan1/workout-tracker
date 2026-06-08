import { Workout } from "@/app/types";
import Link from "next/link";
import ExerciseForm from "@/components/workout/ExerciseForm";
import { DeleteExercise } from "@/app/actions/deleteExercise";
import { ArrowLeft, Trash2 } from "lucide-react";

export default function WorkoutDetails({ workout }: { workout: Workout }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Link
        href="/dashboard/workouts"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to workouts
      </Link>

      <header className="mb-8 mt-6">
        <h1 className="text-3xl font-semibold tracking-tight">{workout.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {new Date(workout.createdAt).toLocaleDateString("pl-PL")}
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Exercises
        </h2>

        {workout.exercises.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-10 text-center">
            <p className="text-sm text-muted-foreground">No exercises yet.</p>
          </div>
        ) : (
          <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {workout.exercises.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium">{item.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.sets} sets · {item.reps} reps · {item.weight ?? "—"} kg
                  </p>
                </div>

                <form action={DeleteExercise.bind(null, item.id)}>
                  <button
                    type="submit"
                    aria-label="Delete exercise"
                    className="cursor-pointer text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <Trash2 size={16} />
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </section>

      <ExerciseForm />
    </div>
  );
}
