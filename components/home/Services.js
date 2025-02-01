import Image from "next/image";
import TwentyFourHourIcon from "../icons/TwentyFourHourIcon";

export default function Services() {
  return (
    <section id="services" className="max-w-[1368px] mx-auto px-4 py-12">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 flex flex-col md:flex-row items-center">
          <Image
            src="/services.png"
            width={622}
            height={615}
            alt="service section hero"
          />
        </div>

        <div className="flex-1 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="mb-4 md:mb-6">
            Always ready to serve you with{" "}
            <span className="text-primary capitalize">best</span>
          </h2>
          <p className="section-paragraph mb-8 md:mb-12">
            Always Here To Serve You With The Best Halal Meat. Enjoy Fresh And
            Nutritious Meat Delivered Right To Your Doorstep, And Elevate Your
            Health With Every Bite, Hassle-Free.
          </p>
          <ul className="max-w-xl flex flex-col items-center md:flex-row max-md:gap-y-4  md:justify-between ">
            <li className="flex items-center space-x-3">
              <Image
                src="/onlineOrder.png"
                alt="Online Order Icon"
                width={34}
                height={34}
              />
              <span className="text-xl lg:text-[27px] lg:leading-[1.8] tracking-tight text-[#191919] font-bold lg:font-medium">
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
              <span className="text-xl lg:text-[27px] leading-[1.8] tracking-tight text-[#191919] font-bold lg:font-medium">
                24/7 Service
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
