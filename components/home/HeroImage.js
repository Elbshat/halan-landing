import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative">
      <Image
        src="/mainHero.png"
        width="598"
        height="604"
        alt="Hero image"
        priority
      />

      <span aria-hidden="true" className="absolute left-8 top-10 size-20">
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
        className="absolute bottom-8 left-3 z-10 flex items-center justify-between gap-2 rounded-full bg-white px-5 py-3 shadow-light"
      >
        <span className="flex size-10">
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
        <p className="font-nunito text-lg font-bold leading-none text-[#323232]">
          order
          <br /> complete
        </p>
      </span>

      <span className="absolute bottom-0 right-0 size-56">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 261 284"
          fill="none"
          style={{ width: "100%" }}
        >
          <path
            stroke="#B8B2B2"
            strokeDasharray="6 6"
            strokeWidth={3}
            d="M55.164 248.136c106.252-25.274 66.267-107.555 12.566-98.698-102.5 16.906-21.881 105.271 81.059 38.651 59.87-38.745 56.343-82.147 56.343-82.147"
          />
          <g clipPath="url(#a)">
            <path
              fill="#B8B2B2"
              d="M219.205 44.102a2.497 2.497 0 0 1 3.657.22c.292.354.481.783.545 1.238l5.804 41.138a2.5 2.5 0 0 1-3.103 2.77l-11.326-2.937-1.159 4.09c-.613 2.163-3.536 2.507-4.634.543l-4.009-7.175-17.383-4.506a2.5 2.5 0 0 1-1.097-4.229l32.705-31.152Zm.635 11.971-9.4 24.168 13.296 3.448-3.896-27.616Zm-5.017-.891-21.62 20.589 12.362 3.202 9.256-23.795.002.004Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                d="m170.703 61.081 52.38-29.258 29.263 52.371-52.38 29.258z"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
}

export default HeroImage;
