import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Resources() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  <section className="max-w-7xl mx-auto px-6 py-20">

    <h1 className="text-5xl font-bold text-cyan-400 mb-4">
      الموارد التعليمية
    </h1>

    <p className="text-slate-400 max-w-3xl mb-16">
      مجموعة من المسارات التعليمية والموارد المختارة لمساعدتك
      على تطوير مهاراتك في الأمن السيبراني وتقنية المعلومات.
    </p>

    {/* Beginner */}
    <div className="mb-20">

      <div className="flex items-center gap-3 mb-8">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <h2 className="text-3xl font-bold">
          مستوى المبتدئين
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Cybersecurity Fundamentals
          </h3>
          <p className="text-slate-400">
            مقدمة شاملة لفهم الأمن السيبراني والتهديدات الرقمية.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Linux Fundamentals
          </h3>
          <p className="text-slate-400">
            تعلم أساسيات نظام لينكس وإدارة الملفات والأوامر.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Networking Basics
          </h3>
          <p className="text-slate-400">
            فهم الشبكات والبروتوكولات وعمل الإنترنت.
          </p>
        </div>

      </div>

    </div>

    {/* Intermediate */}
    <div className="mb-20">

      <div className="flex items-center gap-3 mb-8">
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <h2 className="text-3xl font-bold">
          المستوى المتوسط
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Web Security
          </h3>
          <p className="text-slate-400">
            أساسيات تأمين تطبيقات الويب والثغرات الشائعة.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            OWASP Top 10
          </h3>
          <p className="text-slate-400">
            دراسة أشهر الثغرات الأمنية في تطبيقات الويب.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Digital Forensics
          </h3>
          <p className="text-slate-400">
            مقدمة في التحقيقات الرقمية وتحليل الأدلة.
          </p>
        </div>

      </div>

    </div>

    {/* Advanced */}
    <div className="mb-20">

      <div className="flex items-center gap-3 mb-8">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <h2 className="text-3xl font-bold">
          المستوى المتقدم
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Threat Intelligence
          </h3>
          <p className="text-slate-400">
            تحليل التهديدات السيبرانية ومتابعة المهاجمين.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Malware Analysis
          </h3>
          <p className="text-slate-400">
            دراسة وتحليل البرمجيات الخبيثة.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            Cloud Security
          </h3>
          <p className="text-slate-400">
            تأمين البنية السحابية والخدمات الحديثة.
          </p>
        </div>

      </div>

    </div>

    {/* Career Paths */}
    <div>

      <h2 className="text-4xl font-bold text-center mb-12">
        المسارات المهنية
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">
            Cybersecurity Analyst
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li>• Networking Basics</li>
            <li>• Linux Fundamentals</li>
            <li>• SOC Fundamentals</li>
            <li>• Threat Intelligence</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">
            Penetration Tester
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li>• Linux Fundamentals</li>
            <li>• Networking Basics</li>
            <li>• Web Security</li>
            <li>• OWASP Top 10</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">
            Digital Forensics
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li>• Linux Fundamentals</li>
            <li>• Incident Response</li>
            <li>• Digital Forensics</li>
            <li>• Malware Analysis</li>
          </ul>
        </div>

      </div>

    </div>

  </section>

  <Footer />

</main>

);
}
