"use client";
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
          <span className="text-[48px] tracking-[0.64px] leading-[48px] font-bold">KEVIN</span>
        </h1>

        <p className="mt-3 text-[11px] max-w-[314px] mx-auto leading-[16px] gotham-rounded uppercase">
          We just need some informations to help our AI understand your search
        </p>

        {/* Age Input Section */}
        <div className="mt-8 bg-[#353535] rounded-lg p-6">
          <h3 className="block text-[20px] text-white font-bold leading-[32px] tracking-[0.64px]">HOW OLD THEY ARE?</h3>
          <div className="flex items-center justify-center gap-4 mt-5">
            <label htmlFor="age" className="block text-[16px] gotham-rounded font-bold leading-[32px] tracking-[0.64px]">
              AGE
            </label>

            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter the age"
              className=" gotham-rounded px-4 bg-[#1C1C1C] w-[140px] h-[43px] text-white text-lg rounded-lg text-[14px] outline-none appearance-none font-medium placeholder:text-[13px]"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 fixed bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex w-full px-4 md:px-9 justify-between gap-6">
          <button className="bg-[#EDECFB] flex items-center pt-1.5 justify-center w-[90px] text-[24px] gap-1 text-[#3B42C4] rounded-lg tracking-[0.64px] font-bold">
            <img src="/previous.svg" className="-mt-1.5" /> BACK
          </button>
          <Link href='/gender'
            className={`bg-[#FFCCDE] flex items-center pt-1.5 justify-center gap-1 text-[#DB4126] w-[106px] rounded-lg  tracking-[0.64px] text-[24px] font-[700] ${!age && "opacity-50 cursor-not-allowed"
              }`}
            disabled={!age}
          >
            NEXT <img src="/next.svg" className="-mt-1.5"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
