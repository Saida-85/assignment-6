import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur-md">
      <div className="navbar mx-auto max-w-7xl px-4 py-2 lg:px-6">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-50"
            >
              <li>
                <a className="bg-[#1A2312] text-black rounded-lg">Workouts</a>
              </li>

              <li>
                <a>My Plan</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
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

        {/* Desktop Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">
            <li>
              <a className="rounded-xl bg-[#2e3d20] px-5 py-2 font-semibold text-[#C2F800]">
                Workouts
              </a>
            </li>

            <li>
              <a className="rounded-xl px-5 py-2 font-semibold transition hover:bg-base-200 hover:text-[#C2F800]">
                My Plan
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-2 lg:gap-4">
          <a className="flex items-center gap-2 rounded-xl px-3 py-2 font-semibold transition hover:bg-base-200">
            Plan
            <span className="badge border-0 bg-[#C2F800] text-black">0</span>
          </a>

          <a className="flex items-center gap-2 rounded-xl px-3 py-2 font-semibold transition hover:bg-base-200">
            Saved
            <span className="badge badge-outline">0</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
