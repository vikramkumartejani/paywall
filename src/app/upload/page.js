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
        <div className="mt-8 bg-[#353535] rounded-lg p-6 space-y-3">
          <h3 className="block uppercase text-[20px] font-[700]">
            What do they look like?
          </h3>
          <p className="text-[12px]">
            Add a clear picture, with the face visbile and no other person on
            the picture. Very IMPORTANT the picture qualiy should be good and
            the face visibile.
          </p>
          <button className="w-full flex items-center gap-5 justify-center py-3 bg-[#1C1C1C] rounded-lg">
            Upload a photo <img src="/upload.svg" />
          </button>
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
