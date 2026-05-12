'use client'

import Image from 'next/image'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Logo from '@/public/Black-logo.png'

export default function Navbar() {
  return (
    <nav className='flex h-16 items-center justify-between gap-4 px-4'>
      <div className='flex items-center gap-6'>
        <Image src={Logo} alt="Logo of workout tracker" height={50} width={50} />
        <p id="Workout-tracker">Workout tracker</p>
        <p id="About-us">About us</p>
      </div>
      <div className='flex items-center gap-4'>
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
      </div>
    </nav>
  )
}