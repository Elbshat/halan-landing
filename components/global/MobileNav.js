"use client";
import Link from "next/link";

import PhoneIcon from "../icons/PhoneIcon";
import useScroll from "@/hooks/useScroll";

function MobileNav({ className, setIsMobileMenuOpen }) {
  const { scrollToSection } = useScroll();

  const handleClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };
  return (
    <div className={className}>
      <div className="mx-8 mb-16">
        <nav
          className="my-10 flex flex-col items-start space-y-6 font-bold"
          aria-label="mobile navbar"
        >
          <button
            onClick={() => handleClick("about")}
            className="transition-colors hover:text-primary"
          >
            About Us
          </button>
          <button
            onClick={() => handleClick("menu")}
            className="transition-colors hover:text-primary"
          >
            Menu
          </button>
          <button
            onClick={() => handleClick("services")}
            className="transition-colors hover:text-primary"
          >
            Services
          </button>
          <button
            onClick={() => handleClick("howToWork")}
            className="transition-colors hover:text-primary"
          >
            How to Work?
          </button>
          <button
            onClick={() => handleClick("downloadApp")}
            className="transition-colors hover:text-primary"
          >
            Download App
          </button>
        </nav>

        <div className="mx-auto grid max-w-[296px]">
          <Link
            href="/contactUs"
            className="focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 font-poppins text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:h-12 lg:h-14 lg:px-8 lg:text-xl"
          >
            <span
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-x-2"
            >
              <PhoneIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              Contact US
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
