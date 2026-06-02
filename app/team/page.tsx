import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Team() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  <section className="max-w-6xl mx-auto px-6 py-20">

    <h1 className="text-4xl font-bold text-cyan-400 mb-4">
      فريق CyberSudan
    </h1>

    <p className="text-slate-300 mb-12">
      يضم فريق CyberSudan مجموعة من المتطوعين والمهتمين بالأمن
      السيبراني والتقنية، يعملون معاً لنشر الوعي الرقمي وتمكين
      الشباب السوداني.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition">
        <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4"></div>

        <h2 className="text-xl font-bold">
          مؤسس المبادرة
        </h2>

        <p className="text-cyan-400 mt-2">
          Muwaffaq Osman Suliman
        </p>

        <p className="text-slate-400 mt-4">
          الأمن السيبراني • الذكاء الاصطناعي • بناء المجتمع التقني
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition">
        <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4"></div>

        <h2 className="text-xl font-bold">
          متطوع
        </h2>

        <p className="text-slate-400 mt-4">
          سيتم إضافة أعضاء الفريق لاحقاً.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition">
        <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4"></div>

        <h2 className="text-xl font-bold">
          متطوع
        </h2>

        <p className="text-slate-400 mt-4">
          سيتم إضافة أعضاء الفريق لاحقاً.
        </p>
      </div>

    </div>

  </section>

  <Footer />

</main>

);
}
