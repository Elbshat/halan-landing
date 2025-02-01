import Image from "next/image";

export default function DownloadApp() {
  return (
    <section id="downloadApp" className="max-w-[1368px] mx-auto p-4 space-y-8 ">
      <div className="flex flex-col lg:flex-row items-center p-4 bg-[rgba(64,103,176,0.25)] rounded-[30px]">
        <div className="w-full lg:w-1/2 space-y-6 text-center md:text-left">
          <h4 className="uppercase text-center text-primary text-lg font-semibold  leading-[22.4px] md:leading-[1.8] md:text-left tracking-wider">
            Download App
          </h4>
          <h3 className="text-center font-extrabold text-2xl md:text-[46px] md:leading-[60px] md:text-left md:text-[#333333]">
            Get Started With Halan Today!
          </h3>

          <p className="text-xl leading-6 text-[#333333] md:font-medium md:text-lg md:leading-[30px]">
            Discover food wherever and whenever and get your food delivered
            quickly.
          </p>

          <button className="inline-flex h-12 md:h-16 px-10 py-2 font-poppins font-medium text-lg  items-center justify-center whitespace-nowrap rounded-full transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/95 hover:shadow-md">
            Get The App
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mb-0">
          <Image
            className="w-full"
            src="/downloadAppHero.png"
            alt="App Mockup"
            width={602}
            height={520}
          />
        </div>
      </div>
    </section>
  );
}
