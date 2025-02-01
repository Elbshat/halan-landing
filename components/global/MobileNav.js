import Link from "next/link";

import PhoneIcon from "../icons/PhoneIcon";

function MobileNav({ className }) {
  return (
    <div className={className}>
      <div className="mx-8 font-jakarta font-bold min-h-screen">
        <nav
          className="flex flex-col space-y-6 my-10"
          aria-label="mobile navbar"
        >
          <Link href="/#About" className="hover:text-primary transition-colors">
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

        <div className="max-w-[296px] mx-auto grid">
          <Link
            href="/contactUs"
            className="h-14 px-8 inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-full text-xl font-medium transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/95 hover:shadow-md"
          >
            <PhoneIcon />
            <span>Contact US</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
