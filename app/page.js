import DownloadApp from "@/components/home/DownloadApp";
import Hero from "@/components/home/Hero";
import HowToWork from "@/components/home/HowToWork";
import Menu from "@/components/home/Menu";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="mt-40  space-y-24 font-jakarta md:font-dmSans">
      <Hero />

      <WhyChooseUs />

      <Menu />

      <Services />

      <HowToWork />

      <Testimonials />

      <DownloadApp />
    </main>
  );
}
