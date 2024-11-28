import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F54E26] py-12 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
            {/* Logo */}
            <div className="mb-8 md:mb-0">
              <img src="/footer-logo.png" className="mt-6 text-black" />{" "}
            </div>

            {/* Navigation Links */}
            <nav className="flex items-start gap-4 text-[19px] font-semibold">
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:underline">
                  Buy credits
                </a>
                <a href="#" className="hover:underline">
                  How it works
                </a>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </div>
              <a
                href="#"
                className=" text-[#1C1C1C80]/50 px-3 py-1 rounded-md flex items-center gap-4 "
              >
                Subscriptions
                <span className="bg-[#841F06] text-xs px-3 py-2.5 rounded-[4px] text-[#F44D26] uppercase">
                  Coming Soon
                </span>
              </a>
            </nav>
          </div>
          <div className="flex flex-col justify-center md:justify-start">
            <div>
              <button className="bg-[#1B1B1B] font-[700] p-3 mb-8 text-[#FFCCDE] uppercase min-w-[115px]">
                PRESS
              </button>
            </div>
            <div>
              <p className="text-[19px] font-[700] text-center">Featured In</p>
              <div className="flex items-start gap-2">
                <img src="/featured-1.svg" />
                <img src="/featured-2.svg" />
                <img src="/featured-3.svg" />
                <img src="/featured-4.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-0 items-center md:items-start">
          {/* Left Bottom Section */}
          <div>
            <p className="text-[30px] leading-[33px] font-[700]">
              BUILT WITH LOVE WITH AI
            </p>
            <p className="text-[#841F06] text-[30px] leading-[33px] font-[700]">
              CHEATING LIVE COUNT: 23,341
            </p>
            <div className="flex items-center justify-center md:justify-start gap-5 text-[17px] mt-8">
              <p>Terms</p>
              <p>Refund</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* Right Bottom Section */}
          <div className="flex flex-col justify-start gap-8">
            {/* Featured In */}
            <div className="text-start md:text-left">
              <p className="font-bold">Email : support@unfaithful.ai</p>
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
