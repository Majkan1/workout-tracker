//import { WelcomeHeader } from "./_components/WelcomeHeader"
//import { StatsGrid } from "./_components/StatsGrid"
//import { RecentWorkouts } from "./_components/RecentWorkouts"

type Workout = {
  id: string
  name: string
  createdAt: Date
  exercises: { id: string }[]
}

export default async function DashboardPage() {
  const userId = "user-123" 
  const session = { user: { id: userId, name: "User" } } 

  const workouts: Workout[] = []
  const totalWorkouts = 0

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/*<WelcomeHeader name={session?.user?.name} />
      <StatsGrid total={totalWorkouts} recent={workouts} />
      <RecentWorkouts workouts={workouts} />*/}
    </main>
  )
}