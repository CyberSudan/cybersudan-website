export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-[#0A0E18]">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-cyan-400 text-xl font-bold">
              CyberSudan
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              Cybersecurity Awareness Platform focused on
              digital safety, threat intelligence and
              cybersecurity education.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/news">News</a></li>
              <li><a href="/alerts">Alerts</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">
              Connect
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>GitHub</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
              <li>Email</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-cyan-500/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 CyberSudan. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
