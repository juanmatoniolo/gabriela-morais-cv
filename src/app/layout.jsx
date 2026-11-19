import { Suspense } from "react";
import { Geist, Source_Serif_4 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cv } from "@/lib/cv";
import { siteUrl, siteName } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const serif = Source_Serif_4({
	variable: "--font-source-serif",
	subsets: ["latin"],
	weight: ["500", "600"],
	display: "swap",
});

const title = "Gabriela Morais | Facturista de ART y Obras Sociales";
const description =
	"CV de Gabriela Vanesa Morais: administrativa especializada en facturación médica, Nomenclador Nacional (NN, PMO, NBU), CIE-10 y gestión de ART, PAMI y obras sociales.";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: { default: title, template: "%s | Gabriela Morais" },
	description,
	applicationName: siteName,
	authors: [{ name: cv.header.nombre }],
	alternates: { canonical: "/" },
	openGraph: {
		type: "profile",
		locale: "es_AR",
		url: "/",
		siteName,
		title,
		description,
		images: [{ url: "/profile.jpg", width: 800, height: 800, alt: `Foto de ${cv.header.nombre}` }],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/profile.jpg"],
	},
	icons: {
		icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }],
		apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
	},
	robots: { index: true, follow: true },
	formatDetection: { telephone: false },
};

export const viewport = {
	themeColor: "#2f6f73",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang="es-AR" className={`${geist.variable} ${serif.variable}`}>
			<body>
				<a href="#contenido" className="skip-link">
					Saltar al contenido
				</a>
				<Suspense fallback={null}>
					<Navbar />
				</Suspense>
				{children}
				<Footer />
			</body>
		</html>
	);
}
