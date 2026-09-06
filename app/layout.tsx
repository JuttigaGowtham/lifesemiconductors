import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Dancing_Script, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LIFE Semiconductor Institute | Build Your Future in Semiconductor & VLSI",
  description: "Industry-focused VLSI training, practical learning, and hands-on projects in Physical Design, Analog Design, Analog Layout, and Memory Design.",
  keywords: [
    "Semiconductor Training",
    "VLSI Institute",
    "Analog Layout Course",
    "Physical Design Training",
    "Memory Design",
    "Cadence Virtuoso",
    "DRC LVS PEX",
    "LIFE Semiconductor Institute"
  ],
  authors: [{ name: "LIFE Semiconductor Institute" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0A192F] selection:bg-[#1D4ED8] selection:text-white">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
