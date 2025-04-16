"use client";
import Image from "next/image";
import RatingComponent from "../global/RatingComponent";
import ParsedContent from "../global/ParsedContent";

export default function TestimonialsCarousel({ slides, ref }) {
  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={ref}>
        <div className="embla__container mx-6">
          {slides.map((item, i) => (
            <TestimonialItem
              key={i}
              name={item.fullName}
              rating={item.rating}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialItem({ image, name, description, rating }) {
  return (
    <figure className="embla__slide embla__slide--testimonial rounded-lg bg-white px-6 py-4 font-poppins lg:py-10">
      <div aria-hidden className="mb-4 lg:mb-6">
        {image && (
          <Image
            src={image}
            alt="customer image"
            width={61}
            height={61}
            className="rounded-full ring-2 ring-[#90acf7]"
          />
        )}
      </div>
      <figcaption className="text-[26px] font-medium leading-9">
        {name}
      </figcaption>

      <RatingComponent rating={rating.toString()} />

      <blockquote className="mt-4 text-[#575757] lg:mt-6">
        <div className="max-h-80 overflow-y-auto text-[18px] tracking-tight">
          <ParsedContent htmlContent={description} />
        </div>
      </blockquote>
    </figure>
  );
}
