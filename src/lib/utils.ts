import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind en résolvant les conflits (ex. deux
 * `px-*` différents) — utilitaire standard des composants shadcn.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
