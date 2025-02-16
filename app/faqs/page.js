import Accordion from "@/components/faqs/Accordion";
import { accordionItems } from "@/utils/constant";

export const metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about Halan Halal's products and services. Learn more about our commitment to providing high-quality halal food.",
};
function FAQsPage() {
  return (
    <main className="mt-32 px-4 lg:mt-40">
      <header className="mb-6 space-y-6 text-center md:mb-20">
        <h1 className="text-2xl font-extrabold md:text-[45px] md:font-bold md:leading-[60px]">
          Questions Looks Here
        </h1>

        <p className="mx-auto max-w-xl text-[#333333] md:text-xl md:font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
      </header>
      <Accordion items={accordionItems} />
    </main>
  );
}

export default FAQsPage;
