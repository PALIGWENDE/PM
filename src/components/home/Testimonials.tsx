import { AnimatedTestimonials } from "@/components/ui/testimonial-v2";
import type { TemoignageView } from "@/types/content";

export function Testimonials({ temoignages }: { temoignages: TemoignageView[] }) {
  return <AnimatedTestimonials temoignages={temoignages} />;
}
