import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import logo from "../../../public/brand/logo.png";

type LogoProps = {
  className?: string;
  /**
   * "mark" affiche le logo image fourni (fond blanc) — à réserver aux
   * arrière-plans clairs. "wordmark" est une version texte, utilisable sur
   * fond sombre (ex. footer) en attendant une déclinaison du logo en blanc.
   */
  variant?: "mark" | "wordmark";
};

export function Logo({ className, variant = "mark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx("inline-flex items-center gap-2", className)}
      aria-label="PM — Pherina & Maurisson, retour à l'accueil"
    >
      {variant === "mark" ? (
        <Image src={logo} alt="Logo PM — Pherina & Maurisson" height={36} className="h-9 w-auto" priority />
      ) : (
        <span className="text-xl font-bold tracking-tight">
          PM<span className="text-geo-400">.</span>
        </span>
      )}
    </Link>
  );
}
