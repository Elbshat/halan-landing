"use client";
import RatingComponent from "../global/RatingComponent";

export default function TestimonialsCarousel({ slides, ref }) {
  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={ref}>
        <div className="embla__container mx-6">
          {slides.map((item, i) => (
            <TestimonialItem
              key={i}
              name={item.name}
              rating={item.rating}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialItem({ name, quote, rating }) {
  return (
    <figure className="embla__slide embla__slide--testimonial rounded-lg bg-white px-6 py-4 font-poppins lg:py-10">
      <div aria-hidden className="mb-4 lg:mb-6">
        <span className="inline-block h-[61px] w-[61px] rounded-full bg-[#90ACF7]"></span>
      </div>
      <figcaption className="text-[26px] font-medium leading-9">
        {name}
      </figcaption>

      <RatingComponent rating={rating} />

      <blockquote className="mt-4 text-[#575757] lg:mt-6">
        <p className="text-[18px] tracking-tight">{quote}</p>
      </blockquote>
    </figure>
  );
}
