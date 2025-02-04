import ContactForm from "@/components/contactUs/ContactForm";

export const metadata = {
  title: "Contact | Halan Halal",
  description:
    "Get in touch with Halan Halal. We are here to answer your questions and provide you with the best halal food service. Contact us today!",
};
function ContactUsPage() {
  return (
    <main className="mt-32 font-jakarta md:font-dmSans lg:mt-40">
      <header className="mb-10 space-y-6 px-4 text-center md:mb-16">
        <h1 className="text-2xl font-extrabold md:text-[45px] md:font-bold md:leading-[60px]">
          Contact Us
        </h1>

        <p className="text-[#323231] md:text-xl md:font-medium md:text-[#333333]">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </header>
      <div className="relative z-10 bg-map">
        <div className="map__overlay absolute left-0 top-0 -z-10 h-full w-full"></div>

        <div>
          <section className="mx-auto mb-6 max-w-[800px] space-y-4 p-4">
            <ContactForm />
          </section>

          <section className="mx-auto max-w-[800px] p-4">
            <ul className="flex flex-col justify-between gap-4 md:flex-row">
              <li className="w-full space-y-4 text-center font-bold md:text-left">
                <h3 className="text-xl leading-[26px] text-[#2c2f24]">
                  Call Us:
                </h3>
                <p className="text-2xl leading-[30px] tracking-tight text-[#ad343e]">
                  +1-234-567-8900
                </p>
              </li>
              <li className="w-full space-y-4 text-center font-bold md:text-left">
                <h3 className="text-xl leading-[26px] text-[#2c2f24]">
                  Hours:
                </h3>
                <p className="text-lg font-normal leading-[28px]">
                  Mon-Fri: 11am - 8pm Sat,
                  <br /> Sun: 9am - 10pm
                </p>
              </li>
              <li className="w-full space-y-4 text-center font-bold md:text-left">
                <h3 className="text-xl leading-[26px] text-[#2c2f24]">
                  Our Location:
                </h3>
                <p className="text-lg font-normal leading-[28px]">
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
