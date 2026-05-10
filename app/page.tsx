import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LandingPage(){
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return(
    <div>
      <p>Get started</p>
    </div>
  )
}
