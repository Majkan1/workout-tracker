"use client"

import { ClerkProvider } from '@clerk/nextjs'
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
          <Navbar />
        </>
      ) : null}

      {children}

      {!isAuthRoute ? <Footer /> : null}
    </ClerkProvider>
  )
}