import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <LegalPageContent slug="politique-de-confidentialite" fallbackTitle="Politique de confidentialité" />
  );
}
