import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-cyan-500/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div>
          <h1 className="cyber-title cyber-glow text-cyan-400 text-2xl font-bold">
            CyberSudan
          </h1>
          <p className="text-xs text-gray-500">
            Securing Digital Space
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/alerts">Alerts</Link>
          <Link href="/news">News</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">About</Link>
        </nav>

        <Link
          href="/join"
          className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold"
        >
          Join Us
        </Link>

      </div>
    </header>
  );
}
