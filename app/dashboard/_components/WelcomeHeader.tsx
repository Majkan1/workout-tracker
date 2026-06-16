import { currentUser } from "@clerk/nextjs/server"

export async function WelcomeHeader() {
  const user = await currentUser()
  const name = user?.firstName ?? "there"

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Hello, {name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">Here is how your training is going.</p>
    </div>
  )
}
