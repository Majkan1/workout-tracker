"use client"
import { updateExercise } from "@/app/actions/updateExercise"
import { useState } from "react"
import { Exercise } from "@/app/types"
import { useRouter } from "next/navigation"

const inputClass =
  "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/40"
const labelClass = "mb-1.5 block text-sm font-medium"

export default function ExerciseForm({ exercise }: { exercise: Exercise }) {
  const [error, setError] = useState("")
  const [isPending, setIsPending] = useState(false)
  const [text, setText] = useState(String(exercise.name))
  const [sets, setSets] = useState(String(exercise.sets))
  const [reps, setReps] = useState(String(exercise.reps))
  const [weight, setWeight] = useState(String(exercise.weight ?? ""))
  const router = useRouter()
  return (
    <section className="rounded-xl border border-border bg-card p-6 mr-100 ml-100 mt-10 mb-10">
      <h2 className="text-lg font-semibold tracking-tight">Add exercise</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Log the exercise with your sets, reps and weight.
      </p>

      <form
        className="mt-5 space-y-4 "
        onSubmit={async (event) => {
          event.preventDefault()
          setError("")
          setIsPending(true)
          try {
            if (!text.trim()) return
            const repsNumber = Number(reps)
            const setsNumber = Number(sets)
            const weightNumber = Number(weight)
            if (!repsNumber) return
            if (!setsNumber) return
            if (!weightNumber) return
            if (!exercise.id) {
              console.error("Missing workout id - cannot create exercise")
              return
            }
            await updateExercise(text, repsNumber, setsNumber, weightNumber, exercise.id)
            router.refresh()
          } catch (error) {
            setError("you wrote a wrong value try another one ")
          } finally {
            setIsPending(false)
          }
        }}
      >
        <div>
          <label htmlFor="name" className={labelClass}>
            Exercise
          </label>
          <input
            id="name"
            className={inputClass}
            placeholder="e.g. Bench press"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label htmlFor="sets" className={labelClass}>
              Sets
            </label>
            <input
              className={inputClass}
              type="number"
              id="sets"
              name="sets"
              min="1"
              max="100"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="reps" className={labelClass}>
              Reps
            </label>
            <input
              className={inputClass}
              type="number"
              id="reps"
              name="reps"
              min="1"
              max="100"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="weight" className={labelClass}>
              Weight (kg)
            </label>
            <input
              className={inputClass}
              type="number"
              id="weight"
              name="weight"
              min="1"
              max="100"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          {isPending ? "Saving ..." : "Save an exercise"}
        </button>
        {error && <p>You wrote wrong data ,try another one</p>}
      </form>
    </section>
  )
}
