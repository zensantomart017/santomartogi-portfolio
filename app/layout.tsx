import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Aurora from "../app/components/Aurora";
import SplashCursor from "../app/components/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "/Profile-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${unbounded.variable} antialiased`}
      >
        {/* <SplashCursor /> */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <Aurora
            colorStops={["#003F88", "#0047FF", "#00A3FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.7}
          />
        </div>
        <Navbar />
        <main className="relative z-10 pt-[110px] sm:pt-[110px] md:pt-[120px] lg:pt-[10px]">
          {children}
        </main>
      </body>
    </html>
  );
}
