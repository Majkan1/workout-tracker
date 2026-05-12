import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function LandingPage(){
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return(
    <div>
      <div className="relative h-185 w-full">
        <Image
          src="/gym-picture.avif"
          alt="gym image"
          fill
          sizes="100vw"
          className="object-cover"
        />
           <h1 className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center text-6xl font-bold text-white sm:text-8xl">
             Never give up
           </h1>
      </div>
      <h2 className="flex items-center justify-center m-4 text-6xl font-bold">
        Track your progress
      </h2>

      <div>
        
      </div>

      <div className=" mx-auto max-w-2xl flex  flex-col justify-center">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mx-auto flex flex-col bg-indigo-50 rounded-2xl p-2 my-3.5">
          <h6 className="text-2xl font-bold">What is a workout tracker ?</h6>
          <p className="text-xl">A workout tracker is a tool that helps you log, organize, and review your training sessions.
          Instead of trying to remember what you lifted last Tuesday, every session is saved — exercises, sets, reps
           — so you can focus on making progress rather than tracking it mentally.</p>
        </div>
        <div className="mx-auto flex flex-col bg-indigo-50 rounded-2xl p-2 my-3.5">
            <h6 className="text-2xl font-bold">Is it free?</h6>
            <p className="text-xl">Yes, completely free. Create an account and start logging your workouts in under a minute.</p>
        </div>
        <div className="mx-auto flex flex-col bg-indigo-50 rounded-2xl p-2 my-3.5">
          <h6 className="text-2xl font-bold">What features are coming?</h6>
          <p className="text-xl">We are working on: exercise history charts so you can see strength progress over time, personal records tracking,
          and a workout template system so you can reuse your favourite sessions without rebuilding them each time.</p>
        </div>
        <div className="mx-auto flex flex-col bg-indigo-50 rounded-2xl p-2 my-3.5">
          <h6 className="text-2xl font-bold">Do I need an account?</h6>
        <p className="text-xl">Yes — your workouts are saved to your account so you can access them from any device.</p>
        </div>
      </div>
    </div>
  )
}