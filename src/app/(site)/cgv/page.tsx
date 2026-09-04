import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  robots: { index: false, follow: true },
};

export default function CgvPage() {
  return <LegalPageContent slug="cgv" fallbackTitle="Conditions Générales de Vente" />;
}
