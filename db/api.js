import { baseUrl } from "@/utils/constant";

export async function getTermsAndConditions() {
  const res = await fetch(`${baseUrl}/terms-and-conditions`);

  if (!res.ok) {
    throw new Error("Terms and Conditions not Found");
  }

  const { data } = await res.json();

  return data;
}
