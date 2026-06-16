import { describe, expect, test } from "vitest"
describe("Stats Grid", () => {
  test("Workouts together 0", () => {
    const workouts: { exercises: unknown[] }[] = []
    expect(workouts.length).toBe(0)
  })

  test("Workout is 2", () => {
    const workouts: { exercises: [] }[] = [{ exercises: [] }, { exercises: [] }]
    expect(workouts.length).toBe(2)
  })

  test("Sum of the workout", () => {
    const workouts = [{ exercise: [{}, {}, {}] }, { exercise: [{}, {}] }]
    const total = workouts.reduce((acc, cur) => acc + cur.exercise.length, 0)
    expect(total).toBe(5)
  })
})
