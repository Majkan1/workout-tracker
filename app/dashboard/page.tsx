import { getPrisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { userId } = await auth();
  let databaseError = false;
  let workouts: { id: string; name: string; createdAt: Date }[] = [];

  try {
    workouts = await getPrisma().workout.findMany({
      where: userId ? { userId } : undefined,
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    databaseError = true;
    console.error("Failed to load workouts", error);
  }

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>My trainings</h1>
            <p>
              {databaseError
                ? "The database is not available right now."
                : workouts.length === 0
                ? "You do not have trainings yet. Add your first workout."
                : `You have ${workouts.length} training${workouts.length === 1 ? "" : "s"}.`}
            </p>
          </div>
          <Link href="/dashboard/workouts/new">Add workout</Link>
        </div>

        <div>
          {databaseError ? (
            <div>Start your database, then refresh this page.</div>
          ) : workouts.length === 0 ? (
            <div>No workouts yet.</div>
          ) : (
            workouts.map((workout) => (
              <article key={workout.id}>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-medium text-neutral-900">{workout.name}</h2>
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
    </main>
  );
}
