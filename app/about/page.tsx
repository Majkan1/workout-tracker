import { Clock, Dumbbell, Target } from "lucide-react"

const values = [
  {
    icon: Dumbbell,
    title: "Track any lift",
    description: "Log your exercises, weights, sets and reps with a simple, fast interface.",
  },
  {
    icon: Target,
    title: "Set goals",
    description: "Watch your volume grow over time and try to beat your past records.",
  },
  {
    icon: Clock,
    title: "Review history",
    description: "Look back at your previous workouts to see exactly what you did last time.",
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About Workout Tracker</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your personal companion for building a stronger, healthier version of yourself.
        </p>
      </div>

      <div className="mt-12 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          Workout Tracker was born out of a simple need: replacing cluttered notebooks, scattered
          phone notes and complicated spreadsheets with one clean, focused app. Whether you are
          picking up weights for the first time or tracking specific volume as an advanced lifter,
          this tool is built to keep you accountable.
        </p>
        <p>
          We believe consistency is the key to progress. By giving you a distraction-free place to
          log your exercises, sets, reps and weights, we remove friction from your training. Focus
          on the lift — we will handle the tracking.
        </p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-muted">
              <Icon size={22} className="text-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
