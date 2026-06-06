import { Workout } from "@/app/types"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function RecentWorkouts({ workout }: { workout: Workout[] }) {
  const recent = workout.slice(0, 4)

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Recent workouts
        </h2>
        <Link
          href="/dashboard/workouts/new"
          className="text-sm font-medium transition-colors hover:text-muted-foreground"
        >
          + Add new
        </Link>
      </div>

      {recent.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No workouts yet. Add your first one.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {recent.map((w) => (
            <li key={w.id}>
              <Link
                href={`/dashboard/workouts/${w.id}`}
                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-muted/50"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium">{w.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {w.createdAt?.toLocaleDateString("pl-PL")}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {w.exercises?.length ?? 0} exercises
                  </span>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
