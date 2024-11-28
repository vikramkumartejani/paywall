"use client";

import React from "react";
import "../globals.css"; 
import Image from "next/image";

// Reviews Data
const reviews = [
  {
    title: "sadly writing a good review",
    content:
      "I wish I would not write this review but anywa...I didn’t expect much when I tried this service, but wow – I was blown away! It helped me uncover the truth I needed to make important decisions in my life. If you’re in doubt, don’t hesitate. This is a game-changer.",
    name: "James",
    location: "London",
    relationship: "in relationship since 2 years",
    bgColor: "bg-[#F9BF28] ",
  },
  {
    title: "EASY AND EFFECTIVE",
    content:
      "I had suspicions about my partner for months, but I couldn't find any proof. This tool gave me the clarity I needed in just minutes. It was quick, easy to use, and surprisingly accurate. I highly recommend it to anyone who wants peace of mind.",
    name: "SARAH",
    location: "NEW YORK",
    relationship: "In relationship since 5 years",
    bgColor: "bg-[#5738AF]",
  },
  {
    title: "Worth Every Penny",
    content:
      "Trust is everything in a relationship, but when I started to question my husband honesty, this tool came to the rescue. It gave me accurate insights about my now ex husband on Tinder, he tried to act like it was an old profile but I could see the last activity... then he admitted everything.  ",
    name: "EMMA",
    location: "Sydney",
    relationship: "In relationship since 5 years",
    bgColor: "bg-[#FFF6E8]",
  },
  {
    title: "Finally.. I know",
    content:
      "I had doubts but couldn’t find solid proof until I tried this tool. The results were eye-opening, and I’m so thankful for this service. It gave me the confidence to make the right choices for my future. Thank you for creating such a helpful platform! ",
    name: "Lucas",
    location: "Paris",
    relationship: "In relationship since 5 years",
    bgColor: "bg-[#D0D5FF]",
  },


];

export default function ScrollableReviews() {
  const getTextColor = (bgColor) => {
    switch (bgColor) {
      case 'bg-[#5738AF]':
        return {
          title: 'text-[#FFF6E8]',
          content: 'text-[#E8E8EE]',
          name: 'text-[#FFF6E8]',
          location: 'text-[#FFCCDE]',
          relationship: 'text-[#FFF6E8]'
        };
      case 'bg-[#F9BF28]':
        return {
          title: 'text-[#1C1C1C]',
          content: 'text-[#1C1C1C]',
          name: 'text-[#1B1B1B]',
          location: 'text-[#EC543B]',
          relationship: 'text-[#1C1C1C]'
        };
      case 'bg-[#FFF6E8]':
        return {
          title: 'text-[#1C1C1C]',
          content: 'text-[#1C1C1C]',
          name: 'text-[#1B1B1B]',
          location: 'text-[#5738AF]',
          relationship: 'text-[#1C1C1C]'
        };
      case 'bg-[#D0D5FF]':
        return {
          title: 'text-[#1C1C1C]',
          content: 'text-[#1C1C1C]',
          name: 'text-[#1B1B1B]',
          location: 'text-[#5738AF]',
          relationship: 'text-[#1C1C1C]'
        };
      default:
        return {
          title: 'text-[#000000]',
          content: 'text-[#000000]',
          name: 'text-[#000000]',
          location: 'text-[#EC543B]',
          relationship: 'text-[#000000]'
        };
    }
  };

  return (
    <div className="mt-[150px] md:mt-[203px] flex flex-col items-center justify-center w-full">
      {/* Header */}
      <div className="text-center relative pl-4">
        <div className="absolute sm:-left-24 -top-20 md:-top-10">
          <Image src='/review-heading.svg' alt="logo" width={87} height={76}/>
        </div>
        <h1 className="px-5 text-[46px] md:text-[64px] leading-[48px] md:leading-[70.4px] tracking-[0.64px] font-bold text-[#FFF6E8]">
          WE'VE HELPED THOUSANDS <br /> OF GOOD PEOPLE
        </h1>
      </div>

      {/* Marquee Slider */}
      <div className="relative overflow-x-hidden w-full mt-[98px]">
        <div className="animate-marquee flex">
          {[...reviews, ...reviews].map((review, index) => {
            const { title, content, name, location, relationship, bgColor } = review;
            const textColors = getTextColor(bgColor);  

            return (
              <div
                key={index}
                className={`p-8 m-2 md:m-4 rounded-[16px] hover:-rotate-2 transition duration-300 shadow-md flex flex-col justify-between w-full min-w-[307px] xl:min-w-[475px] min-h-[300px] ${bgColor.trim()}`}
              >
                <div>
                  <h2 className={`text-[30px] leading-[33px] font-bold mb-3 tracking-[0.24px] uppercase ${textColors.title}`}>
                    {title}
                  </h2>
                  <p className={`text-[12.03px] leading-[21px] mb-6 slider-p font-sans font-medium ${textColors.content}`}>
                    {content}
                  </p>
                </div>
                <div>
                  <h2 className={`text-[20px] leading-[22px] font-bold tracking-[0.24px] ${textColors.name}`}>
                    {name}
                  </h2>
                  <h2 className={`font-bold text-[20px] tracking-[0.24px] uppercase ${textColors.location}`}>
                    {location}
                  </h2>
                  <p className={`text-[12.50px] leading-[19.6px] font-medium font-sans slider-p ${textColors.relationship}`}>
                    {relationship}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

