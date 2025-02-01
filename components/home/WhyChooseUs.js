import Image from "next/image";

function WhyChooseUs() {
  return (
    <section id="about" className="max-w-[1368px] mx-auto px-4 space-y-10">
      <header className="space-y-4 md:flex gap-6 items-center">
        <h2 className="flex-1 text-[2.5rem] md:text-[3.5rem] md:leading-[1.4] font-bold md:tracking-tighter">
          Why Choose Us for Your
          <br />
          <span className="text-primary">Halal</span> Products?
        </h2>
        <p className=" flex-1 text-body text-xl md:text-[22px]">
          We are committed to providing the highest quality halal meats and a
          diverse range of grocery products, ensuring adherence to Islamic
          principles and delivering the exceptional quality you deserve.
        </p>
      </header>
      <div className="max-md:space-y-6 md:grid grid-cols-[repeat(auto-fit,minmax(420px,_1fr))] gap-9">
        <article className=" space-y-4 md:min-w-[420px] md:min-h-[426px] flex flex-col justify-between bg-white border border-[#fff0da] rounded-[52px] py-6 px-8 max-md:text-center">
          <div className="max-md:flex justify-center">
            <Image
              src="/industry.svg"
              alt="industry icon"
              width="128"
              height="128"
            />
          </div>

          <div className="space-y-4 md:space-y-2">
            <h3 className="text-2xl leading-[1.8] font-bold mb-4">
              Trusted Across the U.S.A
            </h3>
            <p className="text-[#575757] text-xl leading-[1.8] tracking-tighter">
              Proudly serving the Muslim community with halal products,
              reliability, and care.
            </p>
          </div>
        </article>
        <article className="space-y-4 md:min-w-[420px] md:min-h-[426px] flex flex-col justify-between bg-white shadow-2xl shadow-[#d1e6d5] rounded-[52px] py-6 px-8 max-md:text-center">
          <div className="max-md:flex justify-center">
            <Image
              src="/one.svg"
              alt="number one icon"
              width="128"
              height="128"
            />
          </div>

          <div className="md:mb-11 space-y-4 md:space-y-2">
            <h3 className="text-2xl leading-[1.8] font-bold mb-4">
              Trusted Across the U.S.A
            </h3>
            <p className="text-[#575757] text-xl leading-[1.8] tracking-tighter">
              Proudly serving the Muslim community with halal products,
              reliability, and care.
            </p>
          </div>
        </article>
        <article className="space-y-4 md:min-w-[420px] md:min-h-[426px] flex flex-col justify-between bg-white border border-[#fff0da] rounded-[52px] py-6 px-8 max-md:text-center">
          <div className="max-md:flex justify-center">
            <Image src="/cup.svg" alt="cup icon" width="128" height="128" />
          </div>

          <div className="space-y-4 md:space-y-2">
            <h3 className="text-2xl leading-[1.8] font-bold mb-4">
              Trusted Across the U.S.A
            </h3>
            <p className="text-[#575757] text-xl leading-[1.8] tracking-tighter">
              Proudly serving the Muslim community with halal products,
              reliability, and care.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default WhyChooseUs;
