"use client";
import { createExercise } from "@/app/actions/createExercise";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const inputClass =
  "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/40";
const labelClass = "mb-1.5 block text-sm font-medium";

export default function ExerciseForm() {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [text, setText] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const router = useRouter();
  const params = useParams();
  const workoutId = params.id as string;
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold tracking-tight">Add exercise</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Log the exercise with your sets, reps and weight.
      </p>

      <form
        className="mt-5 space-y-4"
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");
          setIsPending(true);
          try {
            if (!text.trim()) return;
            const Number1 = Number(sets);
            const Number2 = Number(reps);
            const Number3 = Number(weight);
            if (!Number1) return;
            if (!Number2) return;
            if (!Number3) return;
            if (!workoutId) {
              console.error("Missing workout id - cannot create exercise");
              return;
            }
            await createExercise(text, Number1, Number2, Number3, workoutId);
            setText("");
            setSets("");
            setReps("");
            setWeight("");
            router.refresh();
          } catch (error) {
            setError("you wrote a wrong value try another one ");
          } finally {
            setIsPending(false);
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
          className="w-full cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          Add exercise
        </button>
        {error && <p>You wrote wrong data ,try another one</p>}
      </form>
      <button disabled={isPending}>
        {isPending ? "Adding ..." : "Add an exercise"}
      </button>
    </section>
  );
}
