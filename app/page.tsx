export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F1A] text-white">

      {/* Cyber Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#112240,transparent_60%)]" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#00d4ff_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-cyan-500/10 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
            CyberSudan
          </h1>
          <p className="text-xs text-gray-500">
            Securing Sudan's Digital Future
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="/" className="hover:text-cyan-400 transition">Home</a>
          <a href="/alerts" className="hover:text-cyan-400 transition">Alerts</a>
          <a href="/news" className="hover:text-cyan-400 transition">News</a>
          <a href="/resources" className="hover:text-cyan-400 transition">Resources</a>
          <a href="/team" className="hover:text-cyan-400 transition">Team</a>
          <a href="/about" className="hover:text-cyan-400 transition">About</a>
        </nav>

        <a
          href="/join"
          className="px-5 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
        >
          Join Us
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-8 py-24">

        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 mb-10">
          <span>🟢 System Secure</span>
          <span>⚡ Threat Level: Low</span>
          <span>🔍 Monitoring Active</span>
          <span>🌐 Global Visibility</span>
        </div>

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Building a Safer
            <br />
            <span className="text-cyan-400">
              Digital Sudan
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
            CyberSudan is a cybersecurity awareness platform focused on
            cyber threats, digital safety, security education, incident
            awareness, and building a stronger cybersecurity community.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/alerts"
              className="px-7 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Explore Dashboard
            </a>

            <a
              href="/resources"
              className="px-7 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500/10 transition"
            >
              Learning Hub
            </a>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="relative z-10 px-8 pb-16">
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="bg-white/5 backdrop-blur-md border border-green-500/20 rounded-xl p-6">
            <h3 className="text-green-400 font-semibold">
              System Status
            </h3>
            <p className="text-3xl font-bold mt-3">
              Secure
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-red-500/20 rounded-xl p-6">
            <h3 className="text-red-400 font-semibold">
              Threat Level
            </h3>
            <p className="text-3xl font-bold mt-3">
              Low
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-cyan-400 font-semibold">
              Alerts Today
            </h3>
            <p className="text-3xl font-bold mt-3">
              07
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-xl p-6">
            <h3 className="text-yellow-400 font-semibold">
              Monitoring
            </h3>
            <p className="text-3xl font-bold mt-3">
              Active
            </p>
          </div>

        </div>
      </section>

      {/* Live Dashboard */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Live Security Dashboard
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Threats Blocked</p>
              <h3 className="text-4xl font-bold text-cyan-400 mt-2">
                12,847
              </h3>
            </div>

            <div className="bg-white/5 border border-red-500/20 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Active Alerts</p>
              <h3 className="text-4xl font-bold text-red-400 mt-2">
                7
              </h3>
            </div>

            <div className="bg-white/5 border border-green-500/20 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Protected Systems</p>
              <h3 className="text-4xl font-bold text-green-400 mt-2">
                99.8%
              </h3>
            </div>

            <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Monitoring Status</p>
              <h3 className="text-4xl font-bold text-yellow-400 mt-2">
                Online
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* Threat Map Section */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-cyan-400">
                Global Threat Intelligence
              </h2>

              <span className="text-xs text-green-400">
                ● Live Monitoring
              </span>
            </div>

            <div className="h-96 rounded-xl border border-cyan-500/10 bg-gradient-to-br from-cyan-950/20 to-slate-900 flex items-center justify-center">

              <div className="text-center">
                <p className="text-7xl mb-4">🌍</p>

                <h3 className="text-xl font-semibold text-cyan-400">
                  Global Threat Map
                </h3>

                <p className="text-gray-500 mt-2">
                  Ready for future integration with threat intelligence APIs
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-8 pb-24">

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Platform Services
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 hover:border-red-500 transition">
              <h3 className="text-red-400 font-semibold mb-3">
                Threat Alerts
              </h3>
              <p className="text-gray-400 text-sm">
                Real-time alerts and vulnerability awareness.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20 hover:border-blue-500 transition">
              <h3 className="text-blue-400 font-semibold mb-3">
                Cyber News
              </h3>
              <p className="text-gray-400 text-sm">
                Latest cybersecurity news and incidents.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20 hover:border-green-500 transition">
              <h3 className="text-green-400 font-semibold mb-3">
                Learning Hub
              </h3>
              <p className="text-gray-400 text-sm">
                Courses, tutorials and cybersecurity resources.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-purple-500/5 border border-purple-500/20 hover:border-purple-500 transition">
              <h3 className="text-purple-400 font-semibold mb-3">
                Cyber Tools
              </h3>
              <p className="text-gray-400 text-sm">
                Security tools and analyst resources.
              </p>
            </div>

          </div>
        </div>

      </section>

    </main>
  );
}
