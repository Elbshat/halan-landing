"use client";

import useCarousel from "@/hooks/useCarousel";
import { testimonials } from "@/utils/constant";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  const {
    selectedIndex,
    canScrollNext,
    canScrollPrev,
    emblaRef,
    scrollPrev,
    scrollNext,
  } = useCarousel();

  const numSlides =
    testimonials.length > 9 ? testimonials.length : "0" + testimonials.length;

  const currentSlide =
    selectedIndex > 9 ? selectedIndex + 1 : "0" + (selectedIndex + 1);

  return (
    <section
      id="testimonial"
      className="py-6  lg:py-32 lg:pl-36 space-y-8  bg-gradient-to-b from-primary from-[27%] to-[#1B2B4A]"
    >
      <div className="grid lg:grid-cols-2 gap-6 place-content-center w-full overflow-hidden">
        <div className="text-white max-lg:text-center max-lg:px-6">
          <h2 className="mb-4 md:mb-8">
            What Are People Saying <span className="text-alt">About</span> Us
          </h2>
          <p className="text-xl leading-6 md:text-[22px] md:leading-[1.8] md:font-medium">
            At &quot;Hala Hala&#44;&quot; we value your satisfaction with our
            services and products. Let us share customer reviews with you.
          </p>
          <p className="hidden lg:flex items-end md:mt-9">
            <span className="text-2xl md:text-5xl font-extrabold">
              {currentSlide}
            </span>
            <span className="text-xl text-[#ccc] ">/{numSlides}</span>
          </p>
          <div className="hidden lg:flex items-center gap-x-6 mt-6">
            <button
              onClick={scrollPrev}
              className="bg-primary grid place-content-center w-10 h-10 md:w-[61px] md:h-[61px] rounded-[11px] transition-colors disabled:bg-primary/20"
              disabled={!canScrollPrev}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7323 5.21533L12.196 6.75164L18.2759 12.8424H5.01562V15.0216H18.2759L12.196 21.1124L13.7323 22.6487L22.449 13.932L13.7323 5.21533Z"
                  fill="white"
                />
              </svg>
              <span className="sr-only">previous</span>
            </button>
            <button
              onClick={scrollNext}
              className="bg-primary transition-colors disabled:bg-primary/20 grid place-content-center w-10 h-10 md:w-[61px] md:h-[61px] rounded-[11px]"
              disabled={!canScrollNext}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7323 5.21533L12.196 6.75164L18.2759 12.8424H5.01562V15.0216H18.2759L12.196 21.1124L13.7323 22.6487L22.449 13.932L13.7323 5.21533Z"
                  fill="white"
                />
              </svg>
              <span className="sr-only">next</span>
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <TestimonialsCarousel slides={testimonials} ref={emblaRef} />
        </div>
        <p className="flex lg:hidden items-end justify-center md:mt-9 text-white">
          <span className="text-2xl md:text-5xl font-extrabold">
            {currentSlide}
          </span>
          <span className="text-xl text-[#ccc] ">/{numSlides}</span>
        </p>
        <div className="flex lg:hidden items-center justify-center gap-x-6 mt-6">
          <button
            onClick={scrollPrev}
            className="bg-primary grid place-content-center w-10 h-10 md:w-[61px] md:h-[61px] rounded-[11px] transition-colors disabled:bg-primary/20"
            disabled={!canScrollPrev}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7323 5.21533L12.196 6.75164L18.2759 12.8424H5.01562V15.0216H18.2759L12.196 21.1124L13.7323 22.6487L22.449 13.932L13.7323 5.21533Z"
                fill="white"
              />
            </svg>
            <span className="sr-only">previous</span>
          </button>
          <button
            onClick={scrollNext}
            className="bg-primary transition-colors disabled:bg-primary/20 grid place-content-center w-10 h-10 md:w-[61px] md:h-[61px] rounded-[11px]"
            disabled={!canScrollNext}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7323 5.21533L12.196 6.75164L18.2759 12.8424H5.01562V15.0216H18.2759L12.196 21.1124L13.7323 22.6487L22.449 13.932L13.7323 5.21533Z"
                fill="white"
              />
            </svg>
            <span className="sr-only">next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
