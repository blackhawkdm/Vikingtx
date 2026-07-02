import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteChangeEvents from "@/components/RouteChangeEvents";

// GTM container ID (public). Unset (e.g. previews) → analytics quietly no-ops.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
  metadataBase: new URL("https://www.vikingtx.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vikingtx.com",
    siteName: "Viking Inc.",
    title: "Viking – Custom Oilfield Tanks, Parts & Trucking",
    description:
      "ASME-certified oilfield tanks and pressure vessels, parts, and field trucking out of Odessa, Texas. Request a quote today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viking – Custom Oilfield Tanks, Parts & Trucking",
    description:
      "ASME-certified oilfield tanks and pressure vessels, parts, and field trucking out of Odessa, Texas. Request a quote today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-barlow)]" suppressHydrationWarning>
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        {GTM_ID && <RouteChangeEvents />}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
