import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://vanemoraiss.github.io/gabriela-morais-cv"
    : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gabriela Morais — Facturista / Administrativa en Facturación de ART y Obras Sociales",
    template: "%s · Gabriela Morais",
  },
  description:
    "CV de Gabriela Vanesa Morais. Administrativa con formación en facturación médica, Nomenclador Nacional y administración médica. Experiencia en internación domiciliaria, autorizaciones y liquidación de haberes.",
  authors: [{ name: "Gabriela Vanesa Morais" }],
  keywords: [
    "facturista", "facturación ART", "obras sociales", "Nomenclador Nacional",
    "administrativa médica", "internación domiciliaria", "liquidación de haberes",
    "facturación sanatorial", "secretariado médico",
  ],
  openGraph: {
    type: "profile",
    locale: "es_AR",
    url: baseUrl,
    siteName: "CV Gabriela Morais",
    title: "Gabriela Morais — Facturista / Administrativa",
    description:
      "Facturación de ART y Obras Sociales · Nomenclador Nacional · Internación domiciliaria · Liquidación de haberes.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gabriela Morais — Facturista / Administrativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriela Morais — Facturista / Administrativa",
    description:
      "Facturación de ART y Obras Sociales · Nomenclador Nacional · Internación domiciliaria",
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="min-h-screen bg-slate-50 text-slate-800 antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}