export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we protect your personal information and ensure your privacy on our halal food website. Our comprehensive privacy policy details data collection, usage, and security measures to keep your information safe and confidential. Trust us to handle your data responsibly.",
};
function PrivacyPolicyPage() {
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
      <article className="shadow-accordion mx-auto max-w-[1368px] space-y-4 rounded-2xl bg-white p-4 md:p-10">
        <section>
          <h2 className="font-bold">Information Collection</h2>
          <p>
            When you register or place an order on our website, we may collect
            the following information:
          </p>
          <ul className="list-disc pl-6">
            <li>Your name, address, and contact details.</li>
            <li>Order details and purchase history.</li>
            <li>Your email address when subscribing to our newsletter.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold">Use of Information</h2>
          <p>The information we collect is used for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>
              Processing and shipping your orders accurately and promptly.
            </li>
            <li>
              Enhancing the user experience on our website and providing better
              customer support.
            </li>
            <li>
              Sending promotional offers and product updates with your consent.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-bold">Data Protection</h2>
          <p>
            We implement the highest security standards to protect your
            information from unauthorized access or misuse. All financial
            transactions are encrypted using SSL (Secure Socket Layer)
            technology to ensure maximum security.
          </p>
        </section>

        <section>
          <h2 className="font-bold">Information Sharing</h2>
          <p>
            We do not sell or share your data with third parties, except for the
            necessary entities that facilitate shipping and payment services.
          </p>
        </section>

        <section>
          <h2 className="font-bold">Your Rights & Choices</h2>
          <p>You can at any time:</p>
          <ul className="list-disc pl-6">
            <li>
              Update or modify your personal information through your account on
              our website.
            </li>
            <li>Request deletion of your personal data from our system.</li>
            <li>Unsubscribe from promotional emails.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Privacy Policy Updates</h2>
          <p>
            We reserve the right to modify this privacy policy at any time. Any
            changes will be posted on this page, and we recommend reviewing it
            regularly.
          </p>
        </section>
        <section>
          <h2 className="font-bold">Contact Us</h2>
          <p>
            If you have any inquiries regarding the privacy policy or how your
            data is used, you can contact us via email at support@halanhalal.com
            or call us at 1-800-XXXXXXX.
          </p>
        </section>

        <section>
          <h2 className="font-bold">
            Last Updated: <span>&ldquo;[Today&apos;s Date]&rdquo;</span>
          </h2>
        </section>
      </article>
    </main>
  );
}

export default PrivacyPolicyPage;
