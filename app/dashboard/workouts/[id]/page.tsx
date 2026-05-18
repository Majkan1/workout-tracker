import Link from "next/link"

type Exercise = {
  id: string
  name: string
  sets: number
  reps: number
  weight: number
}

type Workout = {
  id: string
  name: string
  createdAt: Date
  exercises: Exercise[]
}

type PageProps = {
  params: Promise<{ id: string }>
}
