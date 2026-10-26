import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const baseUrl = process.env.NODE_ENV === "production"
  ? "https://gabriela-morais-cv.vercel.app"
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gabriela Morais — Facturista / Administrativa en Facturación de ART y Obras Sociales",
    template: "%s · Gabriela Morais",
  },
  description:
    "CV de Gabriela Vanesa Morais. Administrativa especializada en facturación médica, Nomenclador Nacional (NN, PMO) y gestión de ART y obras sociales.",
  authors: [{ name: "Gabriela Vanesa Morais" }],
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
        // Usamos la URL absoluta para que WhatsApp no falle
        url: `${baseUrl}/profile.jpg`,
        width: 800,
        height: 800,
        alt: "Gabriela Morais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriela Morais — Facturista / Administrativa",
    description:
      "Facturación de ART y Obras Sociales · Nomenclador Nacional · Internación domiciliaria",
    images: [`${baseUrl}/profile.jpg`],
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