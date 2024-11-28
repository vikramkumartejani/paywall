import Image from "next/image";
import React from "react";

const Telegram = () => {
  return (
    <div className=" mt-[100px] md:mt-[304px] text-white flex flex-col items-center justify-center max-w-[1200px] mx-auto">
      {/* Left Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-20 md:gap-12">
        {/* Left Content */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-[40px] md:text-[64px] leading-[45px] md:leading-[70px] font-bold tracking-[0.64px] text-[#FFF6E8]">
            SEARCH ANYONE! <br />
            INSTANT RESULTS, <br />
            <span className="text-[#D0D5FF] tracking-[0.64px]">
              VARIOUS DATING <br /> APPS DATABASES.
            </span>
          </h1>
          <div className="relative mt-[50px] flex items-center">
            <img src="/bumble.svg" />
            <img src="/tinder.svg" className="absolute top-0 left-14" />
            <img src="/hinge.svg" className="absolute top-0 left-[108px]" />
          </div>
        </div>

        {/* Right Content */}
        <div className="sm:w-1/2 p-6 rounded-lg text-left ">
          <div className="relative w-[170px] -ml-4">
            <Image src='/wtf.svg' alt="wtf" width={123} height={102} />
            <img src="/palm.svg" className=" absolute top-8 -right-2" />
          </div>
          <p className="mt-5 md:mt-2 text-[#A7A9BE] text-[15px] leading-[28px] gotham-rounded max-w-[513px]">
            Our Mission is putting an End to Cheating and Betrayal. We are
            dedicated to restoring trust and protecting values in relationships.
            With the power of AI, we've built a revolutionary tool to uncover
            dishonesty and expose unfaithful behavior. 
          </p>
          <p className=" text-[#A7A9BE] text-[15px] leading-[28px] gotham-rounded max-w-[513px]">No one deserves to have
            their trust abused or their time wasted by deceit. Thanks to
            advanced artificial intelligence, you can now gain clarity and
            discover if your partner is being unfaithful. Together, we can stand
            against dishonesty and create a world where trust thrives.</p>
          {/* Telegram Link */}
          <div className="mt-6 ">
            <a
              href="#"
              className="text-[#FFCCDE] font-bold text-[32px] md:text-[36px] leading-[40px] tracking-[0.24px]"
            >
              <p className="flex items-center gap-2">JOIN OUR SUPPORT <Image src='/arrow-two.svg' alt="arrow" width={24} height={24} /></p>
              <p className="hover:underline">TELEGRAM GROUP</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telegram;
