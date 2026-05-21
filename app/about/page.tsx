import { Clock, Dumbbell, Target } from "lucide-react";

export default function About(){
    return(
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              About Workout Tracker
            </h1>
            <p className="mt-4 text-xl text-slate-500">
              Your personal companion for building a stronger, healthier version of yourself.
            </p>
          </div>

          <div className="mx-auto text-slate-600 mb-16 text-lg leading-relaxed space-y-4">
            <p>
              Workout Tracker was born out of a simple need: replacing cluttered notebooks, 
              scattered phone notes, and complicated spreadsheets with one clean, focused 
              application. Whether you are a beginner picking up weights for the first time 
              or an advanced lifter tracking specific volume, this tool is built to keep 
              you accountable.
            </p>
            <p>
              We believe that consistency is the key to progress. By giving you a distraction-free 
              environment to log your exercises, sets, reps, and weights, we hope to remove 
              friction from your training routine. Focus on the lift—we will handle the tracking.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-full mb-4">
                <Dumbbell size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Track Any Lift</h3>
              <p className="text-slate-500">
                Log your specific exercises, weights, sets, and reps with a simple and fast interface.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Set Goals</h3>
              <p className="text-slate-500">
                Watch your volume grow over time and try to beat your past records during every session.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Review History</h3>
              <p className="text-slate-500">
                Easily look back at your previous workouts to see exactly what you did last time.
              </p>
            </div>
          </div>
        </div>
    )
} 