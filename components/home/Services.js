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
            alt="service section hero"
          />
          <div className="absolute -left-4 bottom-0 -z-10 h-1/2 w-full rounded-full bg-primary/40 blur-[270px]"></div>
        </div>

        <div className="mt-8 flex-1 text-center md:ml-8 md:mt-0 md:text-left">
          <h2 className="main--heading-2 mb-4 md:mb-6">
            Always ready to serve you with{" "}
            <span className="capitalize text-primary">best</span>
          </h2>
          <p className="section-paragraph mb-8 md:mb-12">
            Always Here To Serve You With The Best Halal Meat. Enjoy Fresh And
            Nutritious Meat Delivered Right To Your Doorstep, And Elevate Your
            Health With Every Bite, Hassle-Free.
          </p>
          <ul className="flex max-w-xl flex-col items-center max-md:gap-y-4 md:flex-row md:justify-between">
            <li className="flex items-center space-x-3">
              <Image
                src="/onlineOrder.png"
                alt="Online Order Icon"
                width={34}
                height={34}
              />
              <span className="text-xl font-bold tracking-tight text-[#191919] lg:text-[27px] lg:font-medium lg:leading-[1.8]">
                Online Order
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Image
                src="/twentyFourHours.png"
                alt="24/7 Service Icon"
                width={34}
                height={34}
              />
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
