import { Bookmark } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
