"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoIcon from "../icons/LogoIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MobileNav from "./MobileNav";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const mobileMenuClasses = `absolute top-full left-0 w-full -z-10 bg-white lg:hidden transition-transform origin-top duration-3000 ease-in-out ${
    isMobileMenuOpen ? "scale-y-1" : "scale-y-0"
  }`;

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 50));

    return () => {
      window.removeEventListener("scroll", () =>
        setScroll(window.scrollY > 50)
      );
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full h-[88px] md:h-[120px] border-b border-transparent transition ${
        scroll || isMobileMenuOpen
          ? "bg-white border-b shadow-sm"
          : "bg-background"
      }`}
    >
      <div
        className={`max-w-[1368px] mx-auto flex items-center justify-between py-6 px-4 transition
           ${isMobileMenuOpen ? "shadow-md" : ""}
        `}
      >
        <Link href="/" className="flex items-center gap-x-5">
          <LogoIcon className="w-10 h-10 md:w-[72px] md:h-[72px]" />
          <h1
            className={`font-poppins text-2xl leading-[22.4px] font-semibold ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            Halan Halal
          </h1>
        </Link>

        <nav
          aria-label="main navbar"
          className="hidden lg:flex items-center gap-4 xl:gap-6 font-openSans font-semibold leading-[1.4] text-[18px]"
        >
          <Link href="/#about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/#menu" className="hover:text-primary transition-colors">
            Menu
          </Link>
          <Link
            href="/#services"
            className="hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#howToWork"
            className="hover:text-primary transition-colors"
          >
            How To Work ?
          </Link>
          <Link
            href="/#downloadApp"
            className="hover:text-primary transition-colors"
          >
            Download App
          </Link>
        </nav>

        <Link
          href="/contactUs"
          className="hidden h-14 px-8 lg:inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-full text-xl font-medium transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/95 hover:shadow-md"
        >
          <PhoneIcon />
          <span>Contact US</span>
        </Link>

        <button
          className="inline-flex h-10 w-[76px] px-4 font-jakarta lg:hidden items-center justify-center gap-x-2 whitespace-nowrap rounded-full font-bold transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/95 hover:shadow-md"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <MobileNav className={mobileMenuClasses} />
    </header>
  );
}

export default Header;
