import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LandingPage(){
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return(
    <div>
      <Link href="/dashboard">Add workout</Link>
      <p>Get started</p>
    </div>
  )
}