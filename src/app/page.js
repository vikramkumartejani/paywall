"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FAQs from "./components/FAQs";
import Review from "./components/Review";
import Search from "./components/Search";
import Telegram from "./components/Telegram";
import Cheater from "./components/Cheater";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Track if the component has mounted on the client
  const searchRef = useRef(null);
  const triggerRef = useRef(null);

  // Ensure hydration happens only after component mounts on the client
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return; // Skip the logic if the component hasn't mounted yet

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only update sticky state when crossing the threshold
        if (entry.isIntersecting) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      },
      {
        // Observe when the trigger point is about to leave/enter the viewport
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasMounted]);

  return (
    <div className="bg-[#1C1C1C] overflow-hidden">
      <div className="w-full">
        <Hero />

        {/* Slider */}
        <div className="pb-32 md:pb-40 pt-20">
          <div
            style={{ transform: "rotate(8deg)", transformOrigin: "center" }}
            className="bg-[#D9D9D936] py-3 md:py-0 md:h-[121px] w-[120%] ms-[-20px] overflow-hidden flex items-center"
          >
            <div className="flex items-center w-full animate-marquee">
              <div className="flex items-center whitespace-nowrap px-4">
                <h1 className="uppercase tracking-[0.64px] text-[32px] md:text-[60px] font-bold leading-[70.4px]">
                  let's fight together the cheaters, liar, manipulator.
                </h1>
              </div>
              <div className="flex items-center whitespace-nowrap px-4">
                <h1 className="uppercase tracking-[0.64px] text-[32px] md:text-[60px] font-bold leading-[70.4px]">
                  let's fight together the cheaters, liar, manipulator.
                </h1>
              </div>
              <div className="flex items-center whitespace-nowrap px-4">
                <h1 className="uppercase tracking-[0.64px] text-[32px] md:text-[60px] font-bold leading-[70.4px]">
                  let's fight together the cheaters, liar, manipulator.
                </h1>
              </div>
            </div>
          </div>

          {/* Trigger point for intersection observer */}
          <div ref={triggerRef} className="h-1 w-full" />

          {/* Search Section */}
          <div
            ref={searchRef}
            className={`bg-[#F54E26] w-full px-5 py-8 md:py-6 -mt-8 md:-mt-28 flex items-center flex-wrap justify-center gap-5 transition-all duration-300 ${
              isSticky
                ? "fixed bottom-0 left-0 right-0 mt-0 z-50 shadow-lg"
                : "relative z-40"
            }`}
          >
            <h2 className="text-[36px] md:text-[60px] md:leading-[70.4px] font-bold tracking-[0.64px] uppercase text-white">
              Who is the liar?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
              <input
                type="text"
                placeholder="Enter the first name here"
                className="px-5 bg-[#FCFCFC] placeholder:text-black placeholder:text-[16px] leading-[70px] tracking-[0.64px] gotham-rounded font-medium outline-none h-[51px] md:h-[72px] w-[276px] rounded-lg -mt-2"
              />
              <h2 className="text-white text-[16px] md:text-[24px] text-nowrap md:leading-[70px] tracking-[0.64px] font-bold flex items-center gap-2 uppercase">
                Search now
                <img
                  src="/white-arrow.svg"
                  className="-mt-1 md:block hidden"
                  alt="white-arrow"
                  width={17}
                  height={16}
                />
              </h2>
            </div>
          </div>

          {/* Spacer to prevent content jump when search becomes fixed */}
          {isSticky && (
            <div className="h-[143px] md:h-[180px] w-full" aria-hidden="true" />
          )}
        </div>

        <div className="lg:px-8 px-4">
          <Cheater />
          <Telegram />
        </div>
      </div>

      <Review />
      <div className="lg:px-8 px-4">
        <FAQs />
        <Search />
      </div>
      <Footer />
    </div>
  );
}
