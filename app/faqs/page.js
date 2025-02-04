import Accordion from "@/components/faqs/Accordion";
import { accordionItems } from "@/utils/constant";

export const metadata = {
  title: "FAQ | Halan Halal",
  description:
    "Find answers to common questions about Halan Halal's products and services. Learn more about our commitment to providing high-quality halal food.",
};
function FAQsPage() {
  return (
    <main className="mt-32 px-4 font-jakarta md:font-dmSans lg:mt-40">
      <header className="mb-6 space-y-6 text-center md:mb-20">
        <h1 className="text-2xl font-extrabold md:text-[45px] md:font-bold md:leading-[60px]">
          Questions Looks Here
        </h1>

        <p className="text-[#323231] md:text-xl md:font-medium md:text-[#333333]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
      </header>
      <Accordion items={accordionItems} />
    </main>
  );
}

export default FAQsPage;
