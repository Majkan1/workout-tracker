import { describe, test, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { WorkoutList } from "./WorkoutList"

vi.mock("@/app/actions/deleteWorkout", () => ({ deleteWorkout: vi.fn() }))

const mockWorkout = [
  {
    id: "1",
    name: "Workout 1",
    createdAt: new Date(),
    exercises: [{ name: "ola", reps: 10, id: "1", sets: 10, weight: 10 }],
  },
]

describe("WorkoutList", () => {
  test("shows an empty state when there are no workouts", () => {
    render(<WorkoutList workout={[]} />)
    expect(screen.getByText("No workouts")).toBeInTheDocument()
  })

  test("does not show the empty state when workouts exist", () => {
    render(<WorkoutList workout={mockWorkout} />)
    expect(screen.queryByText("No workouts")).not.toBeInTheDocument()
  })

  test("renders the workout name", () => {
    render(<WorkoutList workout={mockWorkout} />)
    expect(screen.getByText("Workout 1")).toBeInTheDocument()
  })

  test("renders a link to add a new workout", () => {
    render(<WorkoutList workout={mockWorkout} />)
    const addLink = screen.getByRole("link", { name: /Add new workout/i })
    expect(addLink).toBeInTheDocument()
    expect(addLink).toHaveAttribute("href", "/dashboard/workouts/new")
    expect(screen.getByText("+ Add new workout")).toBeInTheDocument()
  })
})
