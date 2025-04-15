import BlogSection from "@/components/modules/home/BlogSection";
import FAQSection from "@/components/modules/home/FAQSection";
import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";

const SubPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SubPageLayout;
