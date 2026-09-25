"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkouts } from "@/context/WorkoutContext";
import { Dumbbell, Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useWorkouts();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="navbar bg-[#161922] border-b border-gray-800 px-4 md:px-8 sticky top-0 z-50">
      {/* Left side: Mobile Hamburger & Brand Logo */}
      <div className="navbar-start gap-2">
        {/* Mobile Hamburger Dropdown */}
        <div className="dropdown md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white p-1"
          >
            <Menu className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#161922] border border-gray-800 rounded-box w-52 text-white"
          >
            <li>
              <Link
                href="/"
                className={isActive("/") ? "text-[#C2F800] font-bold" : ""}
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={
                  isActive("/my-plan") ? "text-[#C2F800] font-bold" : ""
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-wider text-white"
        >
          <Dumbbell className="w-6 h-6 text-[#C2F800]" />
          <span>
            FIT<span className="text-[#C2F800]">LOG</span>
          </span>
        </Link>
      </div>

      {/* Center: Desktop Navigation Links */}
      <div className="navbar-center hidden md:flex gap-6">
        <Link
          href="/"
          className={`font-medium transition-colors ${
            isActive("/")
              ? "text-[#C2F800] border-b-2 border-[#C2F800] pb-1"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Workout
        </Link>
        <Link
          href="/my-plan"
          className={`font-medium transition-colors ${
            isActive("/my-plan")
              ? "text-[#C2F800] border-b-2 border-[#C2F800] pb-1"
              : "text-gray-300 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </div>

      {/* Right side: Status Badges */}
      <div className="navbar-end gap-3">
        <Link
          href="/my-plan"
          className="flex items-center gap-2 text-xs md:text-sm font-semibold"
        >
          {/* Plan Badge */}
          <span className="bg-[#C2F800] text-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            Plan <span className="font-bold">{plan.length}</span>
          </span>
          {/* Saved Badge */}
          <span className="border border-gray-600 text-gray-300 px-2.5 py-1 rounded-full hidden sm:flex items-center gap-1">
            Saved <span className="font-bold text-white">{saved.length}</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
