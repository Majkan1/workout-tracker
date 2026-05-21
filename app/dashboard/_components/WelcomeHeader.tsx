export function WelcomeHeader({ name }: { name?: string }) {
  return (
    <div>
      <h1 className="mx-auto text-2xl text-center mb-3">Hello, {name ?? "there"} 👋</h1>
      </div>  
  ) 
  
}