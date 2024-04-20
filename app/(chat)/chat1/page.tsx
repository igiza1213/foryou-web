import { Bookmark, Heart } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-[375px] h-[976px] relative bg-white">
      <div className="w-full h-[153px] px-[15px] py-[33px] bg-white rounded-[25px] shadow justify-center items-end gap-[241px] inline-flex">
        <Link href={"/"} className="justify-start items-center gap-1 flex">
          <img className="w-[37px] h-[34px]" src="images/logo.png" />
          <div className="text-center text-rose-400 text-[22px] font-semibold font-pre leading-[21px]">
            연인
          </div>
        </Link>
      </div>
      <div className="w-[375px] h-[842px] left-0 top-[138px] absolute">
        <div className="w-[375px] h-[838px] left-0 top-0 absolute bg-amber-50 rounded-[25px]" />
        <div className="left-[196px] top-[312px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <img className="w-[146px] h-[41px]" src="images/union2.png" />
          <input className="text-rose-400 bg-inherit border-0 focus:outline-none text-[10px] font-semibold font-pre absolute left-9 top-3.5 w-14"></input>
        </div>
      </div>

      <div className="left-[125px] top-[239px] absolute flex-col justify-start items-center gap-[7px] inline-flex">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src="images/ellipse-2.png"
        />
        <div className="text-rose-400 text-sm font-semibold font-pre">
          당신을 위해 준비한 추천
        </div>
      </div>

      <div className="left-[27px] top-[361px] absolute justify-start items-start gap-[3px] inline-flex">
        <img className="w-8 h-8 rounded-full" src="images/3.png" />
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
          <img className="w-[196.80px] h-[49px]" src="images/union.png" />
          <div className="flex-col justify-start items-start flex z-10 absolute left-[68px] top-2">
            <div className="text-rose-400 text-sm font-semibold font-pre">
              For who?
            </div>
            <div className="text-rose-400 text-[10px] font-medium font-pre">
              소중한 누구를 위해 준비하시나요?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
