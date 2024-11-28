"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AgePage() {
  const [gender, setGender] = useState(""); // Update state to track gender selection

  // Handle gender selection
  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender); // Update gender based on selection
  };

  return (
    <div className="min-h-screen px-9 bg-[#1C1C1C] text-white flex flex-col items-center justify-center relative">
      {/* Logo Section */}
      <img
        className="absolute top-5 left-5"
        src="/Group 16.png"
        alt="Logo"
      />

      {/* Content Section */}
      <div className="text-center text-[#FFF6E8] ">
        <h1 className="text-[32px] tracking-[0.64px] leading-[32px] font-bold">
          LET'S FIND <br />
          <span className="text-[48px] tracking-[0.64px] leading-[48px] font-bold">
            KEVIN
          </span>
        </h1>

        {/* Gender Selection Section */}
        <div className="mt-8 bg-[#353535] rounded-lg p-6 flex flex-col items-center w-[329px]">
          <h3 className="block text-[20px] font-bold tracking-[0.64px] leading-[20px] uppercase">What’s their gender?</h3>
          <div className="space-y-4 mt-4">
            <button
              className="bg-[#D9D9D9] min-w-[102px] text-black gotham-rounded rounded-lg py-3 text-[13px] flex items-center gap-2 justify-center"
              onClick={() => handleGenderSelect("Male")}
            >
              Male <img src="/male.svg" alt="Male" />
            </button>
            <button
              className="bg-[#D9D9D9] min-w-[102px] text-black gotham-rounded rounded-lg py-3 text-[13px] flex items-center gap-2 justify-center"
              onClick={() => handleGenderSelect("Female")}
            >
              Female <img src="/female.svg" alt="Female" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 fixed bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex w-full px-4 md:px-9 justify-between gap-6">
          <Link href='/age' className="bg-[#EDECFB] flex items-center pt-1.5 justify-center w-[90px] text-[24px] gap-1 text-[#3B42C4] rounded-lg tracking-[0.64px] font-bold">
            <img src="/previous.svg" className="-mt-1.5" alt="Previous" /> BACK
          </Link>

          <Link
            href="/location"
            className={`bg-[#FFCCDE] flex items-center pt-1.5 justify-center gap-1 text-[#DB4126] w-[106px] rounded-lg tracking-[0.64px] text-[24px] font-bold ${!gender && "opacity-50 cursor-not-allowed"
              }`}
          >
            NEXT <img src="/next.svg" className="-mt-1.5" alt="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
}
