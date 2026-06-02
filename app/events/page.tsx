import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Events() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  <section className="max-w-6xl mx-auto px-6 py-20">

    <h1 className="text-4xl font-bold text-cyan-400 mb-6">
      الفعاليات
    </h1>

    <p className="text-slate-300 mb-12">
      تابع الفعاليات والورش التدريبية والمؤتمرات التي تنظمها
      CyberSudan لدعم مجتمع الأمن السيبراني في السودان.
    </p>

    <div className="grid gap-6">

      <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-8">
        <span className="text-cyan-400 text-sm">
          قريباً
        </span>

        <h2 className="text-3xl font-bold mt-3 mb-4">
          🇸🇩 أول مؤتمر لأمن المعلومات في السودان
        </h2>

        <p className="text-slate-400 leading-8 mb-6">
          تعمل CyberSudan بإذن الله على تنظيم أول مؤتمر متخصص
          في أمن المعلومات والأمن السيبراني في السودان.
        </p>

        <p className="text-slate-400 leading-8">
          سيجمع المؤتمر المختصين والطلاب والباحثين والمهتمين
          بالتقنية لمناقشة التحديات والفرص وبناء مجتمع تقني
          أكثر قوة وتعاوناً.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          Cyber Awareness Workshop
        </h3>

        <p className="text-slate-400">
          ورشة تعريفية للمبتدئين حول أساسيات الأمن السيبراني
          وحماية الحسابات والخصوصية الرقمية.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          CyberSudan CTF
        </h3>

        <p className="text-slate-400">
          مسابقة عملية تهدف إلى تطوير المهارات التقنية
          واكتساب الخبرة في الأمن السيبراني.
        </p>
      </div>

    </div>

  </section>

  <Footer />

</main>

);
}
