"use client";
import React, { useState } from "react";

const cheaterDetails = [
  {
    question: "LAST LOGGED IN",
    answer: "You will see when they last connected.",
  },
  {
    question: "LAST ACTIVITY",
    answer: "Displays the last activity performed by the user.",
  },
  {
    question: "CREATION DATE",
    answer: "Shows the date when the profile was created.",
  },
  {
    question: "LAST LOCATION",
    answer: "Provides the last known location of the user.",
  },
];

const Cheater = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <p className="md:block hidden text-right text-[24px] font-bold text-white leading-[39px] tracking-[0.24px] w-full pb-[30px]">
        WE WILL PROVIDE YOU ALL DETAILS (SO THEY CAN'T SAY IT'S AN OLD
        PROFILE)
      </p>
      <div className=" text-white flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-20 md:gap-5">
        <div>
          {/* Header Section */}
          <div className="md:max-w-[559px]">
            <h1 className="text-[35px] sm:text-[38px] md:text-[48px] lg:text-[64px] tracking-[0.64px] text-[#FFF6E8] font-bold leading-[48px] md:leading-[70px]">
              WE ALREADY DETECTED <br />
              MORE THAN +5000 CHEATERS
            </h1>
          </div>

          {/* Cheater Profiles Section */}
          <div className="mt-[40px] md:mt-[30px] flex flex-col md:flex-row items-center flex-wrap justify-center md:justify-start gap-9">
            {/* Example Cards */}
            <div className="relative h-[233px] w-[234px]">
              <div className=" overflow-hidden h-full w-full">
                <img
                  src="/kevin.png"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <p className="absolute h-[100px] w-[100px] flex items-center justify-center text-[20px] uppercase font-bold tracking-[0.64px] -bottom-2 md:-bottom-10 -right-5 p-5 text-[#F9BF28] bg-[#FFF6E8] rounded-full">
                Cheater
              </p>
            </div>
            <div className="relative h-[233px] w-[234px] ">
              <div className=" h-full w-full">
                <img
                  src="/steven.png"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <p className="absolute h-[100px] w-[100px] flex items-center justify-center text-[20px] uppercase font-[700] -bottom-10 -right-5 p-5 text-[#F9BF28] bg-[#FFF6E8] rounded-full">
                Cheater
              </p>
            </div>
          </div>
        </div>

        {/* Cheater Details Section */}
        <div className="md:max-w-[333px] max-w-full w-full">
        <p className="block md:hidden text-center text-[24px] font-bold text-white leading-[39px] tracking-[0.24px] w-full pb-[30px]">
        WE WILL PROVIDE YOU ALL DETAILS (SO THEY CAN'T SAY IT'S AN OLD
        PROFILE)
      </p>
          {cheaterDetails.map((item, index) => (
            <div key={index} className="border-b border-gray-600 py-6">
              <div
                onClick={() => toggleDetail(index)}
                className={`flex justify-between items-center cursor-pointer transition-colors duration-200 ${openIndex === index ? "text-[#F54E26]" : "text-[#A7A9BE]"
                  }`}
              >
                <span className="text-[36px] leading-[40px] tracking-[0.24px] font-bold">
                  {item.question}
                </span>
                <span className="text-3xl">
                  <img
                    src={openIndex === index ? '/minus.svg' : '/plus.svg'}
                    alt={openIndex === index ? 'Minus' : 'Plus'}
                    width={32}
                    height={32}
                    className="transform transition-transform duration-300"
                  />
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                  ? "max-h-screen opacity-100 mt-2"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-sm md:text-[15.61px] text-[#A7A9BE] roboto mt-1">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cheater;
