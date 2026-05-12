import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import AppShell from '@/components/shared/AppShell'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Workout Tracker',
  description: 'App where you can easily track your workout',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Black-logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
