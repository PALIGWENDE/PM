import { CheckCircle2 } from "lucide-react";
import type { ServiceView } from "@/types/content";
import type { Accent } from "@/lib/domaine";

const accentText: Record<Accent, string> = {
  mkt: "text-mkt-500",
  geo: "text-geo-500",
};

export function ServiceList({ services, accent }: { services: ServiceView[]; accent: Accent }) {
  if (services.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <li key={service.id} className="flex gap-3 rounded-2xl bg-paper p-5 shadow-soft">
          <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${accentText[accent]}`} aria-hidden="true" />
          <div>
            <p className="font-semibold text-ink">{service.nom}</p>
            <p className="mt-1 text-sm text-stone-600">{service.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
