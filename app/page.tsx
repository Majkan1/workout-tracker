import { getPrisma } from "@/lib/prisma";
import Form from "@/components/workout/WorkoutForm"
import { auth } from "@clerk/nextjs/server";
export const dynamic = "force-dynamic";

export default async function Home() {
  const {userId} = await auth();
  const workouts = await getPrisma().workout.findMany({
    where:{userId},
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <section>
        <div>
          <div>
            <h2>Workouts</h2>
            <p className="text-sm text-neutral-500">
              {workouts.length === 0
                ? "Tabela jest gotowa. Dodaj pierwszy trening."
                : `Znaleziono ${workouts.length} treningow.`}
            </p>
          </div>
        </div>

        <div>
          {workouts.length === 0 ? (
            <div>
              Brak rekordow w tabeli `Workout`.
            </div>
          ) : (
            workouts.map((workout) => (
              <article
                key={workout.id}>
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
