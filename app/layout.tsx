import "@app/styles/globals.scss";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ReactNode } from "react";
import { globalLanguage } from "@shared/i18n/locales/fa";
import { MantineProvider, ColorSchemeScript, DirectionProvider, MantineColorScheme } from "@mantine/core";
import cookieManager from "@shared/helpers/cookie";

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
      <head>
        <ColorSchemeScript
          defaultColorScheme={(cookieManager.getCookie("mantine-color-scheme") as MantineColorScheme) ?? "dark"}
        />
      </head>
      <body className={`min-h-screen ${vazirmatn.className}`}>
        <DirectionProvider>
          <MantineProvider
            theme={{
              fontFamily: `${vazirmatn.style.fontFamily}`,
              fontFamilyMonospace: `${vazirmatn.style.fontFamily}`,
              headings: { fontFamily: `${vazirmatn.style.fontFamily}` }
            }}
          >
            {children}
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
