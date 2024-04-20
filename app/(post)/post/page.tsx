const Post = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[315px] h-[669px] flex-col justify-start items-start inline-flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <input
              placeholder="제목 없음"
              name="titles"
              className="placeholder:text-neutral-400 text-xl font-bold font-nanum mt-[20px]"
            />
          </div>
          <div className="border-t border-rose-400 gap-2.5 flex-col flex w-full mt-[12px] pt-[12px]">
            <div className="flex gap-[14px]">
              <div className="w-[76px] h-[21px] relative">
                <input
                  name="prise"
                  placeholder="가격"
                  className="w-[76px] h-[21px] pl-2 left-0 top-0 absolute bg-rose-400 bg-opacity-60 rounded-[5px] text-[9px] font-semibold font-pre text-white"
                />
              </div>

              <div className="w-[76px] h-[21px] relative">
                <input
                  name="location"
                  placeholder="장소"
                  className="w-[76px] h-[21px] pl-2 left-0 top-0 absolute bg-rose-400 bg-opacity-60 rounded-[5px] text-[9px] font-semibold font-pre text-white"
                />
              </div>
            </div>
            <textarea
              name="content"
              placeholder="내용을 입력해주세요."
              rows={25}
              className="placeholder:text-neutral-400 text-[10px] w-full font-normal font-nanum"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
