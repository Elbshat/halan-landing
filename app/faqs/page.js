import Accordion from "@/components/faqs/Accordion";
import { accordionItems } from "@/utils/constant";

function FAQsPage() {
  return (
    <main className="mt-40 font-jakarta md:font-dmSans">
      <header className=" text-center space-y-6 mb-6 md:mb-20">
        <h1 className="text-2xl font-extrabold md:text-[45px] md:leading-[60px] md:font-bold">
          Questions Looks Here
        </h1>

        <p className="text-[#323231] md:text-[#333333] md:text-xl md:font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
      </header>
      <Accordion items={accordionItems} />
    </main>
  );
}

export default FAQsPage;
