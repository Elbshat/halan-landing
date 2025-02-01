import Image from "next/image";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import AppleIcon from "../icons/AppleIcon";

function Hero() {
  return (
    <section id="hero" className="relative max-w-[1368px] mx-auto px-4">
      <div className=" flex justify-between">
        <div className=" max-w-[568px]">
          <h1 className="text-[2.5rem] md:text-[3.5rem] leading-tight md:leading-[1.4] font-bold md:tracking-tighter">
            Reliable Shopping Solutions for
            <br />
            <span className="text-primary">Halal</span> Products
          </h1>
          <p className="md:text-[1.375rem] mt-4 text-body">
            We provide fresh halal meat, poultry, fish, and a wide range of
            quality grocery products, offering a complete shopping experience
            for all your needs.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <a
              href="#"
              className="inline-flex h-16 px-4 py-2 font-openSans md:font-normal md:text-2xl  items-center justify-center gap-x-4 whitespace-nowrap rounded-full font-bold transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/95 hover:shadow-md"
            >
              <GooglePlayIcon className="w-5 h-6 md:w-9 md:h-10" />
              <p className="leading-none mb-1 flex flex-col h-10">
                <span className="text-sm uppercase font-normal">get it on</span>

                <span className="leading-none">Google Play</span>
              </p>
            </a>
            <a
              href="#"
              className="inline-flex h-16 px-4 py-2 font-openSans md:font-normal md:text-2xl  items-center justify-center gap-x-4 whitespace-nowrap rounded-full font-bold transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/95 hover:shadow-md"
            >
              <AppleIcon className="w-5 h-6 md:w-9 md:h-10" />
              <p className="leading-none mb-1 flex flex-col h-10">
                <span className="text-sm uppercase font-normal">
                  Download on the
                </span>

                <span className="leading-none">App Store</span>
              </p>
            </a>
          </div>
        </div>
        <div className="  flex items-center justify-center min-w-80 max-sm:hidden">
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

      <span className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-primary/[24%]"></span>
      <span className="absolute left-1/3 top-1/4 w-20 h-20 rounded-full bg-primary/[24%]"></span>
      <span className="max-md:hidden -z-10 absolute right-1/3 top-1/2 w-40 h-40 rounded-full bg-primary/[24%]"></span>
    </section>
  );
}

export default Hero;
