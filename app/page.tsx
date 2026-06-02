import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  {/* Hero Section */}
  <section className="max-w-7xl mx-auto px-6 py-24 text-center">

    <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
      CyberSudan Initiative
    </div>

    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
      من أجل <span className="text-cyan-400">سودان رقمي آمن</span>
    </h1>

    <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl">
      منصة مجتمعية تهدف إلى نشر الوعي بالأمن السيبراني وتمكين الشباب
      السوداني بالمعرفة والمهارات اللازمة لحماية المجتمع الرقمي.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
      <a
        href="/join"
        className="bg-cyan-600 hover:bg-cyan-700 transition px-8 py-4 rounded-xl"
      >
        انضم إلى المبادرة
      </a>

      <a
        href="/resources"
        className="border border-cyan-600 hover:bg-cyan-600/10 transition px-8 py-4 rounded-xl"
      >
        ابدأ التعلم
      </a>
    </div>

  </section>

  {/* Statistics */}
  <section className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400">100+</h2>
        <p className="text-slate-400 mt-2">متدرب</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400">20+</h2>
        <p className="text-slate-400 mt-2">فعالية</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
        <p className="text-slate-400 mt-2">مورد تعليمي</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400">30+</h2>
        <p className="text-slate-400 mt-2">متطوع</p>
      </div>

    </div>

  </section>

  {/* Vision & Mission */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">الرؤية</h2>
        <p className="text-slate-400 leading-8">
          بناء مجتمع سوداني واعٍ رقمياً وقادر على مواجهة التهديدات السيبرانية.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">الرسالة</h2>
        <p className="text-slate-400 leading-8">
          نشر ثقافة الأمن السيبراني وتمكين الشباب السوداني عبر التعليم والتدريب.
        </p>
      </div>

    </div>

  </section>

  {/* Why CyberSudan */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <h2 className="text-4xl font-bold text-center mb-12">
      لماذا CyberSudan الآن؟
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="font-bold text-cyan-400 mb-3">التحول الرقمي</h3>
        <p className="text-slate-400">
          الحاجة المتزايدة إلى بيئة رقمية أكثر أمناً.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="font-bold text-cyan-400 mb-3">تمكين الشباب</h3>
        <p className="text-slate-400">
          إعداد جيل قادر على مواجهة التحديات السيبرانية.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="font-bold text-cyan-400 mb-3">بناء المجتمع</h3>
        <p className="text-slate-400">
          ربط الطلاب والباحثين والمتخصصين في منصة واحدة.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="font-bold text-cyan-400 mb-3">المستقبل الرقمي</h3>
        <p className="text-slate-400">
          دعم بناء سودان رقمي أكثر وعياً وأماناً.
        </p>
      </div>

    </div>

  </section>

  {/* Learning Paths */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <h2 className="text-4xl font-bold text-center mb-12">
      المسارات التعليمية
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">Cybersecurity Fundamentals</div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">Networking Basics</div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">Linux Fundamentals</div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">Web Security</div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">Digital Forensics</div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">Threat Intelligence</div>

    </div>

  </section>

  {/* First Conference */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-8">

      <h2 className="text-4xl font-bold text-cyan-400 mb-6">
        🇸🇩 أول مؤتمر لأمن المعلومات في السودان
      </h2>

      <p className="text-slate-300 leading-8 mb-6">
        تعمل CyberSudan — بإذن الله — على تنظيم أول مؤتمر متخصص
        في أمن المعلومات والأمن السيبراني في السودان.
      </p>

      <p className="text-slate-400 leading-8 mb-6">
        سيجمع المؤتمر المختصين والطلاب والباحثين والمهتمين بالتقنية
        لمناقشة التحديات والفرص وبناء مجتمع تقني أكثر قوة.
      </p>

      <div className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
        الحالة: قريباً
      </div>

    </div>

  </section>

  {/* Roadmap */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <h2 className="text-4xl font-bold text-center mb-12">
      خارطة الطريق
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900 rounded-xl p-6">✓ إطلاق المنصة</div>
      <div className="bg-slate-900 rounded-xl p-6">✓ بناء مجتمع المتطوعين</div>
      <div className="bg-slate-900 rounded-xl p-6">⏳ البرامج التدريبية</div>
      <div className="bg-slate-900 rounded-xl p-6">⏳ المؤتمر الوطني</div>
      <div className="bg-slate-900 rounded-xl p-6">⏳ مسابقات CTF</div>
      <div className="bg-slate-900 rounded-xl p-6">⏳ مركز CyberSudan</div>

    </div>

  </section>

  {/* CTA */}
  <section className="max-w-5xl mx-auto px-6 py-24 text-center">

    <h2 className="text-4xl font-bold mb-6">
      كن جزءاً من CyberSudan
    </h2>

    <p className="text-slate-400 mb-8">
      ساهم في بناء مجتمع رقمي أكثر أمناً في السودان.
    </p>

    <a
      href="/join"
      className="bg-cyan-600 hover:bg-cyan-700 transition px-10 py-4 rounded-xl"
    >
      انضم الآن
    </a>

  </section>

  <Footer />

</main>

);
}
