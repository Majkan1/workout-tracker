"use client"
import { ClerkProvider } from "@clerk/nextjs"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { usePathname } from "next/navigation"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathme = usePathname()

  const isDashboard = pathme.startsWith("/dashboard")
  const isAuth = pathme.startsWith("/auth")
  const isAbout = pathme.startsWith("/about")

  const showFooter = !isDashboard && !isAuth && !isAbout

  return (
    <ClerkProvider signInUrl="/auth/sign-in" signUpUrl="/auth/sign-up">
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        {showFooter && <Footer />}
      </div>
    </ClerkProvider>
  )
}
