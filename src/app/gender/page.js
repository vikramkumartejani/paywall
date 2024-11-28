"use client";
import React, { useState } from "react";

export default function AgePage() {
  const [age, setAge] = useState("");

  return (
    <div className=" min-h-screen px-9 bg-black text-white flex flex-col items-center justify-center">
      {/* Logo Section */}
      <img
        className="absolute top-5 left-5 text-red-500 text-3xl font-bold"
        src="/Group 16.png"
      />

      {/* Content Section */}
      <div className="text-center text-[#FFF6E8] ">
        <h1 className="text-[32px]  font-bold">
          LET'S FIND <br />
          <span className="text-[48px]  font-bold ">KEVIN</span>
        </h1>
        <p className="mt-3 text-[13px] w-[90%] mx-auto leading-[16px]">
          We just need some informations to help our AI understand your search
        </p>

        {/* Age Input Section */}
        <div className="mt-8 bg-[#353535] rounded-lg p-6 flex flex-col items-center ">
          <h3 className="block text-[20px] font-[700]">What’s their gender?</h3>
          <div className="space-y-4 mt-4 ">
            <button className="bg-[#D9D9D9] min-w-[102px] text-black rounded-lg  py-3 flex items-center gap-2 justify-center">
              Male <img src="/male.svg" />
            </button>
            <button className="bg-[#D9D9D9] min-w-[102px] text-black rounded-lg  py-3 flex items-center gap-2 justify-center">
              Female <img src="/female.svg" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 fixed bottom-12 left-1/2 -translate-x-1/2 flex w-full px-9 justify-between gap-6">
          <button className="bg-[#EDECFB] flex items-center justify-center gap-1 text-[#3B42C4] px-6 py-2 rounded-lg text-[24px] font-[700]">
            <img src="/previous.svg" /> BACK
          </button>
          <button
            className={`bg-[#FFCCDE] flex items-center justify-center gap-1 text-[#DB4126] px-6 py-2 rounded-lg text-[24px] font-[700] ${
              !age && "opacity-50 cursor-not-allowed"
            }`}
            disabled={!age}
          >
            NEXT <img src="/next.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
