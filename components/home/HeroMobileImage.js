import Image from "next/image";

function HeroMobileImage() {
  return (
    <div className="relative">
      <Image
        src="/mobHero.png"
        width={598}
        height={604}
        quality={85}
        alt="mobile hero contains halal products"
        className="w-full"
      />

      <span aria-hidden="true" className="absolute left-8 top-10 size-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31 31"
          fill="none"
          style={{ width: "100%" }}
        >
          <g clipPath="url(#a)">
            <rect
              width={24}
              height={24}
              y={8.209}
              fill="#FFA900"
              rx={4}
              transform="rotate(-20 0 8.209)"
            />
            <g clipPath="url(#b)">
              <path
                fill="#fff"
                d="M17.66 21.645A6.667 6.667 0 1 1 13.1 9.116a6.667 6.667 0 0 1 4.56 12.53Zm-.455-1.253a5.333 5.333 0 1 0-3.649-10.023 5.333 5.333 0 0 0 3.649 10.023Zm-1.198-5.24 2.506-.911.456 1.252-3.759 1.368-1.596-4.385 1.253-.456 1.14 3.133Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <rect
                width={24}
                height={24}
                y={8.209}
                fill="#fff"
                rx={4}
                transform="rotate(-20 0 8.209)"
              />
            </clipPath>
            <clipPath id="b">
              <path
                fill="#fff"
                d="m5.127 10.6 15.035-5.473 5.472 15.035L10.6 25.634z"
              />
            </clipPath>
          </defs>
        </svg>
      </span>

      <span
        aria-hidden="true"
        className="shadow-light absolute -left-6 bottom-2 flex items-center justify-between gap-2 rounded-full bg-white px-2 py-1"
      >
        <span className="flex h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            style={{ width: "100%" }}
          >
            <rect width={24} height={24} fill="#4067B0" rx={12} />
            <path
              fill="#fff"
              d="m10 14.78-2.313-2.313a.665.665 0 0 0-.94.94l2.787 2.786c.26.26.68.26.94 0l7.053-7.053a.664.664 0 1 0-.94-.94l-6.586 6.58Z"
            />
          </svg>
        </span>
        <p className="text-sm font-normal text-[#323232]">order complete</p>
      </span>
    </div>
  );
}

export default HeroMobileImage;
