import ParsedContent from "@/components/global/ParsedContent";
import { getPrivacyPolicy } from "@/db/api";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we protect your personal information and ensure your privacy on our halal food website. Our comprehensive privacy policy details data collection, usage, and security measures to keep your information safe and confidential. Trust us to handle your data responsibly.",
};
async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicy();
  if (!data) return notFound();

  return (
    <main className="mt-32 px-4 lg:mt-40">
      <header className="mb-6 space-y-6 text-center md:mb-20">
        <h1 className="text-2xl font-extrabold md:text-[45px] md:font-bold md:leading-[60px]">
          Privacy Policy
        </h1>

        <p className="mx-auto max-w-xl text-center text-[#333333] md:text-xl md:font-medium">
          At Halan Halal, we value your privacy and understand the importance of
          protecting your personal information. We are committed to ensuring
          that your information is used in a secure and responsible manner.
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

export default PrivacyPolicyPage;
