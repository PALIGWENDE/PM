import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/**
 * Wrapper de fetch GROQ avec ISR : chaque page consommatrice est revalidée
 * toutes les 60 secondes, conformément au cahier des charges (site
 * statique/ISR, sans base de données ni auth côté Next).
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate: 60 },
  });
}
