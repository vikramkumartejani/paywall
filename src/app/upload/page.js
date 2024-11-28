"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AgePage() {
  const [age, setAge] = useState("");

  return (
    <div className=" min-h-screen px-9 bg-[#1C1C1C] text-white flex flex-col items-center justify-center">
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
        <div className="mt-8 bg-[#353535] rounded-lg p-6 space-y-3 w-[329px] pb-[100px]">
          <h3 className="block uppercase text-[20px] font-bold leading-[32px] tracking-[0.64px]">
            What do they look like?
          </h3>
          <p className="text-[12px] gotham-rounded font-medium leading-[14px] pb-6">
            Add a clear picture, with the face visbile and no other person on
            the picture. Very IMPORTANT the picture qualiy should be good and
            the face visibile.
          </p>
          <button className="mt-5 w-full flex items-center gap-5 justify-center py-3 bg-[#1C1C1C] rounded-lg uppercase font-medium text-[12px] gotham-rounded">
            Upload a photo <img src="/upload.svg" />
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 fixed bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex w-full px-4 md:px-9 justify-between gap-6">
          <Link href="/location" className="bg-[#EDECFB] flex items-center pt-1.5 justify-center w-[90px] text-[24px] gap-1 text-[#3B42C4] rounded-lg tracking-[0.64px] font-bold">
            <img src="/previous.svg" className="-mt-1.5" alt="Previous" /> BACK
          </Link>

          <Link
            href="/upload"
            className='bg-[#FFCCDE] flex items-center pt-1.5 justify-center gap-1 text-[#DB4126] w-[106px] rounded-lg tracking-[0.64px] text-[24px] font-bold opacity-50 hover:opacity-100 transition duration-300'
          >
            NEXT <img src="/next.svg" className="-mt-1.5" alt="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
}
