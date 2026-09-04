import { type ElementType, type ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/**
 * Largeur de lecture centrée, avec le padding horizontal défini par le
 * conteneur Tailwind (voir `tailwind.config.ts`).
 */
export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return <Tag className={clsx("container", className)}>{children}</Tag>;
}
