import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FocusAreasSection from "./components/FocusAreasSection";
import RatesAndInsuranceSection from "./components/RatesAndInsuranceSection";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f3f3ea] text-[#374d51] min-h-screen font-normal">
      <Header />
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <RatesAndInsuranceSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}
