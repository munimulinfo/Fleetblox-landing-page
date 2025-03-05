import AiSupportSection from "@/components/modules/home/AiSupportSection";
import BlogSection from "@/components/modules/home/BlogSection";
import ConnectRemotelySection from "@/components/modules/home/ConnectRemotelySection";
import WorkforceManageSection from "@/components/modules/home/WorkforceManageSection";
import FAQSection from "@/components/modules/home/FAQSection";
import FleetSolution from "@/components/modules/home/FleetSolution";
import GlobalCoverageAndCompatibility from "@/components/modules/home/GlobalCoverageAndCompatibility";
import HeroSection from "@/components/modules/home/HeroSection";
import SlideShowSection from "@/components/modules/home/SlideShowSection";
import VirtualSlot from "@/components/modules/home/withVirtualSlot/VirtualSlot";
import FleetBloxVerseSection from "@/components/modules/home/fleetBloxVersus/FleetBloxVerseSection";
// import FleetBloxVerseSection from "@/components/modules/home/FleetBloxVerseSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FleetSolution />
      <VirtualSlot />
      <FleetBloxVerseSection />
      <ConnectRemotelySection />
      <WorkforceManageSection />
      <AiSupportSection />
      <GlobalCoverageAndCompatibility />
      <SlideShowSection />
      <BlogSection />
      <FAQSection />
    </div>
  );
}
