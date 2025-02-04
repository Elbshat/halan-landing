import MenuCarousel from "./MenuCarousel";

export default function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-[1368px] space-y-8 px-4">
      <header>
        <h3 className="text-center text-xl font-medium leading-8 text-primary md:font-normal md:leading-[1.8] md:tracking-tighter">
          Our Menu
        </h3>
        <h2 className="main--heading-2 text-center">Most Popular Items</h2>
      </header>

      <MenuCarousel />
    </section>
  );
}
