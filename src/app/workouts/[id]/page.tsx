import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, ArrowLeft } from "lucide-react";

// Fetch single workout data based on ID
async function getWorkoutDetail(id: string) {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  if (!res.ok) throw new Error("Failed to fetch workout details");
  return res.json();
}

export default async function WorkoutDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const workout = await getWorkoutDetail(params.id);

  return (
    <main className="min-h-screen bg-[#0F1115] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6"
        >
          <ArrowLeft size={16} /> Back to Library
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side: Large Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-[#252932]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side: Details & Specs */}
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider">
              {workout.name}
            </h1>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {workout.description}
            </p>

            {/* Muscle Group Tags */}
            <div className="flex gap-2 mt-4">
              {workout.muscleGroups?.map((muscle: string) => (
                <span
                  key={muscle}
                  className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs Table */}
            <div className="mt-6 bg-[#15171C] rounded-xl border border-[#252932] divide-y divide-[#252932]">
              <div className="flex justify-between p-3 text-sm">
                <span className="text-gray-400">EQUIPMENT</span>
                <span className="font-medium">{workout.equipment}</span>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <span className="text-gray-400">DIFFICULTY</span>
                <span className="font-medium">{workout.difficulty}</span>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <span className="text-gray-400">SETS</span>
                <span className="font-medium">{workout.sets}</span>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <span className="text-gray-400">REPS</span>
                <span className="font-medium">{workout.reps}</span>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <span className="text-gray-400">DURATION</span>
                <span className="font-medium">{workout.duration} min</span>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <span className="text-gray-400">CALORIES</span>
                <span className="font-medium">
                  {workout.caloriesBurned} kcal
                </span>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <span className="text-gray-400">RATING</span>
                <span className="font-medium">{workout.rating}</span>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="mt-6">
              <h3 className="font-bold uppercase tracking-wide text-sm text-gray-300 mb-3">
                Instructions
              </h3>
              <ol className="space-y-2 text-sm text-gray-400 list-decimal list-inside">
                {workout.instructions?.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="btn bg-[#C2F800] text-black hover:bg-[#b0df00] border-0 font-bold flex-1">
                Add to today&apos;s plan
              </button>
              <button className="btn btn-outline border-gray-700 text-white hover:bg-gray-800 flex-1">
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
