import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
          <h1 className="text-6xl font-bold text-white sm:text-8xl">
            Never give up
          </h1>
          <h2 className="text-5xl font-bold text-white">
            Log your workouts
          </h2>
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/auth/sign-up">Get started</Link>
          </Button>
        </div>
      </div>
      <h2 className="flex items-center justify-center m-4 text-6xl font-bold">
        Track your progress
      </h2>

      <div className="mx-auto my-8 flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-4xl font-bold">How does it work</h2>
        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-xl">Create account</p>
          <span aria-hidden="true" className="text-2xl">↓</span>
          <p className="text-xl">Log your first workout</p>
          <span aria-hidden="true" className="text-2xl">↓</span>
          <p className="text-xl">Track your progress</p>
        </div>
      </div>

      <div className="mx-auto my-12 w-full max-w-5xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-emerald-50 p-6 shadow-sm sm:p-10">
          <div className="mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Opinions</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">What athletes say</h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Real feedback from people using the tracker every week to stay consistent and improve workouts.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">5/5 rating</p>
              <p className="mt-3 text-slate-700">
                The clean layout helps me log workouts in under a minute. I finally stay consistent week after week.
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-900">Martin K. - Strength Athlete</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">5/5 rating</p>
              <p className="mt-3 text-slate-700">
                Seeing all sessions in one place makes progress obvious. I can compare what I did last month instantly.
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-900">Nina R. - Cross Training</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">4.8/5 rating</p>
              <p className="mt-3 text-slate-700">
                Simple to use, fast on mobile, and perfect before and after training. It removed all guesswork from my routine.
              </p>
              <p className="mt-5 text-sm font-semibold text-slate-900">Daria P. - Fitness Coach</p>
            </article>

          </div>
        </div>
      </div>

      <div className=" mx-auto max-w-2xl flex  flex-col justify-center">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mx-auto my-3.5 flex flex-col rounded-2xl bg-indigo-50 p-2">
          <h6 className="text-2xl font-bold">What is a workout tracker ?</h6>
          <p className="text-xl">A workout tracker is a tool that helps you log, organize, and review your training sessions.
          Instead of trying to remember what you lifted last Tuesday, every session is saved — exercises, sets, reps
           — so you can focus on making progress rather than tracking it mentally.</p>
        </div>
        <div className="mx-auto my-3.5 flex flex-col rounded-2xl bg-indigo-50 p-2">
            <h6 className="text-2xl font-bold">Is it free?</h6>
            <p className="text-xl">Yes, completely free. Create an account and start logging your workouts in under a minute.</p>
        </div>
        <div className="mx-auto my-3.5 flex flex-col rounded-2xl bg-indigo-50 p-2">
          <h6 className="text-2xl font-bold">What features are coming?</h6>
          <p className="text-xl">We are working on: exercise history charts so you can see strength progress over time, personal records tracking,
          and a workout template system so you can reuse your favourite sessions without rebuilding them each time.</p>
        </div>
        <div className="mx-auto my-3.5 flex flex-col rounded-2xl bg-indigo-50 p-2">
          <h6 className="text-2xl font-bold">Do I need an account?</h6>
        <p className="text-xl">Yes — your workouts are saved to your account so you can access them from any device.</p>
        </div>
      </div>
    </div>
  )
}