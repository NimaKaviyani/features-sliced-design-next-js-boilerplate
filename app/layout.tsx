import "@app/styles/globals.scss";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ReactNode } from "react";
import { globalLanguage } from "@shared/i18n/locales/fa";
import EmotionProvider from "@app/providers/emotion";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap"
});

export const metadata: Metadata = {
  title: globalLanguage.title,
  description: globalLanguage.description
};

export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable}`}>
      <body className={`min-h-screen ${vazirmatn.className}`}>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
