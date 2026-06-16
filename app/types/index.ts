export type Workout = {
  id: string
  name: string
  createdAt: Date
  exercises: Exercise[]
}

export type Exercise = {
  id: string
  name: string
  sets: number
  reps: number
  weight: number | null
}

export type PageProps = {
  params: Promise<{ id: string }>
}
