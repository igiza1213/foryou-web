import { GeistSans } from "geist/font/sans";
import { Bookmark } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
  ],
  variable: "--pre-font",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="bg-background text-foreground min-w-[375px]">
        <header>
          <div className="w-full h-[153px] px-[15px] py-[33px] bg-white rounded-[25px] shadow justify-center items-end gap-[241px] inline-flex">
            <Link href={"/"} className="justify-start items-center gap-1 flex">
              <img className="w-[37px] h-[34px]" src="images/logo.png" />
              <div className="text-center text-rose-400 text-[22px] font-semibold font-pre leading-[21px]">
                연인
              </div>
            </Link>
            <Link href={"/save"}>
              <Bookmark />
            </Link>
          </div>
        </header>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
