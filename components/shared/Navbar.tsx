import Image from 'next/image';
import Logo from '@/public/Black-logo.png'
export default function Navbar(){
  return(
    <nav>
      <Image
      src={Logo}
      alt="Logo of workout tracker"
      height={100}
      width={100}
      />
      </nav>    
  )
}