import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./_css/globals.css";
import Footer from "./_components/common/footer";
import Headers from "./_components/common/header";
import BottomNav from "./_components/common/BottomNav";

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
      <body className="body">
        <div className="wrap">
          <Headers />
          <main className="common contents">
            {children}
            <Footer />
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
