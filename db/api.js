import { baseUrl } from "@/utils/constant";

export async function getTermsAndConditions() {
  const res = await fetch(`${baseUrl}/terms-and-conditions`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Terms and Conditions not Found");
  }

  const { data } = await res.json();

  const activeTerms = data.filter((item) => item.isActive === true);

  return activeTerms;
}

export async function getPrivacyPolicy() {
  const res = await fetch(`${baseUrl}/privacy-policy`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Privacy Policy not Found");
  }

  const { data } = await res.json();
  const activePrivacyPolicy = data.filter((item) => item.isActive === true);

  return activePrivacyPolicy;
}

export async function getFAQ() {
  const res = await fetch(`${baseUrl}/faq`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Frequently Asked Questions not Found");
  }

  const { data } = await res.json();
  const activeFaq = data.filter((item) => item.isActive === true);

  return activeFaq;
}

export async function getTestimonials() {
  const res = await fetch(`${baseUrl}/testimonials`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Testimonials not Found");
  }

  const { data } = await res.json();

  return data.data;
}
