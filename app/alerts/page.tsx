import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Alerts() {
return (
<main className="min-h-screen bg-slate-950 text-white">

  <Navbar />

  <section className="max-w-6xl mx-auto px-6 py-20">

    <h1 className="text-4xl font-bold text-cyan-400 mb-4">
      التحذيرات الأمنية
    </h1>

    <p className="text-slate-300 mb-12">
      تهدف هذه الصفحة إلى نشر التحذيرات الأمنية والتوعية بالمخاطر الرقمية
      الشائعة لمساعدة المستخدمين على حماية بياناتهم وحساباتهم.
    </p>

    {/* High Risk */}
    <h2 className="text-2xl font-bold text-red-400 mb-6">
      مخاطر عالية
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mb-12">

      <div className="bg-slate-900 border border-red-500 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          التصيد الاحتيالي (Phishing)
        </h3>

        <p className="text-slate-300">
          احذر من الرسائل أو المواقع التي تطلب كلمات المرور أو رموز التحقق
          وتدّعي أنها من جهات موثوقة.
        </p>
      </div>

      <div className="bg-slate-900 border border-red-500 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          مشاركة رمز التحقق (OTP)
        </h3>

        <p className="text-slate-300">
          لا تشارك رمز التحقق مع أي شخص مهما كانت صفته أو الجهة التي يدّعي
          تمثيلها.
        </p>
      </div>

    </div>

    {/* Medium Risk */}
    <h2 className="text-2xl font-bold text-yellow-400 mb-6">
      مخاطر متوسطة
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mb-12">

      <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          التطبيقات غير الموثوقة
        </h3>

        <p className="text-slate-300">
          قم بتنزيل التطبيقات من المصادر الرسمية فقط وتجنب الملفات مجهولة
          المصدر.
        </p>
      </div>

      <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          كلمات المرور الضعيفة
        </h3>

        <p className="text-slate-300">
          استخدم كلمات مرور طويلة وفريدة لكل حساب وتجنب إعادة استخدامها.
        </p>
      </div>

    </div>

    {/* Protection Tips */}
    <h2 className="text-2xl font-bold text-cyan-400 mb-6">
      نصائح الحماية
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          تفعيل المصادقة الثنائية
        </h3>

        <p className="text-slate-400">
          أضف طبقة حماية إضافية لحساباتك باستخدام المصادقة الثنائية (2FA).
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          تحديث التطبيقات باستمرار
        </h3>

        <p className="text-slate-400">
          تساعد التحديثات الأمنية على إصلاح الثغرات وحماية أجهزتك.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          التحقق من الروابط
        </h3>

        <p className="text-slate-400">
          تأكد من عنوان الموقع قبل إدخال أي معلومات شخصية أو مالية.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">
          النسخ الاحتياطي للبيانات
        </h3>

        <p className="text-slate-400">
          احتفظ بنسخ احتياطية منتظمة للملفات المهمة لحمايتها من الفقدان.
        </p>
      </div>

    </div>

  </section>

  <Footer />

</main>

);
}
