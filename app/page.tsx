import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F1A] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#112240,transparent_60%)]" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#00d4ff_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Navbar */}
      <header className="relative z-10 flex justify-between items-center px-8 py-5 border-b border-cyan-500/10 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            CyberSudan
          </h1>
          <p className="text-xs text-gray-500">
            Securing Digital Space
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="/">Home</a>
          <a href="/alerts">Alerts</a>
          <a href="/news">News</a>
          <a href="/resources">Resources</a>
          <a href="/about">About</a>
        </nav>

        <a
          href="/join"
          className="px-5 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
        >
          Join Us
        </a>
      </header>

      {/* Alert Bar */}
      <div className="relative z-10 border-b border-cyan-500/10 bg-cyan-500/5">
        <div className="text-center py-2 text-sm text-cyan-300">
          🔴 Global Monitoring Active • 🛡️ Threat Intelligence Online • 🌍 CyberSudan Security Center
        </div>
      </div>

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
            CyberSudan is a cybersecurity awareness platform focused on cyber threats,
            digital safety, security education and building a stronger cyber community.
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

          <div className="bg-white/5 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-green-400">System Status</h3>
            <p className="text-3xl font-bold mt-3">Secure</p>
          </div>

          <div className="bg-white/5 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-red-400">Threat Level</h3>
            <p className="text-3xl font-bold mt-3">Low</p>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-cyan-400">Alerts Today</h3>
            <p className="text-3xl font-bold mt-3">07</p>
          </div>

          <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
            <h3 className="text-yellow-400">Monitoring</h3>
            <p className="text-3xl font-bold mt-3">Active</p>
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
              <h3 className="text-4xl font-bold text-cyan-400 mt-2">12,847</h3>
            </div>

            <div className="bg-white/5 border border-red-500/20 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Active Alerts</p>
              <h3 className="text-4xl font-bold text-red-400 mt-2">7</h3>
            </div>

            <div className="bg-white/5 border border-green-500/20 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Protected Systems</p>
              <h3 className="text-4xl font-bold text-green-400 mt-2">99.8%</h3>
            </div>

            <div className="bg-white/5 border border-yellow-500/20 rounded-xl p-6">
              <p className="text-gray-400 text-sm">Monitoring Status</p>
              <h3 className="text-4xl font-bold text-yellow-400 mt-2">Online</h3>
            </div>

          </div>
        </div>
      </section>

      {/* Threat Intelligence */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-cyan-500/10 rounded-2xl p-8">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Global Threat Intelligence
            </h2>

            <div className="h-96 rounded-xl bg-gradient-to-br from-cyan-950/30 to-slate-900 border border-cyan-500/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">🌍</div>
                <h3 className="text-xl text-cyan-400 font-semibold">
                  Global Threat Map
                </h3>
                <p className="text-gray-500 mt-2">
                  Threat Intelligence Integration Ready
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CyberSudan Labs */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            CyberSudan Labs
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="p-6 bg-white/5 rounded-xl border border-cyan-500/20">
              🔑 Password Checker
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-cyan-500/20">
              # Hash Generator
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-cyan-500/20">
              🌍 IP Lookup
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-cyan-500/20">
              🔗 URL Scanner
            </div>

          </div>

        </div>
      </section>

      {/* Latest Security News */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Latest Security News
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-cyan-400 font-semibold">
                Microsoft Security Update
              </h3>
              <p className="text-gray-400 mt-2">
                Latest critical security patches released.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-cyan-400 font-semibold">
                New Phishing Campaign
              </h3>
              <p className="text-gray-400 mt-2">
                Researchers identify large-scale phishing attacks.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-cyan-400 font-semibold">
                Critical Vulnerability Alert
              </h3>
              <p className="text-gray-400 mt-2">
                New vulnerability affecting enterprise systems.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Community */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-cyan-400">
            Join CyberSudan Community
          </h2>

          <p className="text-gray-400 mt-4">
            Connect with cybersecurity enthusiasts, researchers and professionals.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a href="/join" className="px-6 py-3 bg-cyan-500 text-black rounded-lg">
              Join Now
            </a>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}
