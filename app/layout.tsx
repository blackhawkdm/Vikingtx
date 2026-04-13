import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Viking – Custom Oilfield Tanks, Parts & Trucking",
    template: "%s | Viking",
  },
  description:
    "Viking manufactures custom steel tanks, supplies oilfield parts, and provides field trucking across Texas. Built for the oilfield. Ready for what's next. Request a quote today.",
  metadataBase: new URL("https://vikingtx.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-barlow)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
