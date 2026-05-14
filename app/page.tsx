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
      <div className="relative h-[72svh] min-h-136 w-full overflow-hidden sm:h-[82vh] sm:min-h-168">
        <Image
          src="/gym-picture.avif"
          alt="gym image"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/25 px-4 text-center sm:gap-6">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-8xl">
            Never give up
          </h1>
          <h2 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Log your workouts
          </h2>
          <Button asChild size="lg" className="px-6 py-5 text-base sm:px-8 sm:py-6 sm:text-lg">
            <Link href="/auth/sign-up">Get started</Link>
          </Button>
        </div>
      </div>
      <h2 className="m-4 flex items-center justify-center text-3xl font-bold sm:text-5xl lg:text-6xl">
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

      <div className="mx-auto my-12 w-full max-w-3xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-emerald-50 p-6 shadow-sm sm:p-10">
          <div className="mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Opinions</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">What athletes say</h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Feedback from our users who train consistently and log every workout.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">5/5 rating</p>
              <p className="mt-3 text-slate-700">
                The clean layout helps me log workouts in under a minute. I finally stay consistent week after week. I can review all my sessions before training and plan better sets.
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Using app for 8 months</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">Martin K. - Strength Athlete</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">5/5 rating</p>
              <p className="mt-3 text-slate-700">
                Seeing all sessions in one place makes progress obvious. I can compare what I did last month instantly. The structure is clear enough that I never miss important details.
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Using app for 6 months</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">Nina R. - Cross Training</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">4.8/5 rating</p>
              <p className="mt-3 text-slate-700">
                Simple to use, fast on mobile, and perfect before and after training. It removed all guesswork from my routine. I open it between sets and update exercises in seconds.
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Using app for 1 year</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">Daria P. - Fitness Coach</p>
            </article>

          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">FAQ</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Quick answers to the most common questions about the tracker.
          </p>
        </div>

        <div className="space-y-4">
          <details className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-colors open:bg-indigo-50/60 sm:px-5 sm:py-4">
            <summary className="flex cursor-pointer list-none flex-col items-start justify-between gap-3 text-left text-lg font-semibold text-slate-900 sm:flex-row sm:items-center sm:gap-4 sm:text-xl">
              <span className="pr-8 sm:pr-0">What is a workout tracker?</span>
              <span className="ml-auto -mt-8 text-2xl text-slate-500 transition-transform group-open:rotate-180 sm:mt-0">⌄</span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
              A workout tracker is a tool that helps you log, organize, and review your training sessions. Instead of trying to remember what you lifted last Tuesday, every session is saved - exercises, sets, reps - so you can focus on making progress rather than tracking it mentally.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-colors open:bg-indigo-50/60 sm:px-5 sm:py-4">
            <summary className="flex cursor-pointer list-none flex-col items-start justify-between gap-3 text-left text-lg font-semibold text-slate-900 sm:flex-row sm:items-center sm:gap-4 sm:text-xl">
              <span className="pr-8 sm:pr-0">Is it free?</span>
              <span className="ml-auto -mt-8 text-2xl text-slate-500 transition-transform group-open:rotate-180 sm:mt-0">⌄</span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
              Yes, completely free. Create an account and start logging your workouts in under a minute.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-colors open:bg-indigo-50/60 sm:px-5 sm:py-4">
            <summary className="flex cursor-pointer list-none flex-col items-start justify-between gap-3 text-left text-lg font-semibold text-slate-900 sm:flex-row sm:items-center sm:gap-4 sm:text-xl">
              <span className="pr-8 sm:pr-0">What features are coming?</span>
              <span className="ml-auto -mt-8 text-2xl text-slate-500 transition-transform group-open:rotate-180 sm:mt-0">⌄</span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
              We are working on exercise history charts so you can see strength progress over time, personal records tracking, and a workout template system so you can reuse your favourite sessions without rebuilding them each time.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-colors open:bg-indigo-50/60 sm:px-5 sm:py-4">
            <summary className="flex cursor-pointer list-none flex-col items-start justify-between gap-3 text-left text-lg font-semibold text-slate-900 sm:flex-row sm:items-center sm:gap-4 sm:text-xl">
              <span className="pr-8 sm:pr-0">Do I need an account?</span>
              <span className="ml-auto -mt-8 text-2xl text-slate-500 transition-transform group-open:rotate-180 sm:mt-0">⌄</span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
              Yes - your workouts are saved to your account so you can access them from any device.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}