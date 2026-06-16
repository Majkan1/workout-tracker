"use client"
import { updateWorkout } from "@/app/actions/updateWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Workout } from "@/app/types"

export default function EditWorkoutForm({ workout }: { workout: Workout }) {
  const [data, setData] = useState(workout.name)
  const router = useRouter()

  return (
    <div>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground mt-15 ml-15"
      >
        <ArrowLeft size={16} /> Back to dashboard
      </Link>

      <div className=" rounded-xl border border-border bg-card p-6 mr-100 ml-100 mt-10">
        <h1 className="text-xl font-semibold tracking-tight">Update the workout</h1>
        <p className="mt-1 text-sm text-muted-foreground">Give your workout a name again.</p>

        <form
          className="mt-5 space-y-4"
          onSubmit={async (event) => {
            event.preventDefault()
            if (!data.trim()) return
            await updateWorkout(data, workout.id)
            router.refresh()
          }}
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Workout name
            </label>
            <input
              id="name"
              className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/40"
              placeholder="e.g. Push day"
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Update the workout
          </button>
        </form>
      </div>
    </div>
  )
}
