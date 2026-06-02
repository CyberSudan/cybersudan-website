export default function Footer() {
return (
<footer className="border-t border-slate-800 mt-20">

  <div className="max-w-6xl mx-auto px-6 py-10">

    <div className="grid md:grid-cols-3 gap-8">

      <div>
        <h3 className="text-xl font-bold text-cyan-400 mb-3">
          CyberSudan
        </h3>

        <p className="text-slate-400">
          مبادرة وطنية لنشر الوعي بالأمن السيبراني وتمكين الشباب
          السوداني بالمعرفة والمهارات التقنية.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-3">
          روابط سريعة
        </h3>

        <div className="flex flex-col gap-2 text-slate-400">
          <a href="/">الرئيسية</a>
          <a href="/resources">الموارد</a>
          <a href="/alerts">التحذيرات</a>
          <a href="/contact">تواصل معنا</a>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">
          تابعنا
        </h3>

        <div className="flex flex-col gap-2">

          <a
            href="https://t.me/CyberSudan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400"
          >
            Telegram
          </a>

          <a
            href="https://www.facebook.com/share/1ApEWf5sMF/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400"
          >
            Facebook
          </a>

        </div>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500">
      © 2026 CyberSudan. All Rights Reserved.
    </div>

  </div>

</footer>

);
}
