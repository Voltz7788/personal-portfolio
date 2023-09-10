import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yannismadu.com",
  description: "Yannis Madu's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-20">
      <body className={`${montserrat.className} bg-bradBlue`}>{children}</body>
    </html>
  );
}
