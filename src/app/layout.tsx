import type { Metadata } from "next";
import { Lato, Raleway } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";
import { AOSProvider } from "@/components/animation/AOSProvider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"], // usually required
});

export const metadata: Metadata = {
  title: "Zylo Brains – AI & Software Development Company | IT Solutions",
  description: "ZyloBrains is an AI-driven software development company offering web apps, AI training, and digital solutions to empower businesses and professionals.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html
      lang="en"
      className={`${raleway.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="h-lvh flex flex-col">
        <LayoutClient>
          <AOSProvider>
            {children}
          </AOSProvider>
        </LayoutClient>
      </body>
    </html>
  );
}
