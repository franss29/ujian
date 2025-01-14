import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Features from "@/components/Features";

export default function Home() {
  return (
  <>
  <div className="top-0 px-6 py-6 z-10">
    <Header />
  </div>

  <div className="gap-12 flex flex-col max-w-7xl justify-center mx-auto p-6 items-center">
    <Hero/>
    <Features/>
    <Testimonial/>
    <Pricing/>
  </div>

  <div className="drop-shadow z-10 px-6 py-6">
    <Footer/>
  </div>
  </>
  );
}
