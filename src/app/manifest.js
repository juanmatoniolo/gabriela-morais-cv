export default function manifest() {
	return {
		name: "Gabriela Morais | CV",
		short_name: "G. Morais",
		description: "CV online de Gabriela Vanesa Morais, facturista de ART y obras sociales.",
		start_url: "/",
		display: "standalone",
		background_color: "#f7f5f1",
		theme_color: "#2f6f73",
		lang: "es-AR",
		icons: [
			{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
			{ src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
			{ src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
			{ src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
		],
	};
}
