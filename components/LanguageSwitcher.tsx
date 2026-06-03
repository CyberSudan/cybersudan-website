"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="px-4 py-2 rounded-lg border border-cyan-500 text-cyan-400"
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}
