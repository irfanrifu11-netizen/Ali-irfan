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

const siteTitle = "Ali Irfan | Web Developer in Kerala";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteTitle,
    template: "%s | Ali Irfan",
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [
    "Ali Irfan",
    "web developer in Kerala",
    "freelance web developer Kerala",
    "website developer Kerala",
    "frontend developer Kerala",
    "Next.js developer Kerala",
    "React developer Kerala",
    "creative developer Kerala",
    "UI/UX designer Kerala",
    "web design Kerala",
    "portfolio",
  ],
  authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
