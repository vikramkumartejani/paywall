"use client";
import React, { useState } from "react";

const faqItems = [
  {
    question: "IS THIS SERVICE ANONYMOUS?",
    answer:
      "Yes, our service is totally anonymous. You can even pay with crypto for full anonymity.",
  },
  {
    question: "WHICH PLATFORMS ARE SUPPORTED?",
    answer:
      "We support a wide range of dating platforms, including Tinder, Bumble, and more.",
  },
  {
    question: "DO I HAVE TO PAY TO SEARCH MY PARTNER?",
    answer:
      "Yes, there is a small fee to access the service, which helps us provide accurate and reliable results.",
  },
  {
    question: "HOW CAN I KNOW IF MY PARTNER WAS ACTIVE ON DATING APPS?",
    answer:
      "Our service provides last active timestamps, profile creation dates, and more to help you verify activity.",
  },
  {
    question: "CAN I FIND HIM WITH HIS PHONE NUMBER?",
    answer:
      "Yes, you can search profiles using phone numbers, usernames, or other unique identifiers.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[150px] md:mt-[348px] text-white flex flex-col items-center justify-center max-w-[1120px] mx-auto">
      <h1 className="text-[40px] md:text-[64px] md:leading-[70px] tracking-[0.64px] text-[#FFF6E8] font-bold mb-6 text-center">
        FREQUENTLY ASKED <br /> QUESTIONS
      </h1>
      <div className="w-full">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-600 py-10">
            <div
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center cursor-pointer transition-colors duration-200 ${
                openIndex === index ? "text-[#5738AF]" : "text-[#FFF6E8]"
              }`}
            >
              <span className="text-[32px] sm:text-[36px] md:text-[48px] leading-[52px] tracking-[0.48px] font-[700]">
                {item.question}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-screen opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[12px] md:text-[15px] leading-[21px] mt-4 font-sans font-medium">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
