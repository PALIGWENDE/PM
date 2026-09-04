import type { Metadata } from "next";
import { LegalPageContent } from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return <LegalPageContent slug="mentions-legales" fallbackTitle="Mentions légales" />;
}
