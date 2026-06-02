import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function News() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  <section className="max-w-6xl mx-auto px-6 py-20">

    <h1 className="text-4xl font-bold text-cyan-400 mb-4">
      الأخبار والإعلانات
    </h1>

    <p className="text-slate-300 mb-12">
      تابع آخر أخبار CyberSudan والفعاليات والدورات التدريبية
      والتحديثات المتعلقة بالأمن السيبراني.
    </p>

    <div className="grid gap-6">

      <article className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <span className="text-cyan-400 text-sm">
          2026
        </span>

        <h2 className="text-2xl font-bold mt-2 mb-3">
          إطلاق منصة CyberSudan
        </h2>

        <p className="text-slate-400">
          تم إطلاق النسخة الأولى من منصة CyberSudan بهدف تعزيز
          الوعي بالأمن السيبراني وتمكين الشباب السوداني بالمعرفة
          والمهارات التقنية.
        </p>
      </article>

      <article className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <span className="text-cyan-400 text-sm">
          فعالية قادمة
        </span>

        <h2 className="text-2xl font-bold mt-2 mb-3">
          CyberSudan Awareness Workshop
        </h2>

        <p className="text-slate-400">
          ورشة تعريفية مجانية للمبتدئين حول أساسيات الأمن
          السيبراني وحماية الحسابات الشخصية.
        </p>
      </article>

      <article className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <span className="text-cyan-400 text-sm">
          إعلان
        </span>

        <h2 className="text-2xl font-bold mt-2 mb-3">
          فتح باب التطوع
        </h2>

        <p className="text-slate-400">
          ترحب CyberSudan بالمتطوعين من مختلف التخصصات التقنية
          للمساهمة في نشر الوعي الرقمي داخل السودان.
        </p>
      </article>

    </div>

  </section>

  <Footer />

</main>

);
}


