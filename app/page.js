import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import WhatMakesUnique from "./components/WhatMakesUnique";
import CoreAreas from "./components/CoreAreas";
import EmpoweringChange from "./components/EmpoweringChange";
import LatestInsights from "./components/LatestInsights";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhoWeAre />
        <WhatMakesUnique />
        <CoreAreas />
        <EmpoweringChange />
        <LatestInsights />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
