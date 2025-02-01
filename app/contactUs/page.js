import ContactForm from "@/components/contactUs/ContactForm";

function ContactUsPage() {
  return (
    <main className="mt-40 font-jakarta md:font-dmSans ">
      <header className=" text-center space-y-6 mb-10 md:mb-16">
        <h1 className="text-2xl font-extrabold md:text-[45px] md:leading-[60px] md:font-bold">
          Contact Us
        </h1>

        <p className="text-[#323231] md:text-[#333333] md:text-xl md:font-medium">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </header>
      <div className="bg-map relative z-10">
        <div className="absolute top-0 left-0 w-full h-full map__overlay -z-10"></div>

        <div>
          <section className="max-w-[800px] mx-auto mb-6 p-4 space-y-4 ">
            <ContactForm />
          </section>

          <section className="max-w-[800px] mx-auto p-4">
            <ul className="flex flex-col md:flex-row justify-between gap-4">
              <li className="w-full text-center md:text-left font-bold space-y-4">
                <h3 className="text-xl leading-[26px] text-[#2c2f24]">
                  Call Us:
                </h3>
                <p className="text-2xl text-[#ad343e] leading-[30px] tracking-tight">
                  +1-234-567-8900
                </p>
              </li>
              <li className="w-full text-center md:text-left font-bold space-y-4">
                <h3 className="text-xl leading-[26px] text-[#2c2f24]">
                  Hours:
                </h3>
                <p className="font-normal text-lg leading-[28px]">
                  Mon-Fri: 11am - 8pm Sat,
                  <br /> Sun: 9am - 10pm
                </p>
              </li>
              <li className="w-full text-center md:text-left font-bold space-y-4">
                <h3 className="text-xl leading-[26px] text-[#2c2f24]">
                  Our Location:
                </h3>
                <p className="font-normal text-lg leading-[28px]">
                  123 Bridge Street Nowhere Land,
                  <br /> LA 12345 United States
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ContactUsPage;
