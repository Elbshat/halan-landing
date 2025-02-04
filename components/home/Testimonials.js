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
      className="space-y-8 bg-gradient-to-b from-primary from-[27%] to-[#1B2B4A] py-6 lg:py-32 lg:pl-36"
    >
      <div className="grid w-full place-content-center gap-4 overflow-hidden lg:grid-cols-2 lg:gap-6">
        <div className="text-white max-lg:px-6 max-lg:text-center">
          <h2 className="main--heading-2 mb-4 md:mb-8">
            What Are People Saying <span className="text-alt">About</span> Us
          </h2>
          <p className="mb-8 text-xl leading-6 md:text-[22px] md:font-medium md:leading-[1.8]">
            At &quot;Hala Hala&#44;&quot; we value your satisfaction with our
            services and products. Let us share customer reviews with you.
          </p>
          <p className="hidden items-end lg:flex">
            <span className="text-2xl font-bold md:text-5xl">
              {currentSlide}
              &nbsp;
            </span>
            <span className="text-xl text-[#ccc]">/{numSlides}</span>
          </p>
          <div className="mt-6 hidden items-center gap-x-6 lg:flex">
            <button
              onClick={scrollPrev}
              className="grid h-10 w-10 place-content-center rounded-[11px] bg-primary transition-colors disabled:bg-primary/20 md:h-[61px] md:w-[61px]"
              disabled={!canScrollPrev}
              aria-label="Previous Slide"
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
              className="grid h-10 w-10 place-content-center rounded-[11px] bg-primary transition-colors disabled:bg-primary/20 md:h-[61px] md:w-[61px]"
              disabled={!canScrollNext}
              aria-label="Next Slide"
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
        <p className="flex items-end justify-center text-white md:mt-9 lg:hidden">
          <span className="text-2xl font-extrabold md:text-5xl">
            {currentSlide}
          </span>
          <span className="text-xl text-[#ccc]">/{numSlides}</span>
        </p>
        <div className="flex items-center justify-center gap-x-6 lg:hidden">
          <button
            onClick={scrollPrev}
            aria-label="Previous Slide"
            className="grid h-10 w-10 place-content-center rounded-[11px] bg-primary transition-colors disabled:bg-primary/20 md:h-[61px] md:w-[61px]"
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
            className="grid h-10 w-10 place-content-center rounded-[11px] bg-primary transition-colors disabled:bg-primary/20 md:h-[61px] md:w-[61px]"
            disabled={!canScrollNext}
            aria-label="Next Slide"
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
