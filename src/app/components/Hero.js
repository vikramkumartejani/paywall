import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Hero() {
  return (
    <>
      {/* Preload Fonts */}
      <Head>
        <link
          rel="preload"
          href="/fonts/FormulaCondensed-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/FormulaCondensed-Bold.woff"
          as="font"
          type="font/woff"
          crossorigin="anonymous"
        />
      </Head>

      <section className="text-white flex flex-col items-center justify-between relative max-w-[1380px] mx-auto">
        {/* Top Navigation */}
        <div className="w-full flex justify-between items-center h-[80px]">
          <img src="/Group 16.png" />
          <Link
            href="/login"
            className="bg-[#F54E26] text-white px-6 h-[36px] md:h-[45px] flex items-center justify-center gap-2 rounded-[5px] text-[20px] md:text-[24px] min-w-[128px] lg:min-w-[156px] font-bold tracking-[0.64px]"
          >
            LOGIN
            <Image
              src="/login-arrow.svg"
              alt="login-arrow"
              width={16}
              height={28}
              className="-mt-2 md:w-[16px] w-[12px]"
            />
          </Link>
        </div>

        {/* Hero Content */}
        <div className="text-center pt-[67px] md:pt-[74px]">
          <h1 className="text-[40px] md:text-[80px] tracking-[0.8px] leading-[48px] md:leading-[90px] text-[#FFF6E8] font-[700]">
            IS SOMETHING FEELING <span className="text-[#F54E26]">OFF?</span>,{" "}
            <br />
            FIND OUT WITH AI IF YOUR{" "}
            <span className="text-[#F9BF28]">PARTNER</span>, <br />
            IS <span className="text-[#F9BF28]">CHEATING.</span>
          </h1>
          <div className="mt-6">
            <div className="flex flex-col items-center justify-center">
              <span className="text-white text-[10px] font-medium roboto leading-[26px]">
                Excellent
              </span>
              <div className="flex items-center gap-1 my-2">
                <Image src="/star.svg" alt="logo" width={40} height={40} />
                <Image src="/star.svg" alt="logo" width={40} height={40} />
                <Image src="/star.svg" alt="logo" width={40} height={40} />
                <Image src="/star.svg" alt="logo" width={40} height={40} />
                <Image src="/star.svg" alt="logo" width={40} height={40} />
              </div>
              <span className="text-[11px] leading-[22px] font-light roboto">
                Based on <span className="underline font-bold roboto">405 reviews</span>
              </span>
              <Image src="/trustpilot.svg" alt="trustpilot" width={62} height={26} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
