"use client";
import { useGluedEmotionCache } from "./emotionNextjsGlue";
import { CacheProvider } from "@emotion/react";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap"
});

export default function EmotionProvider({ children }: { children: ReactNode }): ReactNode {
  const cache = useGluedEmotionCache();
  return (
    <CacheProvider value={cache}>
      <MantineProvider theme={{ fontFamily: vazirmatn.variable }} withGlobalStyles emotionCache={cache}>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
