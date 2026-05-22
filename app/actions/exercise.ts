import {auth} from "@clerk/nextjs/server"
import { getPrisma } from "@/lib/prisma";

export async function Exercise(name:string,repsNumber:number,setsNumber:number,weightNumber:number,workoutId:string){
  const {userId} = await auth()

  if(!userId)  throw new Error("Unauthorized");
  await getPrisma().exercise.create({
    data:{
              name,
              reps: repsNumber,
              sets: setsNumber,
              weight: weightNumber,
              workout:{ connect:{id:workoutId}},
            }
    }
)

}