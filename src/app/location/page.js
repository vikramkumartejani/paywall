'use client'
import Link from "next/link";
import React, { useState } from "react";

export default function AgePage() {
  const [age, setAge] = useState("");

  return (
    <div className="min-h-screen px-9 bg-[#1C1C1C] text-white flex flex-col items-center justify-center">
      {/* Logo Section */}
      <img
        className="absolute top-5 left-5 text-red-500 text-3xl font-bold"
        src="/Group 16.png"
      />

      {/* Content Section */}
      <div className="text-center text-[#FFF6E8] ">
      <h1 className="text-[32px] tracking-[0.64px] leading-[32px] font-bold">
          LET'S FIND <br />
          <span className="text-[48px] tracking-[0.64px] leading-[48px] font-bold">
            KEVIN
          </span>
        </h1>
     

        {/* Age Input Section */}
        <div className="mt-8 bg-[#353535] rounded-lg p-6 space-y-3">
          <h3 className="block uppercase text-[20px] font-bold tracking-[0.64px]">
            Where might they last use Tinder?
          </h3>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter the exact location here"
            className="w-full h-12 px-4 gotham-rounded bg-[#1C1C1C] text-white text-lg rounded-lg border border-gray-700 focus:outline-none  placeholder-white placeholder:text-[13px]"
          />

          <img src="/map.png" className="w-full h-[160px] rounded-lg" />
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 fixed bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex w-full px-4 md:px-9 justify-between gap-6">
          <Link href="/location" className="bg-[#EDECFB] flex items-center pt-1.5 justify-center w-[90px] text-[24px] gap-1 text-[#3B42C4] rounded-lg tracking-[0.64px] font-bold">
            <img src="/previous.svg" className="-mt-1.5" alt="Previous" /> BACK
          </Link>

          <Link
            href="/uploadphoto"
            className={`bg-[#FFCCDE] flex items-center pt-1.5 justify-center gap-1 text-[#DB4126] w-[106px] rounded-lg tracking-[0.64px] text-[24px] font-bold ${!age && "opacity-50 cursor-not-allowed"}`}
          >
            NEXT <img src="/next.svg" className="-mt-1.5" alt="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
}
