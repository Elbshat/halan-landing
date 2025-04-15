import { baseUrl } from "@/utils/constant";

export async function getTermsAndConditions() {
  const res = await fetch(`${baseUrl}/terms-and-conditions`, {
    next: { revalidate: 2_592_000 }, // 60 * 60 * 24 * 30
  });

  if (!res.ok) {
    throw new Error("Terms and Conditions not Found");
  }

  const { data } = await res.json();

  return data;
}

export async function getTestimonials() {
  const res = await fetch(`${baseUrl}/testimonials`, {
    next: { revalidate: 2_592_000 }, // 60 * 60 * 24 * 30
  });

  if (!res.ok) {
    throw new Error("Testimonials not Found");
  }

  const { data } = await res.json();

  return data.data.slice(0, 5);
}
