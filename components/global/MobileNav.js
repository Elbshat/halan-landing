import Link from "next/link";

import PhoneIcon from "../icons/PhoneIcon";

function MobileNav({ className, setIsMobileMenuOpen }) {
  return (
    <div className={className}>
      <div className="mx-8 mb-16 font-bold">
        <nav
          className="my-10 flex flex-col space-y-6"
          aria-label="mobile navbar"
        >
          <Link href="/#about" className="transition-colors hover:text-primary">
            <span onClick={() => setIsMobileMenuOpen(false)}>About Us</span>
          </Link>
          <Link href="/#menu" className="transition-colors hover:text-primary">
            <span onClick={() => setIsMobileMenuOpen(false)}>Menu</span>
          </Link>
          <Link
            href="/#services"
            className="transition-colors hover:text-primary"
          >
            <span onClick={() => setIsMobileMenuOpen(false)}>Services</span>
          </Link>
          <Link
            href="/#howToWork"
            className="transition-colors hover:text-primary"
          >
            <span onClick={() => setIsMobileMenuOpen(false)}>How to Work?</span>
          </Link>
          <Link
            href="/#downloadApp"
            className="transition-colors hover:text-primary"
          >
            <span onClick={() => setIsMobileMenuOpen(false)}>Download App</span>
          </Link>
        </nav>

        <div className="mx-auto grid max-w-[296px]">
          <Link
            href="/contactUs"
            className="focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 font-medium text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 md:h-12 lg:h-14 lg:px-8 lg:text-xl"
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
