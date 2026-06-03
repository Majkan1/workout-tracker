import {describe,test,expect} from "vitest"
import {render,screen} from "@testing-library/react"
import { getPrisma } from "@/lib/prisma";
import WorkoutDetails from "./WorkoutDetail";

    const mockWorkout = { id: "1", name: "Workout 1", createdAt: new Date(),
    exercises: [{ name: "ola", reps: 10 ,id:"1",sets:10,weight:10}] }

export async function getWorkoutByIdForUser(id: string, userId: string) {
  return getPrisma().workout.findUnique({
    where: { id, userId },
    include: { exercises: true },
  });
}

describe("Wokrout tests",()=>{
    test("this shows if the workout name render corrextly",()=>{
        render(<WorkoutDetails workout={mockWorkout}/>)
        expect(screen.getByText("Workout 1")).toBeInTheDocument()
    })

    test("this shows the exercise name",()=>{
        render(<WorkoutDetails workout={mockWorkout}/>)
        expect(screen.getByText("ola")).toBeInTheDocument()
    })

    test("this shows he reps sets weight",()=>{
        render(<WorkoutDetails workout={mockWorkout}/>);
        const items = screen.getAllByAltText(/10/)
        expect(items).toHaveLength(3);
    })
})