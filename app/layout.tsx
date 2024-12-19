import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./_css/globals.css";
import Footer from "./_components/common/footer";

export const metadata: Metadata = {
  title: "9동여지도",
  description: "돌아온 9동여지도",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="wrap body">
        {children}
        <Footer />
      </body>
    </html>
  );
}
