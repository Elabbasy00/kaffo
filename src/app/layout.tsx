import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import ThemeRegistry from "../ThemeRegistry/ThemeRegistry";
import Footer from "../components/footer/Footer";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "كــفــوَّ",
  description:
    "كفو، حيث يلتقي الإبداع بالتعلم بطريقة ملهمة! نحن نتخذ من التعليم، البرمجة، والتسويق فنًا، نقدم خدماتنا بروح إيجابية و متميزة لتسهيل رحلة النجاح لعملائنا.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={cairo.className}>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
