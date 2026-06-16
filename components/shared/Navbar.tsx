"use client";
import Link from "next/link";
import Image from "next/image";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Logo from "@/public/Black-logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Workout Tracker logo"
              height={32}
              width={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-sm font-semibold tracking-tight">
              Workout Tracker
            </span>
          </Link>
          <Link
            href="/about"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Show when="signed-out">
            <SignInButton>
              <button className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Sign up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <UserButton />
          </Show>
        </div>
      </nav>
    </header>
  );
}
