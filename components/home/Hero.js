import Image from "next/image";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import AppleIcon from "../icons/AppleIcon";

function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-[1368px] px-4">
      <div className="flex justify-between">
        <div className="max-w-[568px]">
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
            <div className="absolute bottom-[15%] right-0 w-1/2 sm:hidden">
              <Image
                src="/hero.png"
                width={147}
                height={160}
                alt="mobile hero contains halal products"
                className="w-full"
              />
            </div>
          </h1>
          <p className="mt-4 max-md:text-center max-md:text-[#323231] md:text-[1.375rem] md:font-medium">
            We provide fresh halal meat, poultry, fish, and a wide range of
            quality grocery products, offering a complete shopping experience
            for all your needs.
          </p>
          <div className="mx-auto mt-8 grid max-w-[80%] gap-4 md:max-w-full lg:grid-cols-2">
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center gap-x-4 whitespace-nowrap rounded-full bg-primary px-4 py-2 font-openSans text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:h-16 lg:text-2xl"
            >
              <GooglePlayIcon className="h-6 w-5 lg:h-10 lg:w-9" />
              <p className="flex h-10 flex-col">
                <span className="text-xs uppercase">get it on</span>
                <span className="font-bold lg:text-2xl lg:font-normal lg:leading-none lg:tracking-tight">
                  Google Play
                </span>
              </p>
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center gap-x-4 whitespace-nowrap rounded-full bg-primary px-4 py-2 font-openSans text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 lg:h-16 lg:text-2xl"
            >
              <AppleIcon className="h-6 w-5 lg:h-10 lg:w-9" />
              <p className="flex h-10 flex-col">
                <span className="text-xs uppercase">Download on the</span>
                <span className="font-bold lg:text-2xl lg:font-normal lg:leading-none lg:tracking-tight">
                  App Store
                </span>
              </p>
            </a>
          </div>
        </div>
        <div className="flex min-w-80 items-center justify-center max-sm:hidden">
          <Image
            src="/hero.png"
            width="598"
            height="604"
            alt="Hero image"
            priority
            className=""
          />
        </div>
      </div>

      <span className="absolute -top-10 left-[20%] h-40 w-40 rounded-full bg-primary/[24%] md:-left-10 md:-top-10"></span>
      <span className="absolute left-1/3 top-1/4 h-20 w-20 rounded-full bg-primary/[24%] max-md:hidden"></span>
      <span className="absolute right-1/3 top-1/2 -z-10 h-40 w-40 rounded-full bg-primary/[24%] max-md:hidden"></span>
    </section>
  );
}

export default Hero;
