"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

/**
 * Monte le Studio Sanity sur toutes les routes sous /studio (catch-all),
 * comme recommandé par next-sanity.
 */
export default function StudioPage() {
  return <NextStudio config={config} />;
}
