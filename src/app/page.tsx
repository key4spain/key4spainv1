import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AdvisoryAreas from "@/components/sections/AdvisoryAreas";
import PropertySupport from "@/components/sections/PropertySupport";
import RelocationSupport from "@/components/sections/RelocationSupport";
import InvestmentSupport from "@/components/sections/InvestmentSupport";
import IntakeBriefs from "@/components/sections/IntakeBriefs";
import SpainDiscoveryTour from "@/components/sections/SpainDiscoveryTour";
import CommunicationChannels from "@/components/sections/CommunicationChannels";
import HowItWorks from "@/components/sections/HowItWorks";
import Ecosystem from "@/components/sections/Ecosystem";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdvisoryAreas />
        <PropertySupport />
        <RelocationSupport />
        <InvestmentSupport />
        <IntakeBriefs />
        <SpainDiscoveryTour />
        <CommunicationChannels />
        <HowItWorks />
        <Ecosystem />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
