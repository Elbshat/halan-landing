"use client";

import Image from "next/image";
import OffIcon from "../icons/OffIcon";
import { menuItems } from "@/utils/constant";
import useCarousel from "@/hooks/useCarousel";
export default function MenuCarousel() {
  const { canScrollNext, canScrollPrev, emblaRef, scrollPrev, scrollNext } =
    useCarousel();

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              label={item.label}
              price={item.price}
              discount={item.discount}
              src={item.src}
            />
          ))}
        </div>
      </div>

      {canScrollPrev && (
        <button
          className="embla__prev absolute left-6 top-1/2 grid h-10 w-10 -translate-y-1/2 place-content-center rounded-full bg-black/70 text-white lg:h-[3.75rem] lg:w-[3.75rem]"
          onClick={() => scrollPrev()}
          aria-label="Previous slide"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rotate-180 lg:h-9 lg:w-9"
            viewBox="0 0 36 37"
          >
            <path
              fill="#fff"
              d="M10.725 32.615a1.82 1.82 0 0 1-.563-1.332c0-.513.188-.957.563-1.33l10.987-10.988L10.687 7.94c-.35-.35-.525-.788-.525-1.313 0-.525.188-.975.563-1.35a1.82 1.82 0 0 1 1.332-.562c.513 0 .956.187 1.33.562l12.6 12.638c.15.15.257.312.32.487s.094.363.093.563c0 .2-.032.387-.095.562a1.332 1.332 0 0 1-.318.488L13.35 32.652c-.35.35-.782.525-1.295.525-.513 0-.956-.187-1.33-.562Z"
            />
          </svg>
        </button>
      )}

      {canScrollNext && (
        <button
          className="embla__next absolute right-6 top-1/2 grid h-10 w-10 -translate-y-1/2 place-content-center rounded-full bg-black/70 text-white lg:h-[3.75rem] lg:w-[3.75rem]"
          onClick={() => scrollNext()}
          aria-label="Next Slide"
        >
          <svg
            className="h-5 w-5 lg:h-9 lg:w-9"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="M10.725 32.615a1.82 1.82 0 0 1-.563-1.332c0-.513.188-.957.563-1.33l10.987-10.988L10.687 7.94c-.35-.35-.525-.788-.525-1.313 0-.525.188-.975.563-1.35a1.82 1.82 0 0 1 1.332-.562c.513 0 .956.187 1.33.562l12.6 12.638c.15.15.257.312.32.487s.094.363.093.563c0 .2-.032.387-.095.562a1.332 1.332 0 0 1-.318.488L13.35 32.652c-.35.35-.782.525-1.295.525-.513 0-.956-.187-1.33-.562Z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

function MenuItem({ src, label, price, discount }) {
  return (
    <figure className="embla__slide embla__slide--menu overflow-hidden rounded-lg">
      <Image src={src} width="305" height="360" alt={label} loading="lazy" />
      <figcaption className="absolute bottom-0 z-10 flex w-full items-center justify-between p-6 text-white">
        <h3 className="font-nunito text-xl leading-[1]">
          {label.toUpperCase()}
          <br />
          <br /> <span className="text-2xl">{`$ ${price}`}</span>
        </h3>
        <OffIcon amount={discount} />
      </figcaption>
    </figure>
  );
}
