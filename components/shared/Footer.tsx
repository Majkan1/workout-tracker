import {Button} from "@/components/ui/button";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getFullYear();

  return ( 
    <footer className="mt-5 flex justify-center border-t border-pink-100 bg-pink-50 py-6">
      <div className="flex w-fit flex-col items-center gap-1 text-center">
        <Button className="px-6 py-6 text-lg w-34">
          <Link href="/auth/sign-up">Get started</Link>
        </Button>
        <p className="text-[17px]">© {year} workout tracker</p>
        <p className="text-[17px]">This site was created by Mikołaj Michalak</p>
      </div>
    </footer>
  );
}