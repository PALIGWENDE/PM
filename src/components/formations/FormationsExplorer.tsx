"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { FormationCard } from "@/components/formations/FormationCard";
import type { Domaine, TypeFormation } from "@/types/sanity";
import type { FormationView } from "@/types/content";

const DOMAINES: (Domaine | "Tous")[] = ["Tous", "Marketing Digital", "Génie Civil", "Géotechnique"];
const TYPES: (TypeFormation | "Tous")[] = ["Tous", "Individuel", "Groupe"];

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active ? "bg-ink text-paper" : "bg-stone-100 text-stone-600 hover:bg-stone-200",
      )}
    >
      {label}
    </button>
  );
}

export function FormationsExplorer({
  formations,
  whatsappPhone,
}: {
  formations: FormationView[];
  whatsappPhone?: string;
}) {
  const [domaine, setDomaine] = useState<(typeof DOMAINES)[number]>("Tous");
  const [type, setType] = useState<(typeof TYPES)[number]>("Tous");

  const filtered = useMemo(() => {
    return formations.filter((formation) => {
      const matchDomaine = domaine === "Tous" || formation.domaine === domaine;
      const matchType = type === "Tous" || formation.types.includes(type);
      return matchDomaine && matchType;
    });
  }, [formations, domaine, type]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par domaine">
          {DOMAINES.map((d) => (
            <FilterChip key={d} label={d} active={domaine === d} onClick={() => setDomaine(d)} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par type">
          {TYPES.map((t) => (
            <FilterChip key={t} label={t} active={type === t} onClick={() => setType(t)} />
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-stone-500">
          Aucune formation ne correspond à ces filtres pour le moment.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((formation) => (
            <FormationCard key={formation.id} formation={formation} whatsappPhone={whatsappPhone} />
          ))}
        </div>
      )}
    </div>
  );
}
