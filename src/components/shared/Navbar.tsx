"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useWorkouts } from "@/context/WorkoutContext";

const Navbar = () => {
  const { plan, saved } = useWorkouts();

  return (
    <div className="sticky top-0 z-50 border-b border-[#252932] bg-[#0F1115]/90 backdrop-blur-md">
      <div className="navbar mx-auto max-w-7xl px-4 py-2 lg:px-6">
        <div className="navbar-start">
          <Link href="/" className="ml-2 flex items-center gap-2">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={34}
              height={34}
              priority
            />
            <span className="text-2xl font-extrabold tracking-wide">
              FITLOG
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">
            <li>
              <Link
                href="/"
                className="rounded-xl px-5 py-2 font-semibold hover:text-[#C2F800]"
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className="rounded-xl px-5 py-2 font-semibold hover:text-[#C2F800]"
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2 lg:gap-4">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-xl px-3 py-2 font-semibold transition hover:bg-[#15171C]"
          >
            Plan
            <span className="badge border-0 bg-[#C2F800] text-black font-bold">
              {plan.length}
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-xl px-3 py-2 font-semibold transition hover:bg-[#15171C]"
          >
            Saved
            <span className="badge badge-outline">{saved.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
