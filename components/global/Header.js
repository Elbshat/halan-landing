"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoIcon from "../icons/LogoIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MobileNav from "./MobileNav";
import useScroll from "@/hooks/useScroll";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const mobileMenuClasses = `absolute top-full duration-500 left-0 w-full -z-10 bg-white min-[840px]:hidden transition-transform ease-out rounded-b-[4rem]  ${
    isMobileMenuOpen ? "translate-y-0 " : " -translate-y-[105%]"
  }`;

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 50));

    return () => {
      window.removeEventListener("scroll", () =>
        setScroll(window.scrollY > 50),
      );
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 h-[88px] w-full border-b transition lg:h-[120px] ${
        scroll || isMobileMenuOpen
          ? "border-gray-200 bg-white shadow-header"
          : "border-transparent bg-background"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1368px] items-center justify-between px-4 py-6 transition duration-500 ${
          isMobileMenuOpen
            ? "border-gray-200 bg-white shadow-header"
            : "border-transparent bg-background"
        } ${
          scroll
            ? "border-gray-200 bg-white"
            : "border-transparent bg-background"
        } `}
      >
        <Link href="/" className="flex items-center gap-x-3 lg:gap-x-5">
          <LogoIcon className="md:h-w-12 h-10 w-10 md:w-12 lg:h-[72px] lg:w-[72px]" />
          <h1
            className={`font-bold leading-[22.4px] lg:text-2xl ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            Halan Halal
          </h1>
        </Link>

        <nav
          aria-label="main navbar"
          className="hidden items-center gap-3 font-bold leading-[1.4] text-nav min-[840px]:flex lg:gap-4 lg:text-[18px] lg:font-semibold xl:gap-6"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="transition-colors hover:text-primary"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="transition-colors hover:text-primary"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="transition-colors hover:text-primary"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("howToWork")}
            className="transition-colors hover:text-primary"
          >
            How To Work ?
          </button>
          <button
            onClick={() => scrollToSection("downloadApp")}
            className="transition-colors hover:text-primary"
          >
            Download App
          </button>
        </nav>

        <Link
          href="/contactUs"
          className="hidden h-10 items-center justify-center gap-x-2 whitespace-nowrap rounded-full bg-primary px-4 font-poppins text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:h-12 min-[840px]:inline-flex lg:h-14 lg:px-8 lg:text-xl"
        >
          <PhoneIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          <span>Contact US</span>
        </Link>

        <button
          className="inline-flex h-10 w-[76px] items-center justify-center gap-x-2 whitespace-nowrap rounded-full bg-primary px-4 font-poppins text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 min-[840px]:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <MobileNav
        className={mobileMenuClasses}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
}

export default Header;
