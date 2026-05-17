import Link from "next/link"

type Exercise = {
  id: string
  name: string
  sets: number
  reps: number
  weight: number
}

type Workout = {
  id: string
  name: string
  createdAt: Date
  exercises: Exercise[]
}

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function WorkoutDetailPage({ params }: PageProps) {
  await params

  // TODO: Fetch from database when db module is available
  const workoutNotFound = true

  if (workoutNotFound) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-10">
        <p className="text-muted-foreground">Workout not found</p>
      </main>
    )
  }

  const workout: Workout = {
    id: "1",
    name: "Sample Workout",
    createdAt: new Date(),
    exercises: []
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <Link href="/dashboard/workouts"
        className="text-sm text-muted-foreground hover:underline mb-6 block">
        ← Back to workouts
      </Link>

      <h1 className="text-2xl font-semibold mb-1">{workout.name}</h1>
      <p className="text-sm text-muted-foreground mb-8">
        {new Date(workout.createdAt).toLocaleDateString()}
      </p>

      <section>
        <h2 className="text-base font-medium mb-4">Exercises</h2>
        {workout.exercises.length === 0 ? (
          <p className="text-sm text-muted-foreground">No exercises added.</p>
        ) : (
          <ul className="space-y-3">
            {workout.exercises.map((ex: Exercise) => (
              <li key={ex.id}
                className="border rounded-lg px-4 py-3 text-sm">
                <p className="font-medium">{ex.name}</p>
                <p className="text-muted-foreground">
                  {ex.sets} sets · {ex.reps} reps · {ex.weight}kg
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}