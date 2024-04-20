import { createClient } from "@/utils/supabase/server";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Heart } from "lucide-react";

const hardCoding = [
  { title: "롯데월드", img: "images/lotte.png", heart: "5.3" },
  { title: "콘서트", img: "images/con.png", heart: "5.3" },
  { title: "서울숲", img: "images/lotte.png", heart: "5.3" },
  { title: "한강", img: "images/lotte.png", heart: "5.3" },
  { title: "경복궁", img: "images/lotte.png", heart: "5.3" },
];

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

const images = [
  "images/kingdom.png",
  "images/forest.png",
  "images/baseball.png",
  "images/kingdom.png",
  "images/kingdom.png",
];

async function fetchData() {
  try {
    let response: res[];
    const host = process.env.HOST;

    response = await fetch(`http://${host}/api/post/getPost`, {
      cache: "no-store",
      method: "GET",
    }).then((r) => r.json());

    if (response) {
      return response;
    } else {
      console.log("res.result is not an array or res is undefined");
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

export default async function Index() {
  const result = await fetchData();

  return (
    <div className="w-[375px] pt-[14px] mt-[22px] bg-white rounded-[25px] shadow">
      <div className="w-full h-[609px] flex-col justify-start items-center gap-[38px] inline-flex">
        <div className=" flex-col justify-start items-start gap-[19px] flex">
          <div className="text-black text-lg font-semibold font-pre ml-[27px]">
            선호도 Top 5
          </div>
          <ScrollArea className="whitespace-nowrap w-screen ">
            <div className="w-max flex">
              {hardCoding.map((args, i) => (
                <div className="w-[167px] h-[209px] relative ml-[18px]" key={i}>
                  <img
                    className="w-[167px] h-[209px] rounded-2xl"
                    src={args.img}
                  />
                  <div className="w-[87px] left-[10px] bottom-[14px] absolute flex-col justify-start items-start gap-1 inline-flex">
                    <div className="h-[30px] text-white text-[25px] font-semibold font-pre">
                      {args.title}
                    </div>
                    <div className="h-[14px] justify-start items-center gap-[5px] inline-flex">
                      <Heart
                        className="w-4 text-rose-400"
                        strokeWidth={"2.25"}
                      />
                      <div className="text-white text-xs font-medium font-pre">
                        {args.heart}K
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <ScrollArea className="flex-col justify-center items-start gap-[25px] flex">
          {result?.map((args, i) => (
            <div
              key={i}
              className="flex-col justify-start items-start gap-[14px] flex"
            >
              <div className="justify-start items-start gap-3 inline-flex">
                <img className="w-20 h-20 rounded-[9px]" src={images[i]} />
                <div className="flex-col justify-start items-start gap-[19px] inline-flex">
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <div className="h-[17px] text-black text-sm font-semibold font-pre">
                      {args.title}
                    </div>
                    <div className="text-neutral-400 h-[24px] text-[10px] whitespace-pre font-medium font-pre">
                      {args.content}
                    </div>
                  </div>
                  <div className="h-[14px] justify-start items-center gap-[3px] inline-flex">
                    <Heart className="w-4 text-rose-400" strokeWidth={"2.25"} />
                    <div className="text-rose-400 text-xs font-medium font-pre">
                      {args.like}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[321px] h-[0px] shadow border border-orange-100 mb-[25px]"></div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
