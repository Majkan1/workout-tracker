"use client"
import { createWorkout } from "@/app/actions/createWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Form(){
  const [text,setText] = useState("");
  const [reps,setReps] = useState("");
  const [sets,setSets] = useState("");
  const [weight,setWeight] = useState("");
  const router = useRouter();

  return(
    <div className="mx-auto max-w-lg text-center">
      <form
        className="flex flex-col gap-2 w-full mx-auto text-xl
        items-center"
        onSubmit={async (event) => {
          event.preventDefault();
          if(!text.trim()) return
          const repsNumber = Number(reps)
          const setsNumber = Number(sets)
          const weightNumber = Number(weight)
          if(!repsNumber) return
          if(!setsNumber) return
          if(!weightNumber) return
          await createWorkout(text,repsNumber,setsNumber,weightNumber);
          setText("");
          setReps("");
          setSets("");
          setWeight("");
          router.refresh();
        }}
      >
          <label htmlFor="name">Exercise:</label>
          <input
          className="max-w-lg rounded-2xl w-=11/12  border-amber-950 border-2"
          placeholder="Write here exercise name"
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          />
          <label htmlFor="reps">Reps:</label>
          <input type="number" id="reps" name="reps" min="1" max="100" value={reps} 
            onChange={(e)=>{setReps(e.target.value)}}
          className="max-w-lg rounded-2xl w-1/2 border-amber-950 border-2"/>
          <label htmlFor="sets">Sets:</label>
          <input type="number" id="sets" name="sets" min="1" max="100" value={sets} 
            onChange={(e)=>{setSets(e.target.value)}}
          className="max-w-lg rounded-2xl w-1/2  border-amber-950 border-2"/>
          <label htmlFor="weight">Weight:</label>
          <input type="number" id="weight" name="weight" min="1" max="100" value={weight} 
            onChange={(e)=>{setWeight(e.target.value)}}
          className="max-w-lg rounded-2xl w-1/2  border-amber-950 border-2"/>
          
          <button type="submit">
            Add
          </button>
          
      </form>
    </div>
  )
}
