import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const hardCoding = [
  { title: "롯데월드", img: "images/lotte.png", heart: "5.3" },
  { title: "콘서트", img: "images/co.png", heart: "5.3" },
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
const uid = "msg2324";

async function fetchData() {
  let response: res[];
  const host = process.env.NEXT_PUBLIC_HOST;

  response = await fetch(`http://${host}/api/post/getSavePost/${uid}/`, {
    cache: "no-store",
    method: "GET",
  }).then((r) => r.json());

  if (response) {
    return response;
  } else {
    console.log("res.result is not an array or res is undefined");
    return;
  }
}

export default async function Index() {
  const result = await fetchData();

  return (
    <div className="w-[375px] pt-[14px] mt-[22px] bg-white rounded-[25px] shadow">
      <div className="w-full h-[470px] flex-col justify-start items-center gap-[38px] inline-flex">
        <ScrollArea className="h-[calc(440px)] flex-col justify-center items-start gap-[25px] flex">
          {result?.length != 0 ? (
            result?.map((args, i) => (
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
                      <Heart
                        className={cn("w-4 text-rose-400 fill-yellow-100")}
                        strokeWidth={"2.25"}
                      />
                      <div className="text-rose-400 text-xs font-medium font-pre">
                        {args.like + 1}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[321px] h-[0px] shadow border border-orange-100 mb-[25px]"></div>
              </div>
            ))
          ) : (
            <></>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
