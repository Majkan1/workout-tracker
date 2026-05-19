"use client"
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider signInUrl="/auth/sign-in" signUpUrl="/auth/sign-up">
      <Navbar />
      {children}
      <Footer />
    </ClerkProvider>
  )
}