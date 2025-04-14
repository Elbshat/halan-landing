"use server";
import { baseUrl } from "@/utils/constant";

export async function submitContactForm(formData) {
  const payload = {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    source: "web",
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const res = await fetch(`${baseUrl}/contact`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to submit",
      };
    }

    const data = await res.json();

    return {
      success: true,
      message: data.message,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Failed to submit form",
    };
  }
}
