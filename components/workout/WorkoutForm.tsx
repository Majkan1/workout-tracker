"use client"
import { createWorkout } from "@/app/actions/createWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Form(){
  const [text,setText] = useState("");
  const router = useRouter();

  return(
    <div className="mx-auto max-w-3xl text-center">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if(!text.trim()) return
          await createWorkout(text)
          setText("");
          router.refresh();
        }}
      >
          <input
          placeholder="Write here exercise name"
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          />
          <label htmlFor="reps">Reps:</label>
          <input type="number" id="reps" name="reps" min="1" max="100"/>
          <label htmlFor="sets">Sets:</label>
          <input type="number" id="sets" name="sets" min="1" max="100"/>
          <button type="submit">
            Add
          </button>
          
      </form>
    </div>
  )
}
