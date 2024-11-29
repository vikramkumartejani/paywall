"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";

export default function UploadPhotoPage() {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  // Clear uploadedPhoto on page reload
  useEffect(() => {
    setUploadedPhoto(null);
    localStorage.removeItem("uploadedPhoto"); // Clear saved photo
  }, []);

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setUploadedPhoto(base64Image);
        localStorage.setItem("uploadedPhoto", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen px-9 bg-[#1C1C1C] text-white flex flex-col items-center justify-center">
      <Image
        className="absolute top-5 left-5"
        src="/Group 16.png"
        alt="Logo"
        width={99}
        height={38}
      />
      <div className="text-center text-[#FFF6E8]">
        <h1 className="text-[32px] tracking-[0.64px] leading-[32px] font-bold">
          LET'S FIND <br />
          <span className="text-[48px] tracking-[0.64px] leading-[48px] font-bold">
            KEVIN
          </span>
        </h1>
        <div className="mt-8 bg-[#353535] rounded-lg p-6 space-y-3 w-[329px] pb-[100px]">
          <h3 className="block uppercase text-[20px] font-bold leading-[32px] tracking-[0.64px]">
            What do they look like?
          </h3>
          <p className="text-[12px] font-medium leading-[14px] pb-6">
            Add a clear picture, with the face visible and no other person in
            the picture. The picture quality should be good, and the face
            visible.
          </p>
          <label className="mt-5 w-full flex items-center gap-5 justify-center py-3 bg-[#1C1C1C] rounded-lg uppercase font-medium text-[12px] cursor-pointer hover:bg-[#252525] transition-colors">
            Upload a photo
            {uploadedPhoto ? (
              <AiOutlineCheck className="h-5 w-5 text-green-500" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>
        </div>

        <div className="mt-12 fixed bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex w-full px-4 md:px-9 justify-between gap-6">
          <Link
            href="/location"
            className="bg-[#EDECFB] flex items-center pt-1.5 justify-center w-[90px] text-[24px] gap-1 text-[#3B42C4] rounded-lg tracking-[0.64px] font-bold"
          >
           <img src="/previous.svg" className="-mt-1.5" alt="Previous" />  BACK
          </Link>
          <Link
            href="/we-found"
            className={`bg-[#FFCCDE] flex items-center pt-1.5 justify-center gap-1 text-[#DB4126] w-[106px] rounded-lg tracking-[0.64px] text-[24px] font-bold ${
              !uploadedPhoto ? "opacity-50" : "hover:opacity-90"
            } transition`}
          >
            NEXT <img src="/next.svg" className="-mt-1.5" alt="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
}
