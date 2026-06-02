export default function Navbar() {
return (
<nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo Area */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center font-bold">
        CS
      </div>

      <div>
        <h1 className="font-bold text-cyan-400 text-xl">
          CyberSudan
        </h1>

        <p className="text-xs text-slate-400">
          من أجل سودان رقمي آمن
        </p>
      </div>
    </div>

    {/* Navigation */}
    <div className="hidden md:flex items-center gap-6 text-sm">

      <a href="/" className="hover:text-cyan-400 transition">
        الرئيسية
      </a>

      <a href="/about" className="hover:text-cyan-400 transition">
        من نحن
      </a>

      <a href="/resources" className="hover:text-cyan-400 transition">
        الموارد
      </a>

      <a href="/events" className="hover:text-cyan-400 transition">
        الفعاليات
      </a>

      <a href="/alerts" className="hover:text-cyan-400 transition">
        التحذيرات
      </a>

      <a href="/news" className="hover:text-cyan-400 transition">
        الأخبار
      </a>

      <a href="/team" className="hover:text-cyan-400 transition">
        الفريق
      </a>

      <a href="/contact" className="hover:text-cyan-400 transition">
        تواصل معنا
      </a>

    </div>

    {/* Join Button */}
    <a
      href="/join"
      className="bg-cyan-600 hover:bg-cyan-700 transition px-4 py-2 rounded-lg text-sm font-medium"
    >
      انضم إلينا
    </a>

  </div>
</nav>

);
}
