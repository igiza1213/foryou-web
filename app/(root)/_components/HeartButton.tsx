"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";

const HeartButton = ({ data }: { data: string }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className="h-[14px] justify-start items-center gap-[5px] inline-flex"
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <Heart
        className={cn("w-4 text-rose-400", isClicked && "fill-yellow-100")}
        strokeWidth={"2.25"}
      />
      <div className="text-white text-xs font-medium font-pre">{data}K</div>
    </div>
  );
};

export default HeartButton;
