"use client";

import { useEffect, useState } from "react";
import { Home, BookOpen, MessageCircle, User, Phone } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { getGeneralMessage } from "@/lib/whatsapp-messages";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { name: "Accueil", url: "/", icon: Home },
  { name: "Formations", url: "/formations", icon: BookOpen },
  { name: "Consulting", url: "/consulting", icon: MessageCircle },
  { name: "À propos", url: "/a-propos", icon: User },
  { name: "Contact", url: "/contact", icon: Phone },
];

/**
 * Barre du haut (logo + WhatsApp, toujours visible) + navigation "tubelight"
 * flottante : centrée en haut à partir de `sm`, barre d'onglets fixée en bas
 * sur mobile (voir `components/ui/tubelight-navbar.tsx`).
 */
export function Header({ whatsappPm }: { whatsappPm?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const phone = whatsappPm ?? siteConfig.whatsapp.pm;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-40 transition-shadow duration-300",
          isScrolled ? "bg-paper/90 shadow-soft backdrop-blur-md" : "bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Logo />
          {/*
            La barre "tubelight" reste en icônes seules jusqu'à `md`. En
            dessous de `md`, le bouton WhatsApp du header passe donc lui
            aussi en icône seule, pour ne pas chevaucher la barre centrée
            (sinon collision entre ~640px et 768px).
          */}
          <WhatsAppButton
            phone={phone}
            message={getGeneralMessage()}
            label="Discuter sur WhatsApp"
            variant="icon"
            className="md:hidden"
          />
          <WhatsAppButton
            phone={phone}
            message={getGeneralMessage()}
            label="Discuter sur WhatsApp"
            variant="primary"
            className="hidden text-sm md:inline-flex"
          />
        </Container>
      </header>

      <NavBar items={navItems} />
    </>
  );
}
