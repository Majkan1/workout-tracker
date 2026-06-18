import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Dumbbell, LineChart, History } from "lucide-react"

export const dynamic = "force-dynamic"

const features = [
  {
    icon: Dumbbell,
    title: "Log any lift",
    description: "Record exercises, sets, reps and weight in a clean, distraction-free form.",
  },
  {
    icon: LineChart,
    title: "See your progress",
    description: "Every session is saved, so it's easy to compare today against last month.",
  },
  {
    icon: History,
    title: "Review your history",
    description: "Look back at exactly what you did last time and plan your next workout.",
  },
]

const steps = [
  { title: "Create an account", description: "It takes less than a minute." },
  { title: "Log your first workout", description: "Add exercises, sets and reps." },
  { title: "Track your progress", description: "Watch the numbers move over time." },
]

const testimonials = [
  {
    quote:
      "I log a session in under a minute, so I actually keep doing it. Six months in and I haven't missed a week.",
    name: "Martin K.",
    role: "Powerlifting",
  },
  {
    quote: "Glancing at last month's numbers before I train completely changed how I plan my sets.",
    name: "Nina R.",
    role: "Cross training",
  },
  {
    quote: "Fast on my phone, easy to update between sets. No clutter, no nonsense.",
    name: "Daria P.",
    role: "Fitness coach",
  },
]

const faqs = [
  {
    q: "What is a workout tracker?",
    a: "A tool that helps you log, organise and review your training. Instead of remembering what you lifted last Tuesday, every session is saved so you can focus on progress, not bookkeeping.",
  },
  {
    q: "Is it free?",
    a: "Yes, completely free. Create an account and start logging in under a minute.",
  },
  {
    q: "What features are coming?",
    a: "Strength progress charts, personal-record tracking, and reusable workout templates so you don't have to rebuild your favourite sessions.",
  },
  {
    q: "Do I need an account?",
    a: "Yes — your workouts are saved to your account so you can reach them from any device.",
  },
]

export default async function LandingPage() {
  const { userId } = await auth()
  if (userId) {
    redirect("/dashboard")
  }

  return (
    <div>
      <section className="relative h-[78svh] min-h-136 w-full overflow-hidden">
        <Image
          src="/gym-picture.avif"
          alt="Person training in a gym"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-black/55 px-4 text-center">
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Track every workout. Never lose your progress.
          </h1>
          <p className="max-w-xl text-balance text-base text-white/80 sm:text-lg">
            A simple, focused tracker for logging your lifts and watching yourself get stronger.
          </p>
          <Link
            href="/auth/sign-up"
            className="rounded-lg bg-white px-7 py-3 text-base font-medium text-black transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built to remove friction from your routine so you can focus on the lift.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Icon size={20} className="text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
            <p className="mt-4 text-muted-foreground">
              Three steps from signing up to staying consistent.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background font-mono text-lg font-medium">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What people say</h2>
          <p className="mt-4 text-muted-foreground">
            From lifters who train consistently and log every session.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <figure
              key={name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6"
            >
              <blockquote className="text-sm leading-relaxed text-foreground">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium">
                  {q}
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
