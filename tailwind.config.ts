import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/**
 * Design tokens PM (Pherina & Maurisson).
 *
 * Base neutre chaude (blanc cassé / gris chauds / noir doux) + deux accents :
 * - `geo`  : Génie Civil & Géotechnique (rouge, repris du logo PM)
 * - `mkt`  : Marketing Digital (bleu, complémentaire)
 *
 * Les valeurs exactes sont des placeholders alignés au mieux sur le logo
 * fourni (aucune charte graphique complète n'a été transmise) — voir
 * TODO-CLIENT.md pour la validation finale par le client.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1120px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1A18",
          soft: "#33322E",
        },
        paper: {
          DEFAULT: "#FDFCFA",
          muted: "#F7F5F1",
        },
        stone: {
          50: "#FAF9F7",
          100: "#F2F0EC",
          200: "#E6E3DC",
          300: "#D3CFC5",
          400: "#B0AA9C",
          500: "#8C8474",
          600: "#6B6456",
          700: "#524C41",
          800: "#38352E",
          900: "#211F1B",
        },
        geo: {
          DEFAULT: "#D6272B",
          50: "#FDECEC",
          100: "#FAD2D2",
          200: "#F3A5A6",
          300: "#E97879",
          400: "#DF4C4E",
          500: "#D6272B",
          600: "#B31F23",
          700: "#8F191C",
          800: "#6B1315",
          900: "#470C0E",
        },
        mkt: {
          DEFAULT: "#3366F0",
          50: "#EEF3FF",
          100: "#D9E4FF",
          200: "#B3C9FF",
          300: "#8DAEFF",
          400: "#5C88FA",
          500: "#3366F0",
          600: "#274FC2",
          700: "#1E3D97",
          800: "#162C6E",
          900: "#0F1F4D",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1DA851",
        },
        // Alias sémantiques (convention shadcn/ui), mappés sur la palette
        // PM ci-dessus — nécessaires pour que les composants copiés depuis
        // des registries shadcn (ex. tubelight-navbar) s'affichent
        // correctement sans réécrire leurs classes.
        background: "#FDFCFA",
        foreground: "#1A1A18",
        primary: "#D6272B",
        muted: "#F2F0EC",
        border: "#E6E3DC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 20px -4px rgba(26, 26, 24, 0.08)",
        card: "0 8px 30px -8px rgba(26, 26, 24, 0.12)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [typography],
};

export default config;
