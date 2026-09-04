import { type ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "muted";
};

/**
 * Rythme vertical commun à toutes les sections de page.
 * `tone="muted"` alterne un fond légèrement teinté pour scander la page
 * sans jamais casser la base neutre chaude.
 */
export function Section({ id, children, className, tone = "paper" }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-24",
        tone === "muted" ? "bg-paper-muted" : "bg-paper",
        className,
      )}
    >
      {children}
    </section>
  );
}
