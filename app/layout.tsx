import "@app/styles/globals.scss";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ReactNode } from "react";
import { global } from "@shared/i18n/locales/fa";
import EmotionProvider from "@app/providers/emotion";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap"
});

export const metadata: Metadata = {
  title: global.title,
  description: global.description
};

export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
  return (
    <html lang="en" className={`${vazirmatn.variable}`}>
      <body className={vazirmatn.className}>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
