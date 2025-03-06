import Image from "next/image";
import logo from "../../public/images/logo.png";
export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#020124] opacity-70"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <Image src={logo} alt="Logo" className="mb-8" />
        <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-roboto">
          {`We're Coming Soon...`}
        </h1>
        <p className=" text-base md:text-lg lg:text-3xl font-roboto w-[55%] leading-normal">
          Our Website is Under Construction. {`We're`} working hard to improve
          your experience. Please be patient and stay with us for exciting
          updates! <br />
          Thank you for your understanding
        </p>

        <footer className="absolute bottom-6 w-full text-center">
          <p className="text-base opacity-85">© 2024 llamamind</p>
        </footer>
      </div>
    </div>
  );
}
