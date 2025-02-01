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
    <figure className="embla__slide embla__slide--testimonial font-poppins bg-white rounded-lg px-6 py-10">
      <div aria-hidden className="mb-6">
        <span className="inline-block w-[61px] h-[61px] rounded-full bg-[#90ACF7]"></span>
      </div>
      <figcaption className="font-medium  text-[26px] leading-9">
        {name}
      </figcaption>

      <RatingComponent rating={rating} />

      <blockquote className="mt-6 text-[#575757]">
        <p className="text-[18px] tracking-tight">{quote}</p>
      </blockquote>
    </figure>
  );
}
