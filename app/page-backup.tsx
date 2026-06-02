import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  {/* Hero */}
  <section className="text-center py-24 px-6">
    <h1 className="text-6xl font-bold mb-6">
      CyberSudan
    </h1>

    <p className="text-2xl text-cyan-400 mb-6">
      من أجل سودان رقمي آمن
    </p>

    <p className="max-w-3xl mx-auto text-slate-300 leading-8">
      مبادرة وطنية تهدف إلى نشر الوعي بالأمن السيبراني وتمكين الشباب
      السوداني بالمعرفة والمهارات اللازمة لحماية المجتمع الرقمي وبناء
      مستقبل تقني أكثر أمناً.
    </p>

    <div className="flex justify-center gap-4 mt-10">
      <a
        href="/join"
        className="bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-lg"
      >
        انضم إلينا
      </a>

      <a
        href="/resources"
        className="border border-cyan-600 hover:bg-cyan-600 transition px-6 py-3 rounded-lg"
      >
        ابدأ التعلم
      </a>
    </div>
  </section>

  {/* Statistics */}
  <section className="max-w-6xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition">
        <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
        <p className="mt-2">متدرب</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition">
        <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
        <p className="mt-2">فعالية</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition">
        <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
        <p className="mt-2">مورد تعليمي</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition">
        <h3 className="text-3xl font-bold text-cyan-400">30+</h3>
        <p className="mt-2">متطوع</p>
      </div>

    </div>
  </section>

  {/* Vision */}
  <section className="max-w-5xl mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold mb-4 text-cyan-400">
      الرؤية
    </h2>

    <p className="text-slate-300 leading-8">
      بناء مجتمع سوداني واعٍ رقمياً وقادر على مواجهة التهديدات
      السيبرانية والمساهمة في مستقبل رقمي أكثر أمناً واستقراراً.
    </p>
  </section>

  {/* Mission */}
  <section className="max-w-5xl mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold mb-4 text-cyan-400">
      الرسالة
    </h2>

    <p className="text-slate-300 leading-8">
      نشر ثقافة الأمن السيبراني وتمكين الشباب السوداني عبر التعليم
      والتدريب والفعاليات التقنية والمبادرات المجتمعية.
    </p>
  </section>

  {/* Areas */}
  <section className="max-w-6xl mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold text-center mb-10">
      مجالات المبادرة
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-bold mb-3">
          التوعية الأمنية
        </h3>

        <p className="text-slate-400">
          التوعية بالتصيد الاحتيالي وحماية الحسابات والخصوصية والأمن الرقمي.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-bold mb-3">
          التدريب والتعليم
        </h3>

        <p className="text-slate-400">
          دورات ومسارات تعليمية في الأمن السيبراني والشبكات والبرمجة.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-bold mb-3">
          الفعاليات والمجتمع
        </h3>

        <p className="text-slate-400">
          تنظيم مسابقات وورش عمل وفعاليات تقنية للشباب السوداني.
        </p>
      </div>

    </div>
  </section>

  {/* Events */}
  <section className="max-w-6xl mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold mb-8">
      الفعاليات القادمة
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold">
          Cyber Awareness Workshop
        </h3>

        <p className="text-slate-400 mt-2">
          ورشة تعريفية للمبتدئين في الأمن السيبراني.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold">
          CyberSudan CTF
        </h3>

        <p className="text-slate-400 mt-2">
          مسابقة عملية لتطوير المهارات التقنية.
        </p>
      </div>

    </div>
  </section>

  {/* Join */}
  <section className="text-center py-20 px-6">
    <h2 className="text-4xl font-bold mb-6">
      كن جزءاً من CyberSudan
    </h2>

    <p className="text-slate-300 mb-8">
      ساهم معنا في بناء مجتمع رقمي أكثر أمناً في السودان.
    </p>

    <a
      href="/join"
      className="bg-cyan-600 hover:bg-cyan-700 transition px-8 py-4 rounded-lg"
    >
      انضم الآن
    </a>
  </section>

  <Footer />

</main>

);
}
