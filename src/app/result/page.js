"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ResultsPage() {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 7;

  useEffect(() => {
    const savedPhoto = localStorage.getItem("uploadedPhoto");
    if (savedPhoto) {
      setUploadedPhoto(savedPhoto);
    }
  }, []);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProfile(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex + 1);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="flex justify-between items-center p-4">
        <Image src="/Group 16.png" alt="Logo" width={99} height={38} />
        <button className="bg-[#DB4126] text-white px-6 py-2 rounded-full font-bold">
          Search
        </button>
      </div>

      <div className="px-4 py-8 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[36px] leading-[40px] font-bold mb-2">
            What we found for <br /> Denis
          </h1>
          <p className="text-white text-sm tracking-[0.64px]">
            <span className="underline">WE HAVE NOT FOUND AN EXACT MATCH</span>
            <br /> BUT PLEASE REVIEW THE PROFILES WE FOUND SIMILAR
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-[#393939] rounded md:rounded-[20px] relative overflow-hidden cursor-pointer"
                onClick={() =>
                  handleProfileClick({
                    name: "Steven",
                    age: 24,
                    image: uploadedPhoto || "/placeholder.svg?text=No+Image",
                  })
                }
              >
                <Image
                  src={uploadedPhoto || "/placeholder.svg?text=No+Image"}
                  alt={`Profile ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="blur-sm"
                />
                <div className="absolute bottom-0 md:bottom-4 left-1 md:left-4">
                  <p className="text-white text-xs md:text-lg">
                    <span className="font-semibold text-black">Steven</span>
                    <span className="text-black">, 24</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5">
          <div
            ref={modalRef}
            className="rounded-lg max-w-[500px] w-full mx-4"
            style={{
              background:
                "linear-gradient(180.04deg, rgba(115, 115, 115, 0) 40.01%, #181818 64.88%)",
            }}
          >
            <div className="relative w-full overflow-hidden rounded-t-lg">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop
                onSlideChange={handleSlideChange}
              >
                {[...Array(7)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={selectedProfile.image}
                      alt={`Profile ${index + 1}`}
                      objectFit="cover"
                      width={500}
                      className="h-[300px]"
                      height={300}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute top-4 right-4 text-black text-lg z-40">
                <p>
                  {activeSlide}/{totalSlides}
                </p>
              </div>
            </div>

            <div className="p-4 pb-10">
              <div className="flex items-start flex-col gap-4 text-white">
                <h2 className="text-[15px] font-bold">📍 Paris</h2>
                <h2 className="text-[15px] font-bold">
                  🟢 Last online: yesterday
                </h2>
                <h2 className="text-[15px] font-bold">⭐️ Premium: Yes</h2>
                <h2 className="text-[15px] font-bold">📝 Joined: 12/10/2024</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
