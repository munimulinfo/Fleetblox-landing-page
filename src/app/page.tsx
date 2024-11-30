import Hero from "@/components/landing_sections/Hero/Index";
import Glob from "@/components/landing_sections/Connecting_Global/Index"
import Navbar from "@/components/shared/Navbar/Index";
import Footer from "@/components/shared/Footer/Index";
import Deal from "@/components/landing_sections/Deal/Index";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Glob />
      <Deal />
      <Footer />
    </div>
  );
}