import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import logo from "../../../public/brand/logo.png";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx("inline-flex items-center gap-2", className)}
      aria-label="PM — Pherina & Maurisson, retour à l'accueil"
    >
      <Image src={logo} alt="Logo PM — Pherina & Maurisson" height={36} className="h-9 w-auto" priority />
    </Link>
  );
}
