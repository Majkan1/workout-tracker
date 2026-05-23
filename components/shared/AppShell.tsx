"use client"
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { usePathname } from 'next/navigation'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathme = usePathname()
  
  const isDashboard = pathme.startsWith("/dashboard");
  const isAuth = pathme.startsWith("/auth");

  const showFooter = ! isDashboard && !isAuth 

  return (
    <ClerkProvider signInUrl="/auth/sign-in" signUpUrl="/auth/sign-up">
      <Navbar />
      <main className='flex grow'>
        {children}
      </main>
      {showFooter && <Footer />}
    </ClerkProvider>
  )
}