import HeroSection from "@/components/modules/home/HeroSection";
import FleetSolution from "@/components/modules/home/FleetSolution";
import VirtualSlot from "@/components/modules/home/withVirtualSlot/VirtualSlot";
// import FleetBloxVerseSection from "@/components/modules/home/FleetBloxVerseSection";
import ConnectRemotelySection from "@/components/modules/home/ConnectRemotelySection";
import WorkforceManageSection from "@/components/modules/home/WorkforceManageSection";
import AiSupportSection from "@/components/modules/home/AiSupportSection";
import GlobalCoverageAndCompatibility from "@/components/modules/home/GlobalCoverageAndCompatibility";
import SlideShowSection from "@/components/modules/home/SlideShowSection";
import BlogSection from "@/components/modules/home/BlogSection";
import FAQSection from "@/components/modules/home/FAQSection";
import Navbar from "@/components/ui/shared/Navbar";
import Footer from "@/components/ui/shared/Footer";
import FleetBloxVerseSection from "@/components/modules/home/fleetBloxVersus/FleetBloxVerseSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FleetSolution />
      <VirtualSlot />
      {/* <FleetBloxVerseSection /> */}
      <ConnectRemotelySection />
      <WorkforceManageSection />
      <AiSupportSection />
      <GlobalCoverageAndCompatibility />
      <SlideShowSection />
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default page;
