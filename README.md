# 💪 Workout Tracker

A fullstack workout tracking app built with Next.js 16, Prisma, and Supabase. Log your training sessions and track progress over time.

## 🔗 Live Demo

[workout-tracker.vercel.app](#) ← dodaj po deploymencie

## ✨ Features

- Add and manage workout sessions
- Track exercises with sets and reps
- Persistent data storage with PostgreSQL
- Server-side rendering with Next.js App Router

## 🛠️ Tech Stack

- **Next.js 16** — App Router, Server Components, Server Actions
- **TypeScript** — fully typed codebase
- **Prisma 7** — ORM with PostgreSQL adapter
- **Supabase** — hosted PostgreSQL database
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible component library

## 🚀 Getting Started

```bash
git clone https://github.com/Majkan1/workout-tracker.git
cd workout-tracker
npm install
```

Create a `.env` file in the root directory:
```env
DATABASE_URL="your-supabase-pooler-url"
DIRECT_URL="your-supabase-direct-url"
```

Run database migrations:
```bash
npx prisma migrate dev
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── actions/          # Server Actions
├── components/       # React components
├── lib/              # Prisma client singleton
├── types/            # Shared TypeScript types
└── prisma/           # Database schema and migrations
```
