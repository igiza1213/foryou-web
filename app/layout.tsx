import localFont from "next/font/local";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const nanum = localFont({
  src: [
    {
      path: "../public/fonts/NanumSquareNeoOTF-Rg.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/NanumSquareNeoOTF-Bd.otf",
      weight: "700",
    },
  ],
  variable: "--nanum-font",
  display: "swap",
});

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
    <html lang="ko" className={`${pretendard.variable} ${nanum.variable}`}>
      <body className="bg-background text-foreground min-w-[375px]">
        {children}
      </body>
    </html>
  );
}
