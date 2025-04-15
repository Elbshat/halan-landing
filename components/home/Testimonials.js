import { getTestimonials } from "@/db/api";
import TestimonialsView from "./TestimonialsView";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return <TestimonialsView testimonials={testimonials} />;
}
