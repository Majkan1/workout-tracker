"use client"
import Link from "next/link"
import { createWorkout } from "@/app/actions/createWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function ExerciseForm(){
  const [text,setText] = useState("");
  const router = useRouter();
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
          await createWorkout(text);
          setText("");
          router.refresh();
        }}       
        >
          <label htmlFor="name">Exercise:</label>
          <input
          className="max-w-lg rounded-2xl w-=11/12  border-amber-950 border-2"
          placeholder="Write here the exercise name"
          type="text"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          />

          <button type="submit">
            Add exercise
          </button>
      </form>
    </div>
  )
}