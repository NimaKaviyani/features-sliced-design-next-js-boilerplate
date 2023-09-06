"use client";
// import { useGluedEmotionCache } from "./emotionNextjsGlue";
import { CacheProvider } from "@emotion/react";
import { MantineProvider, createEmotionCache, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { ReactNode, useState } from "react";
import { Vazirmatn } from "next/font/google";
import rtlPlugin from "stylis-plugin-rtl";
import cookieManager from "@shared/helpers/cookie";

const vazirmatn = Vazirmatn({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap"
});

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin]
});

export default function EmotionProvider({ children }: { children: ReactNode }): ReactNode {
  // const cache = useGluedEmotionCache();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (cookieManager.getCookie("mantine-color-scheme") as ColorScheme) ?? "dark"
  );
  const toggleColorScheme = (value?: ColorScheme): void => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    cookieManager.setCookie("mantine-color-scheme", nextColorScheme, 30);
  };
  return (
    <CacheProvider value={rtlCache}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            dir: "rtl",
            colorScheme,
            fontFamily: vazirmatn.variable
          }}
          withGlobalStyles
          withNormalizeCSS
          emotionCache={rtlCache}
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
}
