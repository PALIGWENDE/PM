import type { Metadata } from "next";

/**
 * Root layout dédié au Studio Sanity : volontairement minimal (pas de
 * Header/Footer du site public), conformément au pattern Next.js des
 * "layouts racine multiples" par groupe de routes.
 */
export const metadata: Metadata = {
  title: "Studio — PM",
  description: "Administration du contenu PM (Pherina & Maurisson).",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
