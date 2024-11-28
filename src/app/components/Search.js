import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className=" text-white flex flex-col items-center justify-center my-[150px] md:my-0 md:h-screen">
      {/* Header Text */}
      <div className="text-center">
        <h1 className="text-[40px] md:text-[80px] tracking-[0.8px] leading-[41px] md:leading-[88px] font-[700] text-[#FFCCDE]">
          DON'T HAVE ANY DOUBT ANYMORE
        </h1>
        <a
          href="#"
          className="flex items-start justify-center gap-3 text-[40px] md:text-[80px] tracking-[0.8px] leading-[88px] font-[700] text-[#F54E26] underline "
        >
          SEARCH THE CHEATER{" "}
          <Image src='/arrow-three.svg' alt="arrow-three" className="mt-2 md:block hidden" width={32} height={32} />
        </a>
      </div>

      {/* Subtext */}
      <div className="mt-5 md:mt-10 text-[#A7A9BE] text-[17.19px] text-center ">
        <p className="slider-p">
          You can finally move on with your life and find someone of your worth
        </p>
        <p className="font-sans">Results may take 10 to 40 minutes</p>
      </div>
    </div>
  );
};

export default Search;
