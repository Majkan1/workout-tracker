import Image from 'next/image'
import Logo from '@/public/Black-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Logo of workout tracker" height={50} width={50} />
      <p>Workout tracker</p>
      <p id="About-us">About us</p>
      <p id="EXERCISE">Exercises</p>
      <p id="HISTORY">History</p>
    </nav>
  )
}