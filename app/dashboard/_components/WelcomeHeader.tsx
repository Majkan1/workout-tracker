import { currentUser } from "@clerk/nextjs/server"
export async function WelcomeHeader(){
  const user = await currentUser()
  const name = user?.firstName ?? "there"
  return (
    <div className="mb-6 mx-auto text-2xl text-center ">
      <h1 className="mb-3">Hello, {name} 👋</h1>
      <p className="mt-1 text-slate-500">This is your exercise progress</p>
      </div>  
  ) 
  
}