import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function LandingPage(){
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return(
    <div>
      <div className="relative h-185 w-full">
        <Image
          src="/gym-picture.avif"
          alt="gym image"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <h1 className="absolute text-9xl top-1/2 left-1/4 font-bold text-white">
          Never give up
        </h1>
      </div>
    </div>
  )
}