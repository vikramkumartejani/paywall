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
        <div className="mt-8 bg-[#353535] rounded-lg p-6">
          <h3 className="block text-[20px] font-[700]">HOW OLD THEY ARE?</h3>
          <div className="flex items-center justify-center gap-4 mt-5">
            <label htmlFor="age" className="block text-[16px] font-[700]">
              AGE
            </label>

            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter the age"
              className="w-[150px] h-12 px-4 bg-[#1C1C1C] text-white text-lg rounded-lg border border-gray-700 focus:outline-none  placeholder-white placeholder:text-[13px] uppercase"
            />
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
