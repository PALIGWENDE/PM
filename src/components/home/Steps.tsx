import { Reveal } from "@/components/ui/Reveal";

export type Step = { titre: string; description: string };

export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {steps.map((step, index) => (
        <Reveal key={step.titre} delay={index * 0.1}>
          <li className="h-full rounded-3xl bg-paper p-6 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper">
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">{step.titre}</h3>
            <p className="mt-2 text-sm text-stone-600">{step.description}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
