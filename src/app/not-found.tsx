import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">
        <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl">
          🚀
        </span>

        <h1 className="mt-8 bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-8xl font-black text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-bold text-white">Lost in Space</h2>

        <p className="mx-auto mt-5 max-w-lg text-lg text-slate-300">
          The page you&apos;re trying to reach doesn&apos;t exist or may have
          been moved. Let&apos;s get you back on the right path.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            🏠 Go Home
          </Link>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          Error Code: <span className="font-semibold text-red-400">404</span>
        </div>
      </div>
    </main>
  );
}
