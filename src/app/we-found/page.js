import Image from 'next/image';
import React from 'react';

const WeFound = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-8 w-full flex items-start"><Image src='/Group 16.png' alt='logo' width={99} height={38} /></div>

      {/* Title */}
      <h1 className="text-center text-[36px] font-bold leading-[42px] mb-4 text-[#FFF6E8]">
        What we  found for <br /> Denis
      </h1>

      {/* Expiry Time */}
      <div className="text-[13px] tracking-[0.64px] text-white mb-4 flex items-center justify-between w-full max-w-[341px]">
        <h2> REPORT WILL EXPIRE SOON</h2>
        <h2>5:00</h2>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {Array(6)
          .fill('')
          .map((_, index) => (
            <div>
              <Image src='/profile-card.svg' alt='profile' width={109} height={112} />
            </div>
          ))}
      </div>

      {/* Similar Profiles */}
        <div className='mt-5 text-[13px] leading-[15px] tracking-[-1px] flex items-center justify-center gap-2'>
          <p>+</p>
          <div className="flex items-center justify-center text-center min-w-[34px] min-h-[34px] max-w-[34px] max-h-[34px] rounded-full bg-[#FFD07D]">
            <span className="text-black gotham-rounded tracking-[-1px] font-bold text-[13px] ">250</span>
          </div>
          <p className=' uppercase gotham-rounded font-bold text-[13px]'>similar profiles found</p>
        </div>

      {/* Unlock Section */}
      <div className="mt-5 py-3.5 text-center bg-[#DB4126] rounded-md max-w-[341px] w-full">
        <button className="w-full text-white rounded-lg text-[24px] leading-[24px] font-bold">
          Unlock the full result
        </button>
        <p className="text-[13px] leading-[24px] font-bold -mt-0.5">
          ✅ Unlock 1 current search and access all the profiles
        </p>
      </div>

      <h2 className='text-center text-[10px] font-medium leading-[26px] roboto'>Excellent</h2>

      {/* Ratings */}
      <div className="mt-2 flex items-center flex-col gap-2 text-center justify-center w-full">
        <Image src='/rating-image.svg' alt='rating' width={215} height={41} />
        <span className="text-[11px] leading-[22px] font-light roboto">
          Based on <span className="underline font-bold roboto">405 reviews</span>
        </span>
        <Image src="/trustpilot.svg" alt="trustpilot" width={62} height={26} />
      </div>
    </div>
  );
};

export default WeFound;
