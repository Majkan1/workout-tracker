import { deleteWorkout } from "@/app/actions/deleteWorkout";
import { Workout } from "@/app/types";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export function WorkoutList({ workout = [] }: { workout?: Workout[] }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          My workouts
        </h1>
        <Link
          href="/dashboard/workouts/new"
          className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          + Add new workout
        </Link>
      </div>

      {workout.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center">
          <p className="font-medium">No workouts</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Create your first workout to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {workout.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/40"
            >
              <Link href={`/dashboard/workouts/${item.id}`} className="block">
                <p className="text-lg font-semibold tracking-tight">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.createdAt.toLocaleDateString("pl-PL")}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.exercises.length} exercises
                </p>
              </Link>

              <form action={deleteWorkout.bind(null, item.id)} className="mt-4">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-destructive"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
