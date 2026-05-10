"use client"
import { createWorkout } from "@/app/actions/createWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Form(){
  const [text,setText] = useState("");
  const router = useRouter();

  return(
    <div>
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
          <button type="submit">
            Add
          </button>
          
      </form>
    </div>
  )
}
