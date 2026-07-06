import { beforeEach, describe, expect, test, vi } from "vitest"
import { deleteWorkout } from "./deleteWorkout"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

const { deleteMock } = vi.hoisted(() => ({ deleteMock: vi.fn() }))

vi.mock("@clerk/nextjs/server", () => ({ auth: vi.fn() }))
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }))
vi.mock("@/lib/prisma", () => ({
  getPrisma: () => ({ workout: { delete: deleteMock } }),
}))

function mockSignedInUser(userId: string | null) {
  vi.mocked(auth).mockResolvedValue({ userId } as unknown as Awaited<ReturnType<typeof auth>>)
}

describe("deleteWorkout", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("rejects and never touches the database when the user is not signed in", async () => {
    mockSignedInUser(null)

    await expect(deleteWorkout("workout-1")).rejects.toThrow("Unauthorized")
    expect(deleteMock).not.toHaveBeenCalled()
  })

  test("deletes the workout scoped to the signed-in user and revalidates the dashboard", async () => {
    mockSignedInUser("user-1")

    await deleteWorkout("workout-1")

    expect(deleteMock).toHaveBeenCalledWith({
      where: { id: "workout-1", userId: "user-1" },
    })
    expect(revalidatePath).toHaveBeenCalledWith("/dashboard")
  })
})
