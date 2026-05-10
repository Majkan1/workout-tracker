"use client"

import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'

type AppShellProps = {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const isAuthRoute = pathname?.startsWith('/auth/')

  return (
    <ClerkProvider signInUrl="/auth/sign-in" signUpUrl="/auth/sign-up">
      {!isAuthRoute ? (
        <>
          <header className="flex h-16 items-center justify-end gap-4 p-4">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="cursor-pointer rounded-full bg-purple-700 px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          <Navbar />
        </>
      ) : null}

      {children}

      {!isAuthRoute ? <Footer /> : null}
    </ClerkProvider>
  )
}