import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FAQs from "./components/FAQs";
import Review from "./components/Review";
import Search from "./components/Search";
import Telegram from "./components/Telegram";
import Cheater from "./components/Cheater";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="lg:px-8 px-4">
        <Hero />
        <p className="text-center text-3xl roboto py-[200px] text-white uppercase">Working on it</p>
        <Cheater />
        <Telegram />
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
