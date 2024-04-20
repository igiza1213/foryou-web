"use client";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";
const uid = "msg2324";

interface res {
  id: number;
  created_at: string;
  title: string;
  content: string;
  like: number;
  uid: string;
  prise: string;
  location: string;
}

const HeartButton2 = ({ data }: { data: res }) => {
  const [isClicked, setIsClicked] = useState(false);
  const host = process.env.NEXT_PUBLIC_HOST;

  const upsert = async (data: any) => {
    try {
      const res = await fetch(`http://${host}/api/post/savePost`, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((r) => {
          console.log(r);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="h-[14px] justify-start items-center gap-[3px] inline-flex"
      onClick={() => {
        setIsClicked(!isClicked);
        upsert({ uid: uid, data: data });
      }}
    >
      <Heart
        className={cn("w-4 text-rose-400", isClicked && "fill-yellow-100")}
        strokeWidth={"2.25"}
      />
      <div className="text-rose-400 text-xs font-medium font-pre">
        {isClicked ? data.like + 1 : data.like}
      </div>
    </div>
  );
};

export default HeartButton2;
