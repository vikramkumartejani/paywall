"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaLock, FaFire } from 'react-icons/fa'

export default function ProceedThePayment() {
  const [selectedCredit, setSelectedCredit] = useState("1")

  const creditOptions = [
    {
      value: "1",
      credits: 1,
      originalPrice: 19.99,
      price: 16.99,
      searches: 1,
      locations: 1,
    },
    {
      value: "2",
      credits: 2,
      originalPrice: 35.96,
      price: 25.99,
      searches: 2,
      locations: 2,
      popular: true,
    },
    {
      value: "5",
      credits: 5,
      originalPrice: 93.97,
      price: 49.99,
      searches: 5,
      locations: 5,
    },
  ]

  return (
    <div className=" bg-[#1C1C1C] text-white flex flex-col items-center px-4 pt-5 pb-10">
     <div className="flex items-start w-full">
         {/* Logo */}
      <img
        src="/Group 16.png"
        alt="Logo"
        className="h-8 mb-12"
      />

     </div>
      {/* Main Content */}
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-[36px] leading-[36px] font-bold tracking-[0.64px]">
            WE FOUND <br/> SOME PROFILE THAT <br/> MIGHT BE A MATCH
          </h1>
          <p className="text-white uppercase font-bold  mx-auto mt-2 text-[16px] leading-[16px] max-w-[297px] gotham-rounded">
            YOU CURRENTLY HAVE 0 CREDIT TO UNLOCK THE RESULT
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-bold mb-4 text-[13px] uppercase text-white tracking-[0.64px] gotham-rounded mt-10">
            Select Credits
          </h2>

          <div className="space-y-4">
            {creditOptions.map((option) => (
              <div
                key={option.value}
                className='relative rounded-lg bg-[#393939] p-4 transition-colors cursor-pointer'
                onClick={() => setSelectedCredit(option.value)}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                  {selectedCredit === option.value && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <label
                  htmlFor={`credit-${option.value}`}
                  className="flex items-center justify-between cursor-pointer pl-8"
                >
                  <div className="">
                    <div className="font-bold text-xl">
                      {option.credits} CREDIT{option.credits > 1 ? "S" : ""} — 
                      <span className="text-white text-[18px] sm:text-[20px] line-through ml-2 tracking-[0.64px]">
                        ${option.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-[10px] sm:text-[12px] font-bold leading-[19px] text-white gotham-rounded">
                      {option.searches} search in {option.locations} location
                      {option.locations > 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div className="text-[24px] leading-[19px] font-bold tracking-[0.64px]">${option.price.toFixed(2)}</div>
                    <div className="text-[6px] sm:text-[10px] text-[#391951] bg-[#EDECFB] px-2 py-1 font-bold rounded-full mt-1 whitespace-nowrap gotham-rounded">
                      PROMOTION EXPIRES IN 6 HOURS
                    </div>
                  </div>
                </label>
                {option.popular && (
                  <div className="text-[#DB4126] text-xs ml-7 sm:mt-2 uppercase tracking-[0.64px] font-bold">
                   🔥 MOST POPULAR 
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Link href='/my-account' 
          className="w-full h-14 gap-4 text-[24px] bg-[#DB4126] hover:bg-[#c13820] text-white rounded-lg mt-8 flex items-center justify-center transition-colors duration-200"
          onClick={() => console.log(`Selected ${selectedCredit} credits`)}
        >
          Proceed the payment
          <FaLock className="mr-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

