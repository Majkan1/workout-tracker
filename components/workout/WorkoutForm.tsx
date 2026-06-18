"use client"
import Link from "next/link"
import { createWorkout } from "@/app/actions/createWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"

export default function Form() {
  const [text, setText] = useState("")
  const router = useRouter()

  return (
    <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to dashboard
      </Link>

      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <h1 className="text-xl font-semibold tracking-tight">New workout</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Give your workout a name to start logging exercises.
        </p>

        <form
          className="mt-5 space-y-4"
          onSubmit={async (event) => {
            event.preventDefault()
            if (!text.trim()) return
            await createWorkout(text)
            setText("")
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Create workout
          </button>
        </form>
      </div>
    </div>
  )
}
