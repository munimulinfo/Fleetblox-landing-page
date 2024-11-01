import Hero from "@/components/landing_sections/Hero/Index";
import Glob from "@/components/landing_sections/Connecting_Global/Index"
import Navbar from "@/components/shared/Navbar/Index";
import Footer from "@/components/shared/Footer/Index";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Glob />
      <Footer />
    </div>
  );
}