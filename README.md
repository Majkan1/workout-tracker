# 💪 Workout Tracker

A fullstack workout tracking app where users can log training sessions, add and edit exercises with sets, reps and weight, and review their history — all behind a secure authenticated dashboard.

🔗 **Live demo:** [workout-tracker-majkan.vercel.app](https://workout-tracker-majkan.vercel.app)

![CI](https://github.com/Majkan1/workout-tracker/actions/workflows/ci.yml/badge.svg)

---

## Features

- Secure authentication with Clerk (sign up, sign in, protected routes)
- Create, **edit** and delete workout sessions
- Add, **edit** and remove exercises (sets, reps, weight) per session
- Per-user data ownership checks on every server action (no access to other users' data)
- Server-side input validation with Zod
- Dashboard with total workout and exercise stats
- Full workout history with per-session detail view
- Loading, error and not-found states for a polished UX
- Server Components + Server Actions (Next.js App Router)
- Unit/component tests (Vitest) and CI on every push (GitHub Actions)
- Responsive layout, works on mobile and desktop

---

## Tech stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Framework  | Next.js 16 (App Router)        |
| Language   | TypeScript                     |
| Auth       | Clerk                          |
| ORM        | Prisma 7                       |
| Database   | PostgreSQL (Supabase)          |
| Validation | Zod                            |
| Styling    | Tailwind CSS                   |
| Components | shadcn/ui                      |
| Testing    | Vitest + React Testing Library |
| CI/CD      | GitHub Actions                 |
| Deployment | Vercel                         |

---

## Getting started

```bash
git clone https://github.com/Majkan1/workout-tracker.git
cd workout-tracker
npm install
```

Create a `.env` file in the root:

```env
DATABASE_URL="your-supabase-pooled-connection-string"
DIRECT_URL="your-supabase-direct-connection-string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
```

Generate the Prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Useful scripts

```bash
npm run dev        # start the dev server
npm run build      # prisma generate + production build
npm run lint       # run ESLint
npm run test:run   # run the test suite with coverage
```

---

## Project structure

```
├── app/
│   ├── actions/          # Server Actions (create/update/delete workouts & exercises) + Zod schemas
│   ├── auth/             # Sign-in and sign-up pages (Clerk)
│   ├── dashboard/        # Protected dashboard and workout pages
│   │   ├── _components/  # WelcomeHeader, StatsGrid, RecentWorkouts
│   │   ├── workouts/     # Workout list, detail [id], new + [id]/edit forms
│   │   ├── error.tsx     # Dashboard error boundary
│   │   └── loading.tsx   # Dashboard loading state
│   ├── about/            # About page
│   ├── not-found.tsx     # Global 404 page
│   └── types/            # Shared TypeScript types
├── components/
│   ├── shared/           # Navbar, Footer, AppShell
│   └── workout/          # Forms, cards, list, detail (+ tests)
├── lib/
│   └── prisma.ts         # Prisma client singleton
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Migration history
└── .github/workflows/    # CI pipeline (lint, test, build)
```

---

## Database schema

```
Workout
  id        String   (cuid)
  name      String
  createdAt DateTime
  userId    String   (Clerk user id)
  exercises Exercise[]

Exercise
  id        String   (cuid)
  name      String
  sets      Int
  reps      Int
  weight    Int
  workoutId String   → Workout (cascade on delete)
```

---

## Author

Built by [Mikołaj Michalak](https://github.com/Majkan1)
