import { Workout } from "@/app/types"
import { Dumbbell, Activity, CalendarClock } from "lucide-react"

export function StatsGrid({ workout }: { workout: Workout[] }) {
  const totalExercises = workout.reduce((acc, cur) => acc + cur.exercises.length, 0)

  const stats = [
    { label: "Workouts", value: workout.length, icon: Dumbbell },
    { label: "Exercises", value: totalExercises, icon: Activity },
    { label: "Latest", value: workout[0]?.name ?? "—", icon: CalendarClock },
  ]

  return (
    <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
          </div>
          <p className="mt-3 truncate text-2xl font-semibold tracking-tight">{value}</p>
        </div>
      ))}
    </div>
  )
}
