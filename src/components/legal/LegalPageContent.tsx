import { PortableText } from "@portabletext/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getLegalPage } from "../../../sanity/lib/queries";

export async function LegalPageContent({ slug, fallbackTitle }: { slug: string; fallbackTitle: string }) {
  const page = await getLegalPage(slug);

  return (
    <Section className="pt-8 md:pt-12">
      <Container>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-ink md:text-5xl">
          {page?.titre ?? fallbackTitle}
        </h1>

        <div className="prose prose-stone mt-8 max-w-prose">
          {page?.contenu ? (
            <PortableText value={page.contenu} />
          ) : (
            <p>
              [PLACEHOLDER] Ce contenu doit être rédigé avec un professionnel du droit avant la
              mise en ligne du site, puis publié depuis le Studio Sanity (type de contenu
              « Page légale »).
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
