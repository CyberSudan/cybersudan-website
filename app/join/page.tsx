import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Join() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  <section className="max-w-4xl mx-auto px-6 py-20">

    <h1 className="text-4xl font-bold text-cyan-400 mb-4">
      انضم إلى CyberSudan
    </h1>

    <p className="text-slate-300 mb-10">
      نرحب بالطلاب والباحثين والمطورين والمهتمين بالأمن السيبراني
      للمساهمة في بناء مجتمع رقمي أكثر أمناً في السودان.
    </p>

    <form className="space-y-6">

      <div>
        <label className="block mb-2 text-slate-300">
          الاسم الكامل
        </label>

        <input
          type="text"
          placeholder="أدخل اسمك الكامل"
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="block mb-2 text-slate-300">
          البريد الإلكتروني
        </label>

        <input
          type="email"
          placeholder="example@email.com"
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="block mb-2 text-slate-300">
          التخصص أو المجال
        </label>

        <select
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
        >
          <option>الأمن السيبراني</option>
          <option>الشبكات</option>
          <option>البرمجة</option>
          <option>الذكاء الاصطناعي</option>
          <option>تحليل البيانات</option>
          <option>التصميم</option>
          <option>أخرى</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-slate-300">
          لماذا ترغب في الانضمام؟
        </label>

        <textarea
          rows={5}
          placeholder="اكتب نبذة مختصرة عن اهتمامك بالمبادرة"
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-cyan-500"
        />
      </div>

      <button
        type="submit"
        className="bg-cyan-600 hover:bg-cyan-700 transition px-8 py-3 rounded-lg font-medium"
      >
        إرسال الطلب
      </button>

    </form>

  </section>

  <Footer />

</main>

);
}
