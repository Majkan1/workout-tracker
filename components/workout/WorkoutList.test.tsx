import { describe,test,expect,vi } from "vitest";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { WorkoutList } from "./WorkoutList";

vi.mock("@/app/actions/deleteWorkout", () => ({ deleteWorkout: vi.fn() }));

describe("WorkoutList",()=>{
    test("pokazuje ten komunikat gdy brak workoutów",()=>{
        render(<WorkoutList workout={[]}/>)
        expect(screen.getByText("No workouts")).toBeInTheDocument()
    })
})