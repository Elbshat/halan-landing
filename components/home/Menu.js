import MenuCarousel from "./MenuCarousel";

export default function Menu() {
  return (
    <section id="menu" className="max-w-[1368px] mx-auto px-4 space-y-8">
      <header>
        <h3 className="text-center text-primary text-xl font-medium md:font-normal leading-8 md:leading-[1.8] md:tracking-tighter">
          Our Menu
        </h3>
        <h2 className="text-center text-2xl md:text-[3.5rem] md:leading-[1.4] font-bold md:tracking-tighter">
          Most Popular Items
        </h2>
      </header>

      <MenuCarousel />
    </section>
  );
}
