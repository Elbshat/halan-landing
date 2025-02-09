import Image from "next/image";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import AppleIcon from "../icons/AppleIcon";
import DownloadButton from "../global/DownloadButton";

function HeroTest() {
  return (
    <section id="hero" className="relative mx-auto max-w-[1368px] px-4">
      <div className="flex flex-col justify-between gap-y-6 sm:flex-row">
        <div className="max-w-[568px] flex-1">
          <h1 className="main--heading-1">
            Reliable Shopping Solutions for
            <br />
            <span className="text-primary">Halal</span> Products
          </h1>
          {/* <h1 className="main--heading-1 relative sm:hidden">
            Reliable
            <br /> Shopping <br />
            Solutions
            <br /> for
            <br />
            <span className="text-primary">Halal</span> Products
            <div className="absolute bottom-[15%] right-0 w-1/2 sm:hidden">
              <Image
                src="/hero.webp"
                width={147}
                height={160}
                alt="mobile hero contains halal products"
                className="w-full"
              />
            </div>
          </h1> */}
          <p className="mt-4 text-center text-[#323231] md:text-left md:text-[1.375rem] md:font-medium md:text-black">
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
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/1.jpg"
            width="598"
            height="604"
            alt="Illustration of halal products representing our reliable shopping solutions"
            priority
            layout="responsive"
          />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute -top-5 left-[20%] h-24 w-24 rounded-full bg-primary/[24%] md:-left-10 md:-top-10 md:h-40 md:w-40"
      ></span>
      <span
        aria-hidden="true"
        className="absolute left-1/3 top-1/4 h-20 w-20 rounded-full bg-primary/[24%] max-md:hidden"
      ></span>
    </section>
  );
}

export default HeroTest;
