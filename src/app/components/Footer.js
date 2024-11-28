import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F54E26] py-10 sm:pt-[80px] sm:pb-[80px] md:pb-[195px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between pb-8">
          <div className="flex flex-col md:flex-row gap-2 md:gap-16 lg:gap-24 items-start">
            {/* Logo */}
            <div className="mb-8 md:mb-0">
              <img src="/footer-logo.png" className="mt-6 text-black" />{" "}
            </div>

            {/* Navigation Links */}
            <nav className="flex items-start text-[16px] md:text-[19px] font-semibold">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:underline text-[#1C1C1C] font-sans font-medium leading-[18.28px] transition duration-300">
                    Buy credits
                  </a>
                  <a
                    href="#"
                    className=" text-[#1C1C1C80]/50 text-[16px] md:text-[18.44px] leading-[32px] font-sans font-medium"
                  >
                    Subscriptions
                  </a>
                  <div className="bg-[#841F06] h-[30px] w-[91.36px] rounded-sm flex items-center justify-center">
                    <h3 className="text-[#F44D26] text-[16px] md:text-[18.9px] leading-[20.83px] tracking-[0.19px]">Coming Soon</h3>
                  </div>
                </div>
                <a href="#" className="hover:underline h-[30px] text-[#1C1C1C] font-sans font-medium leading-[18.28px] transition duration-300">
                  How it works
                </a>
                <a href="#" className="hover:underline h-[30px] text-[#1C1C1C] font-sans font-medium leading-[18.28px] transition duration-300">
                  FAQ
                </a>
                <a href="#" className="hover:underline h-[30px] text-[#1C1C1C] font-sans font-medium leading-[18.28px] transition duration-300">
                  Login
                </a>
              </div>

            </nav>

          </div>
          <div className="flex flex-col justify-center md:justify-start">
            <div>
              <button className="bg-[#1B1B1B] h-[54px] flex items-center justify-center gap-2 mb-8 text-[#FFCCDE] text-[24px] leading-[26.4px] tracking-[0.24px] font-bold rounded uppercase min-w-full md:min-w-[115px]">
                PRESS <Image src='/arrow-four.svg' alt="arrow" width={24} height={24} className="-mt-1" />
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-[19px] font-bold text-center text-[#1C1C1C] tracking-[0.19px] leading-[20.83px] mb-2">Featured In</p>
              <div className="flex items-start gap-2">
                <img src="/featured-1.svg" />
                <img src="/featured-2.svg" />
                <img src="/featured-3.svg" />
                <img src="/featured-4.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#D2421E] pt-8 flex flex-col md:flex-row justify-between mt-6 md:mt-0 items-center md:items-start">
          {/* Left Bottom Section */}
          <div className="text-center md:text-left">
            <p className="text-[30px] leading-[33px] font-bold tracking-[0.24px] text-[#1C1C1C]">
              BUILT WITH LOVE WITH AI
            </p>
            <p className="text-[#841F06] text-[30px] leading-[33px] font-bold tracking-[0.24px]">
              CHEATING LIVE COUNT: 23,341
            </p>
            <div className="flex items-center justify-center md:justify-start gap-5 text-[16.17px] mt-8 text-[#101828] font-medium">
              <p className="font-sans">Terms</p>
              <p className="font-sans">Refund</p>
              <p className="font-sans">Privacy Policy</p>
            </div>
          </div>

          {/* Right Bottom Section */}
          <div className="flex flex-col justify-start gap-3 mt-4 md:mt-0">
            {/* Featured In */}
            <div className="text-start md:text-left">
              <p className="font-medium text-[#1C1C1C] text-[14.25px] font-sans">Email : support@unfaithful.ai</p>
            </div>
            <div>
              <img src="/instagram.svg" className="hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
