export function WelcomeHeader({ name }: { name?: string }) {
  return <h1>Hej, {name ?? "tam"} 👋</h1>
}