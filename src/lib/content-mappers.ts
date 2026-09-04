import { urlForImage } from "../../sanity/lib/image";
import type { Faq, Formation, Person, Service } from "@/types/sanity";
import type { FaqView, FormationView, PersonView, ServiceView } from "@/types/content";

export function toFormationView(formation: Formation): FormationView {
  return {
    id: formation._id,
    slug: formation.slug,
    nom: formation.nom,
    domaine: formation.domaine,
    niveau: formation.niveau,
    format: formation.format,
    types: formation.types,
    descriptionCourte: formation.descriptionCourte,
    presentation: formation.presentation,
    publicCible: formation.publicCible,
    objectifs: formation.objectifs,
    programme: formation.programme,
    duree: formation.duree,
    tarif: formation.tarif,
    imageUrl: formation.image ? urlForImage(formation.image).width(800).height(600).url() : undefined,
    imageAlt: formation.image?.alt,
  };
}

export function toServiceView(service: Service): ServiceView {
  return {
    id: service._id,
    nom: service.nom,
    categorie: service.categorie,
    description: service.description,
  };
}

export function toPersonView(person: Person): PersonView {
  return {
    id: person._id,
    nom: person.nom,
    titre: person.titre,
    bio: person.bio,
    domainesExpertise: person.domainesExpertise,
    photo: person.photo ? urlForImage(person.photo).width(600).height(600).url() : "",
    whatsapp: person.whatsapp,
  };
}

export function toFaqView(faq: Faq): FaqView {
  return { id: faq._id, question: faq.question, reponse: faq.reponse };
}
