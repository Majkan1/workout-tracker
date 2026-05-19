"use client"
import { createWorkout } from "@/app/actions/createWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Form(){
  const [text,setText] = useState("");
  const router = useRouter();

  return(
    <div className="mx-auto max-w-lg text-center">
      <form
        className="flex flex-col gap-2 bg-amber-100 rounded-5xl"
        onSubmit={async (event) => {
          event.preventDefault();
          if(!text.trim()) return
          await createWorkout(text)
          setText("");
          router.refresh();
        }}
      >
          <label htmlFor="name">Exercise:</label>
          <input
          className="max-w-lg rounded-2xl"
          placeholder="Write here exercise name"
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          />
          <label htmlFor="reps">Reps:</label>
          <input type="number" id="reps" name="reps" min="1" max="100"
          className="max-w-lg rounded-2xl"/>
          <label htmlFor="sets">Sets:</label>
          <input type="number" id="sets" name="sets" min="1" max="100"
          className="max-w-lg rounded-2xl"/>
          <label htmlFor="weight">Weight:</label>
          <input type="number" id="weight" name="weight" min="1" max="100"
          className="max-w-lg rounded-2xl"/>
          
          <button type="submit">
            Add
          </button>
          
      </form>
    </div>
  )
}
