import Link from "next/link";
import { ContactUs } from "./component/ContactUs";
import { FAQ } from "./component/Faq";
import { Footer } from "./component/Footer";
import { LearnCrypto } from "./component/LearnCrypto";
import { MarketTable } from "./component/MarketTable";
import { NavBar } from "./component/NavBar";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <NavBar />
      <div className="px-4">
        <Hero/>
        <MarketTable />
      </div>
      <LearnCrypto />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="text-center text-white mt-16">
      <h2 className="text-[#00FFA0] text-6xl font-bold">
        Secure & Intuitive <br /> Crypto Trading
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
        Trade using CryptoDive Exchange. Swap assets with 0% commission. <br/>Best exchange for your daily use.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <Link href={"/markets"} className="px-8 py-3 bg-[#00FFA0] text-black font-bold rounded-full hover:bg-green-300">
          Get Started
        </Link>
        <Link href={"/trade/SOL_USDC"} className="px-8 py-3 border border-green-400 text-green-400 font-bold rounded-full hover:bg-green-400 hover:text-black">
          Start Trading
        </Link>
      </div>
    </section>
  );
};
