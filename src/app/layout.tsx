import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companyInfo } from "@/lib/services";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} | Professional Security Services Manchester`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    "security services Manchester",
    "manned guarding Oldham",
    "warehouse security",
    "healthcare security",
    "education security",
    "cleaning services Manchester",
    "facilities support",
  ],
  metadataBase: new URL(companyInfo.website),
  openGraph: {
    title: companyInfo.name,
    description: companyInfo.description,
    url: companyInfo.website,
    siteName: companyInfo.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
