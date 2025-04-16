import ParsedContent from "@/components/global/ParsedContent";
import { getTermsAndConditions } from "@/db/api";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "At Halan Halal, we uphold transparency and fairness, outlining clear guidelines for a secure and seamless user experience.",
};
async function TermsAndConditionsPage() {
  const data = await getTermsAndConditions();
  if (!data) return notFound();

  return (
    <main className="mt-32 px-4 lg:mt-40">
      <header className="mb-6 space-y-6 text-center md:mb-20">
        <h1 className="text-2xl font-extrabold md:text-[45px] md:font-bold md:leading-[60px]">
          Terms & Conditions
        </h1>

        <p className="mx-auto max-w-xl text-center text-[#333333] md:text-xl md:font-medium">
          At Halan Halal, we uphold transparency and fairness, outlining clear
          guidelines for a secure and seamless user experience.
        </p>
      </header>
      <article className="mx-auto max-w-[1368px] space-y-4 rounded-2xl bg-white p-4 shadow-accordion md:p-10">
        {data?.map((item) => (
          <section key={item._id}>
            <ParsedContent className="font-bold" htmlContent={item.name.en} />
            <ParsedContent htmlContent={item.description.en} />
          </section>
        ))}
      </article>
    </main>
  );
}

export default TermsAndConditionsPage;
