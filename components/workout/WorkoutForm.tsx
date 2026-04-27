"use client"
import { createWorkout } from "@/app/actions/workout"
import { useState } from "react"

export default function Form(){
  const [text,setText] = useState("");
  return(
    <div>
      <form>
          <input
          placeholder="Write here exercise name"
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          />
          <button onClick={ async () =>{
            if(!text.trim()) return
            await createWorkout(text)
            setText("");
          }}>
            Add
          </button>
          
      </form>
    </div>
  )
}