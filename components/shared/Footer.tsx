import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Ready to start training?
          </h2>
          <p className="text-sm text-muted-foreground">Log your first workout in under a minute.</p>
        </div>

        <Link
          href="/auth/sign-up"
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get started
        </Link>

        <div className="mt-2 flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <p>© {year} Workout Tracker</p>
          <p>Built by Mikołaj Michalak</p>
        </div>
      </div>
    </footer>
  )
}
