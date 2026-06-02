import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
title: "CyberSudan",
description: "من أجل سودان رقمي آمن",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="ar" dir="rtl">
<body className={"${cairo.className} bg-slate-950 text-white"}>
{children}
</body>
</html>
);
}
