import type { Metadata } from "next";
import localFont from "next/font/local";
import "../src/css/globals.css";

const geistSans = localFont({
  src: "../src/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../src/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "부활한 구동여지도",
  description: "Generated by The Team BoEun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
