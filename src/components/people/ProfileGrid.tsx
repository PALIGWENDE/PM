import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getSessionMessage } from "@/lib/whatsapp-messages";
import type { PersonView } from "@/types/content";

export function ProfileGrid({ people }: { people: PersonView[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {people.map((person) => (
        <article key={person.id} className="flex flex-col overflow-hidden rounded-3xl bg-paper shadow-card">
          <div className="relative aspect-[4/3] w-full bg-stone-100">
            <Image
              src={person.photo}
              alt={person.nom}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-semibold text-ink">{person.nom}</h3>
            {person.titre && <p className="mt-1 text-sm font-medium text-stone-500">{person.titre}</p>}

            {person.domainesExpertise && person.domainesExpertise.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {person.domainesExpertise.map((domaine) => (
                  <li
                    key={domaine}
                    className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
                  >
                    {domaine}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
              {typeof person.bio === "string" ? (
                <p>{person.bio}</p>
              ) : person.bio ? (
                <PortableText value={person.bio} />
              ) : null}
            </div>

            {person.whatsapp && (
              <WhatsAppButton
                phone={person.whatsapp}
                message={getSessionMessage(person.nom)}
                label={`Discuter avec ${person.nom}`}
                variant="secondary"
                className="mt-6 w-fit"
              />
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
