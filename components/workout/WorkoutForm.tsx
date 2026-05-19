"use client"
import { createWorkout } from "@/app/actions/createWorkout"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Form(){
  const [text,setText] = useState("");
  const [number1,setNumber1] = useState(0);
  const [number2,setNumber2] = useState(0);
  const [number3,setNumber3] = useState(0);
  const router = useRouter();

  return(
    <div className="mx-auto max-w-lg text-center">
      <form
        className="flex flex-col gap-2 w-full mx-auto text-xl
        items-center"
        onSubmit={async (event) => {
          event.preventDefault();
          if(!text.trim()) return
          if(!number1) return
          if(!number2) return
          if(!number3) return
          await createWorkout(text)
          setText("");
          setNumber1(0);
          setNumber2(0);
          setNumber3(0);
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
          <input type="number" id="reps" name="reps" min="1" max="100" value={number1} 
          onChange={(e)=>{setNumber1(e.currentTarget.valueAsNumber)}}
          className="max-w-lg rounded-2xl w-1/2 border-amber-950 border-2"/>
          <label htmlFor="sets">Sets:</label>
          <input type="number" id="sets" name="sets" min="1" max="100" value={number2} 
          onChange={(e)=>{setNumber2(e.currentTarget.valueAsNumber)}}
          className="max-w-lg rounded-2xl w-1/2  border-amber-950 border-2"/>
          <label htmlFor="weight">Weight:</label>
          <input type="number" id="weight" name="weight" min="1" max="100" value={number3} 
          onChange={(e)=>{setNumber3(e.currentTarget.valueAsNumber)}}
          className="max-w-lg rounded-2xl w-1/2  border-amber-950 border-2"/>
          
          <button type="submit">
            Add
          </button>
          
      </form>
    </div>
  )
}
