import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  <section className="max-w-5xl mx-auto px-6 py-20">

    <h1 className="text-4xl font-bold text-cyan-400 mb-4">
      تواصل معنا
    </h1>

    <p className="text-slate-300 mb-12">
      يمكنك التواصل مع فريق CyberSudan عبر المنصات التالية والمشاركة
      في نشر الوعي بالأمن السيبراني داخل السودان.
    </p>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <h2 className="text-2xl font-bold mb-3">
          Telegram
        </h2>

        <p className="text-slate-400 mb-4">
          تابع الأخبار والفعاليات والنقاشات التقنية.
        </p>

        <a
          href="https://t.me/CyberSudan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          t.me/CyberSudan
        </a>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <h2 className="text-2xl font-bold mb-3">
          Facebook
        </h2>

        <p className="text-slate-400 mb-4">
          تابع المنشورات والمبادرات المجتمعية الخاصة بـ CyberSudan.
        </p>

        <a
          href="https://www.facebook.com/share/1ApEWf5sMF/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          صفحة CyberSudan على Facebook
        </a>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <h2 className="text-2xl font-bold mb-3">
          GitHub
        </h2>

        <p className="text-slate-400 mb-4">
          سيتم نشر المشاريع والأدوات والمصادر المفتوحة هنا.
        </p>

        <p className="text-slate-500">
          Coming Soon
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <h2 className="text-2xl font-bold mb-3">
          انضم إلى المبادرة
        </h2>

        <p className="text-slate-400 mb-4">
          نرحب بالطلاب والباحثين والمهتمين بالأمن السيبراني والتقنية.
        </p>

        <a
          href="/join"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 transition px-5 py-2 rounded-lg"
        >
          انضم الآن
        </a>
      </div>

    </div>

  </section>

  <Footer />

</main>

);
}
