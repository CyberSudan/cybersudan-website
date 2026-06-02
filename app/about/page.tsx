import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          من نحن
        </h1>

        <p className="text-slate-300 leading-8 mb-8">
          CyberSudan مبادرة مجتمعية مستقلة تهدف إلى نشر الوعي
          بالأمن السيبراني وتمكين الشباب السوداني بالمعرفة
          والمهارات اللازمة لحماية المجتمع الرقمي.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              الرؤية
            </h2>

            <p className="text-slate-400">
              بناء مجتمع سوداني واعٍ رقمياً وقادر على مواجهة
              التهديدات السيبرانية.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              الرسالة
            </h2>

            <p className="text-slate-400">
              نشر ثقافة الأمن السيبراني وتمكين الشباب عبر
              التعليم والتدريب والمبادرات المجتمعية.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              الأهداف
            </h2>

            <p className="text-slate-400">
              تعزيز الوعي الرقمي وبناء مجتمع تقني أكثر أمناً
              وتعاوناً في السودان.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
