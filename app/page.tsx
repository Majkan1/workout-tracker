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
      </div>
      <h1 className="flex items-center justify-center m-4 text-6xl font-bold">
        Track your progress
      </h1>
    </div>
  )
}