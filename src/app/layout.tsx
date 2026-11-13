import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { MotionProvider } from "@/components/providers/motion-provider";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ali Irfan — Creative Developer & Designer",
    template: "%s — Ali Irfan",
  },
  description: siteConfig.description,
  keywords: [
    "Ali Irfan",
    "creative developer",
    "frontend developer",
    "UI/UX designer",
    "portfolio",
    "Next.js developer",
    "web design",
  ],
  authors: [{ name: siteConfig.shortName }],
  creator: siteConfig.shortName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: "Ali Irfan — Creative Developer & Designer",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Irfan — Creative Developer & Designer",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-ink text-paper antialiased">
        <MotionProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
