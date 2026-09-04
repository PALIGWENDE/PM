"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  BookOpen,
  MessageCircle,
  ArrowUpRight,
  GraduationCap,
  Clock,
  Laptop,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getFormationMessage, getGeneralMessage } from "@/lib/whatsapp-messages";
import { siteConfig } from "@/lib/site-config";
import pherinaPhoto from "../../../public/images/team/pherina-horizontal.png";
import maurissonPhoto from "../../../public/images/team/maurisson-horizontal.jpeg";

const dockLinks = [
  { href: "/", label: "Accueil", Icon: Home },
  { href: "/formations", label: "Formations", Icon: BookOpen },
  { href: "/consulting", label: "Consulting", Icon: MessageCircle },
];

/**
 * Hero de l'accueil — grande carte "device frame" en glassmorphism, inspirée
 * d'une maquette fournie par le client. Le dock d'icônes et les pastilles de
 * la barre du haut sont de vrais liens (pas de décoration factice) ; la
 * navigation principale accessible reste le header du site, au-dessus.
 *
 * Sur mobile, les cartes flottantes repassent dans le flux normal (empilées)
 * au lieu d'être positionnées en absolu, pour rester mobile-first.
 */
export function Hero({ phone }: { phone?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const whatsappPhone = phone ?? siteConfig.whatsapp.pm;

  return (
    <div className="pb-24 pt-6 md:pb-32 md:pt-10">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] bg-ink shadow-card md:rounded-[2.5rem]"
        >
          {/*
            Calque de fond isolé : lui seul est `overflow-hidden`, pour que les
            cartes flottantes plus bas puissent déborder du cadre (comme sur la
            maquette de référence) sans être rognées avec le dégradé.
          */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-stone-900" />
            <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-geo-500/40 blur-3xl" />
            <div className="absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-mkt-500/30 blur-3xl" />
          </div>

          {/* Dock d'icônes — vrais liens, visible à partir de lg. */}
          <nav
            aria-label="Accès rapide"
            className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full bg-white/10 p-2 backdrop-blur-md lg:flex"
          >
            {dockLinks.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="relative z-10 flex flex-col px-5 pb-8 pt-5 sm:px-8 md:px-10 md:pb-10 md:pt-8 lg:px-12 lg:pb-56">
            {/* Barre du haut, façon pilule */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/formations"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Formations
              </Link>

              <div className="hidden items-center gap-2 md:flex">
                <Link
                  href="/expertises/marketing-digital"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  Marketing Digital
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/expertises/genie-civil-geotechnique"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  Génie Civil &amp; Géotechnique
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <Link
                href="/consulting"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Consulting
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Titre géant en surimpression */}
            <div className="mt-14 max-w-2xl md:mt-20 lg:pl-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                PM — Pherina &amp; Maurisson
              </p>
              <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                Deux expertises,
                <br />
                une seule marque.
              </h1>
              <p className="mt-6 max-w-md text-balance text-white/70">
                [PLACEHOLDER] Phrase d&apos;accroche du Hero — à remplacer par le
                texte exact fourni par le client.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton
                  phone={whatsappPhone}
                  message={getGeneralMessage()}
                  label="Discuter sur WhatsApp"
                  variant="primary"
                />
                <Link
                  href="/formations"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-medium text-white transition-colors hover:border-white/50"
                >
                  Voir les formations
                </Link>
              </div>
            </div>

            {/*
              Cartes flottantes : empilées sur mobile (flux normal), puis en
              overlap absolu sur lg+, ancrées sur le grand cadre (parent
              `relative` le plus proche) pour déborder sous son bord inférieur.
            */}
            <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-0 lg:grid-cols-2 lg:gap-0">
              <div className="rounded-3xl bg-white/95 p-6 shadow-card backdrop-blur-md lg:absolute lg:-bottom-16 lg:left-16 lg:w-80">
                <h2 className="text-lg font-semibold text-ink">
                  Un accompagnement sur-mesure
                </h2>
                <p className="mt-2 text-sm text-stone-600">
                  Formations et consulting pensés pour particuliers et
                  professionnels, dans deux domaines complémentaires.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <Image
                      src={pherinaPhoto}
                      alt="Pherina"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src={maurissonPhoto}
                      alt="Maurisson"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold leading-none text-ink">
                      2 experts
                      <span className="text-geo-500">.</span>
                    </p>
                    <p className="text-xs text-stone-500">Pherina &amp; Maurisson</p>
                  </div>
                  <Link
                    href="/a-propos"
                    aria-label="Découvrir Pherina et Maurisson"
                    className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl bg-white/95 p-6 shadow-card backdrop-blur-md lg:absolute lg:-bottom-24 lg:right-16 lg:w-80">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full bg-mkt-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-mkt-700">
                      Marketing Digital
                    </span>
                    <h2 className="mt-2 text-base font-semibold text-ink">
                      Fondamentaux du Marketing Digital
                    </h2>
                  </div>
                  {/* Badge de marque, en attente d'une déclinaison du logo pour fond sombre. */}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-geo-500 text-sm font-bold text-white">
                    PM
                  </span>
                </div>

                <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                    <dt className="sr-only">Niveau</dt>
                    <dd>Débutant</dd>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <dt className="sr-only">Durée</dt>
                    <dd>4 semaines</dd>
                  </div>
                  <div className="flex items-center gap-1">
                    <Laptop className="h-3.5 w-3.5" aria-hidden="true" />
                    <dt className="sr-only">Format</dt>
                    <dd>En ligne</dd>
                  </div>
                </dl>

                <div className="mt-4 flex items-center justify-between">
                  <WhatsAppButton
                    phone={whatsappPhone}
                    message={getFormationMessage("Fondamentaux du Marketing Digital")}
                    label="Je suis intéressé(e)"
                    variant="secondary"
                    className="border-stone-200 px-4 py-2 text-xs"
                  />
                  <Link
                    href="/formations"
                    className="inline-flex items-center gap-1 text-xs font-medium text-ink hover:text-geo-500"
                  >
                    Voir le programme
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
