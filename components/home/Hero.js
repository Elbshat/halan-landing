import Image from "next/image";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import AppleIcon from "../icons/AppleIcon";
import DownloadButton from "../global/DownloadButton";
import MobileHero from "./HeroMobileImage";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-[1368px] px-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 lg:max-w-[50%]">
          <h1 className="main--heading-1 max-sm:hidden">
            Reliable Shopping Solutions for
            <br />
            <span className="text-primary">Halal</span> Products
          </h1>
          <h1 className="main--heading-1 relative sm:hidden">
            Reliable
            <br /> Shopping <br />
            Solutions
            <br /> for
            <br />
            <span className="text-primary">Halal</span> Products
            <div className="absolute bottom-[15%] right-0 -z-10 w-1/2 object-cover sm:hidden">
              <MobileHero />
            </div>
          </h1>
          <p
            itemProp="description"
            role="contentinfo"
            aria-label="Important information"
            className="mt-4 text-center text-mob-p md:text-left md:text-[1.375rem] md:font-medium md:text-black"
          >
            We provide fresh halal meat, poultry, fish, and a wide range of
            quality grocery products, offering a complete shopping experience
            for all your needs.
          </p>
          <div className="mx-auto mt-8 grid max-w-[80%] gap-4 md:max-w-full lg:grid-cols-2">
            <DownloadButton
              href="#"
              icon={GooglePlayIcon}
              label="get it on"
              store="Google Play"
            />
            <DownloadButton
              href="#"
              icon={AppleIcon}
              label="Download on the"
              store="App Store"
            />
          </div>
        </div>
        <div className="hidden flex-1 items-center justify-center sm:flex lg:max-w-[40%]">
          <HeroImage />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute -top-5 left-[20%] h-24 w-24 rounded-full bg-primary/[24%] md:-left-10 md:top-8 md:h-40 md:w-40"
      ></span>

      <span
        aria-hidden="true"
        className="absolute left-1/3 top-1/4 h-20 w-20 rounded-full bg-primary/[24%] max-md:hidden"
      ></span>
      <span
        aria-hidden="true"
        className="absolute right-1/3 top-1/2 -z-10 h-40 w-40 rounded-full bg-primary/[24%] max-md:hidden"
      ></span>
    </section>
  );
}

export default Hero;
