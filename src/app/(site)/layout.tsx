import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/whatsapp/FloatingWhatsAppButton";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappNumbers } from "@/lib/get-whatsapp-numbers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.fullName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.fullName,
  url: siteConfig.url,
  description: siteConfig.defaultDescription,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { pm: whatsappPm } = await getWhatsappNumbers();

  return (
    <html lang="fr" className={manrope.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Aller au contenu
        </a>
        <Header whatsappPm={whatsappPm} />
        <main id="contenu" className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer whatsappPm={whatsappPm} />
        <FloatingWhatsAppButton phone={whatsappPm} />
      </body>
    </html>
  );
}
