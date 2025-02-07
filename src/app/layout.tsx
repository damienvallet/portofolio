import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damien Vallet - Audio Creative",
  description: "Damien Vallet's portfolio, Sound Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Damien Vallet, Portofolio, Audio Product Design, Programmation"
        />
        {/* og metatag */}
        <meta
          property="og:title"
          content="Damien Vallet - Audio Product Designer - Portofolio"
        />
        <meta property="og:description" content="Portofolio Damien Vallet" />
        <meta
          property="og:url"
          content="https://damienvallet.github.io/portofolio/"
        />
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
