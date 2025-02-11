import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1368px] px-4 py-12">
      <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="relative flex flex-1 flex-col items-center md:flex-row">
          <Image
            src="/services.png"
            width={622}
            height={615}
            alt="Mobile app contains halal products and services"
            loading="lazy"
          />
          <div className="absolute -left-4 bottom-0 -z-10 h-1/2 w-full rounded-full bg-primary/40 blur-[270px]"></div>
        </div>

        <div className="mt-8 flex-1 text-center md:ml-8 md:mt-0 md:text-left">
          <h2 className="main--heading-2 mb-4 md:mb-6">
            Always ready to serve you with{" "}
            <span className="capitalize text-primary">best</span>
          </h2>
          <p
            itemProp="description"
            role="contentinfo"
            aria-label="Important sammary"
            className="section-paragraph mb-8 md:mb-12"
          >
            Always Here To Serve You With The Best Halal Meat. Enjoy Fresh And
            Nutritious Meat Delivered Right To Your Doorstep, And Elevate Your
            Health With Every Bite, Hassle-Free.
          </p>
          <ul className="mx-auto flex max-w-xl flex-wrap items-center justify-between max-md:gap-4 md:flex-row md:justify-between">
            <li className="mx-auto flex items-center space-x-3">
              <div>
                <Image
                  src="/orderOnline.svg"
                  alt="Online Order Icon"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#191919] lg:text-[27px] lg:font-medium lg:leading-[1.8]">
                Online Order
              </span>
            </li>
            <li className="mx-auto flex items-center space-x-3">
              <div>
                <Image
                  src="/twentyFourHours.svg"
                  alt="24/7 Service Icon"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xl font-bold leading-[1.8] tracking-tight text-[#191919] lg:text-[27px] lg:font-medium">
                24/7 Service
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
