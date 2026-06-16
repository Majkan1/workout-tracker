import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WorkoutDetails from "./WorkoutDetail";

vi.mock("@/app/actions/deleteExercise", () => ({ DeleteExercise: vi.fn() }));

vi.mock("@/app/actions/createExercise", () => ({ createExercise: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: vi.fn() }),
  useParams: () => ({ id: "1" }),
}));

const mockWorkout = {
  id: "1",
  name: "Workout 1",
  createdAt: new Date(),
  exercises: [{ name: "ola", reps: 10, id: "1", sets: 10, weight: 10 }],
};

describe("Workout tests", () => {
  test("this shows if the workout name render corrextly", () => {
    render(<WorkoutDetails workout={mockWorkout} />);
    expect(screen.getByText("Workout 1")).toBeInTheDocument();
  });

  test("this shows the exercise name", () => {
    render(<WorkoutDetails workout={mockWorkout} />);
    expect(screen.getByText("ola")).toBeInTheDocument();
  });

  test("this shows he reps sets weight", () => {
    render(<WorkoutDetails workout={mockWorkout} />);
    expect(screen.getByText(/10 sets · 10 reps · 10 kg/)).toBeInTheDocument();
  });
});
