"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FormEventHandler } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const body = {
      title: target.titles.value,
      prise: target.prise.value,
      location: target.location.value,
      content: target.content.value,
      uid: "msg2324",
      like: 0,
    };

    const host = process.env.NEXT_PUBLIC_HOST;

    const response = await fetch(`http://${host}/api/post/newPost`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <header>
        <div className="w-[375px] h-28 relative">
          <div className="w-[375px] h-28 left-0 top-0 absolute bg-white border-b border-gray-200" />
          <ChevronLeft className="left-[30px] top-[67px] absolute justify-start items-center gap-[13px] inline-flex" />
          <button
            type="submit"
            className="left-[321px] top-[68px] absolute text-rose-400 text-sm font-bold font-nanum"
          >
            저장
          </button>
        </div>
      </header>
      <main className="min-h-screen flex flex-col items-center">
        {children}
      </main>
    </form>
  );
}
