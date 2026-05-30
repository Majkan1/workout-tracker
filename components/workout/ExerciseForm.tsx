"use client"
import Link from "next/link"
import { createExercise } from "@/app/actions/exercise"
import { DeleteExercise } from "@/app/actions/deleteExercise"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react" 
export default function ExerciseForm(){
  const [text,setText] = useState("");
  const [sets,setSets] = useState("");
  const [reps,setReps] = useState("");
  const [weight,setWeight] = useState("");
  const router = useRouter();
  const params = useParams();
  const workoutId = params.id as string
  return(
    <div>
      <Link href="/dashboard/workouts" className="">
        Come back
      </Link>

      <h1 className="mb-2 mt-3 text-2xl font-semibold text-slate-900 ">New training</h1>
      <p className="mb-4 text-xl text-slate-500">Write the exercise</p>
      <form className="flex flex-col gap-2 w-full mx-auto text-xl
        items-center"
        onSubmit={async (event)=>{
          event.preventDefault();
          if(!text.trim()) return
          const Number1 = Number(sets)
          const Number2 = Number(reps)
          const Number3 = Number(weight)
          if(!Number1) return;
          if(!Number2) return;
          if(!Number3) return;
          if(!workoutId){
            console.error("Missing workout id - cannot create exercise");
            return;
          }
          await createExercise(text,Number1,Number2,Number3,workoutId);
          setText("");
          setSets("");
          setReps("");
          setWeight("");
          router.refresh();
        }}       
        >
          <label htmlFor="name">Exercise:</label>
          <input
          className="max-w-lg rounded-2xl w-11/12  border-amber-950 border-2"
          placeholder="Write here the exercise name"
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          />
          <label htmlFor="sets">Sets:</label>
          <input
          className="max-w-lg rounded-2xl border-sky-500"
          type="number" id="sets" name="sets" min="1" max="100" 
          value={sets}
          onChange={(e)=>{setSets(e.target.value)}}
          />
          <label htmlFor="reps">Reps:</label>
          <input
          className="max-w-lg rounded-2xl border-sky-500"
          type="number" id="reps" name="reps" min="1" max="100"
          value={reps}
          onChange={(e)=>{setReps(e.target.value)}}
          />
          <label htmlFor="weight">Weight:</label>
          <input
          className="max-w-lg rounded-2xl border-sky-500"
          type="number" id="weight" name="weight" min="1" max="100"
          value={weight}
          onChange={(e)=>{setWeight(e.target.value)}}
          />
          <button type="submit">
            Add exercise
          </button>
      </form>
    </div>
  )
}