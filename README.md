# 💪 Workout Tracker
 
A fullstack workout tracking app where users can log training sessions, add exercises with sets, reps and weight, and review their history — all behind a secure authenticated dashboard.
 
🔗 **Live demo:** [workout-tracker.vercel.app](https://workout-tracker.vercel.app)
 
---
 
## Features
 
- Secure authentication with Clerk (sign up, sign in, protected routes)
- Create and delete workout sessions
- Add and remove exercises with sets, reps and weight per session
- Dashboard with total workout and exercise stats
- Full workout history with per-session detail view
- Server-side rendering via Next.js App Router
- Responsive layout, works on mobile and desktop
---
 
## Tech stack
 
| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Auth | Clerk |
| ORM | Prisma 7 |
| Database | PostgreSQL (Supabase) |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Deployment | Vercel |
 
---
 
## Getting started
 
```bash
git clone https://github.com/Majkan1/workout-tracker.git
cd workout-tracker
npm install
```
 
Create a `.env` file in the root:
 
```env
DATABASE_URL="your-supabase-connection-string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
```
 
Run database migrations:
 
```bash
npx prisma migrate dev
```
 
Start the dev server:
 
```bash
npm run dev
```
 
Open [http://localhost:3000](http://localhost:3000)
 
---
 
## Project structure
 
```
├── app/
│   ├── actions/          # Server Actions (createWorkout, deleteWorkout, exercise)
│   ├── auth/             # Sign-in and sign-up pages (Clerk)
│   ├── dashboard/        # Protected dashboard and workout pages
│   │   ├── _components/  # WelcomeHeader, StatsGrid, RecentWorkouts
│   │   └── workouts/     # Workout list, detail [id], new workout form
│   ├── about/            # About page
│   └── types/            # Shared TypeScript types
├── components/
│   ├── shared/           # Navbar, Footer, AppShell
│   └── workout/          # WorkoutForm, ExerciseForm, WorkoutCard, WorkoutList
|   |__ ui/               # shadcn/ui components
├── lib/
│   └── prisma.ts         # Prisma client singleton
└── prisma/
    ├── schema.prisma     # Database schema
    └── migrations/       # Migration history
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
  weight    Float?
  workoutId String   → Workout
```
 
---
 
## Author
 
Built by [Mikołaj Michalak](https://github.com/Majkan1)
