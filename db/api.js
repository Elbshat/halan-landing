const baseUrl = "https://halanhalal.com/api/v1";
export async function getTermsAndConditions() {
  const res = await fetch(`${baseUrl}/terms-and-conditions`);

  if (!res.ok) {
    throw new Error("Terms and Conditions not Found");
  }

  const { data } = await res.json();

  return data;
}
