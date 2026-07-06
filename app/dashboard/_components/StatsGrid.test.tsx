import "@testing-library/jest-dom/vitest"
import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { StatsGrid } from "./StatsGrid"
import { Workout } from "@/app/types"

const pushDay: Workout = {
  id: "workout-1",
  name: "Push Day",
  createdAt: new Date("2026-07-01T10:00:00Z"),
  exercises: [
    { id: "e1", name: "Bench press", sets: 3, reps: 10, weight: 60 },
    { id: "e2", name: "Incline press", sets: 3, reps: 10, weight: 40 },
    { id: "e3", name: "Push-ups", sets: 3, reps: 15, weight: 0 },
  ],
}

const legDay: Workout = {
  id: "workout-2",
  name: "Leg Day",
  createdAt: new Date("2026-06-28T10:00:00Z"),
  exercises: [
    { id: "e4", name: "Squat", sets: 3, reps: 8, weight: 80 },
    { id: "e5", name: "Leg press", sets: 3, reps: 12, weight: 120 },
  ],
}

describe("StatsGrid", () => {
  test("renders zero counts and a placeholder when there are no workouts", () => {
    render(<StatsGrid workout={[]} />)

    // both the Workouts and Exercises cards show 0
    expect(screen.getAllByText("0")).toHaveLength(2)
    expect(screen.getByText("—")).toBeInTheDocument()
  })

  test("counts workouts, sums exercises and shows the latest workout name", () => {
    render(<StatsGrid workout={[pushDay, legDay]} />)

    expect(screen.getByText("2")).toBeInTheDocument() // 2 workouts
    expect(screen.getByText("5")).toBeInTheDocument() // 3 + 2 exercises
    expect(screen.getByText("Push Day")).toBeInTheDocument() // first item = latest
  })
})
