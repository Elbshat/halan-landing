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
            className="h-4 w-4 rotate-180 lg:h-9 lg:w-9"
            viewBox="0 0 17 30"
          >
            <path
              d="M0.724609 28.6148C0.349609 28.2398 0.162109 27.7958 0.162109 27.2828C0.162109 26.7698 0.349609 26.3263 0.724609 25.9523L11.7121 14.9648L0.687109 3.93984C0.337109 3.58984 0.162109 3.15234 0.162109 2.62734C0.162109 2.10234 0.349609 1.65234 0.724609 1.27734C1.09961 0.902344 1.54361 0.714844 2.05661 0.714844C2.56961 0.714844 3.01311 0.902344 3.38711 1.27734L15.9871 13.9148C16.1371 14.0648 16.2436 14.2273 16.3066 14.4023C16.3696 14.5773 16.4006 14.7648 16.3996 14.9648C16.3996 15.1648 16.3681 15.3523 16.3051 15.5273C16.2421 15.7023 16.1361 15.8648 15.9871 16.0148L3.34961 28.6523C2.99961 29.0023 2.56811 29.1773 2.05511 29.1773C1.54211 29.1773 1.09861 28.9898 0.724609 28.6148Z"
              fill="white"
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
            className="h-4 w-4 lg:h-9 lg:w-9"
            viewBox="0 0 17 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.724609 28.6148C0.349609 28.2398 0.162109 27.7958 0.162109 27.2828C0.162109 26.7698 0.349609 26.3263 0.724609 25.9523L11.7121 14.9648L0.687109 3.93984C0.337109 3.58984 0.162109 3.15234 0.162109 2.62734C0.162109 2.10234 0.349609 1.65234 0.724609 1.27734C1.09961 0.902344 1.54361 0.714844 2.05661 0.714844C2.56961 0.714844 3.01311 0.902344 3.38711 1.27734L15.9871 13.9148C16.1371 14.0648 16.2436 14.2273 16.3066 14.4023C16.3696 14.5773 16.4006 14.7648 16.3996 14.9648C16.3996 15.1648 16.3681 15.3523 16.3051 15.5273C16.2421 15.7023 16.1361 15.8648 15.9871 16.0148L3.34961 28.6523C2.99961 29.0023 2.56811 29.1773 2.05511 29.1773C1.54211 29.1773 1.09861 28.9898 0.724609 28.6148Z"
              fill="white"
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
