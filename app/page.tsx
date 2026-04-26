import { getPrisma } from "@/lib/prisma";
import Form from "@/components/workout/WorkoutForm"
export const dynamic = "force-dynamic";

export default async function Home() {
  const workouts = await getPrisma().workout.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Supabase + Prisma
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950">
          Workout tracker jest podlaczony do bazy.
        </h1>
        <p className="max-w-2xl text-base text-neutral-600">
          Lista ponizej pochodzi bezposrednio z Supabase przez Prisma Client.
        </p>
      </div>

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-950">Workouts</h2>
            <p className="text-sm text-neutral-500">
              {workouts.length === 0
                ? "Tabela jest gotowa. Dodaj pierwszy trening."
                : `Znaleziono ${workouts.length} treningow.`}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {workouts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-5 text-sm text-neutral-500">
              Brak rekordow w tabeli `Workout`.
            </div>
          ) : (
            workouts.map((workout) => (
              <article
                key={workout.id}
                className="rounded-xl border border-neutral-200 px-4 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium text-neutral-900">{workout.name}</h3>
                  <time className="text-sm text-neutral-500">
                    {new Intl.DateTimeFormat("pl-PL", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(workout.createdAt)}
                  </time>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
      <Form/>
    </main>
  );
}
