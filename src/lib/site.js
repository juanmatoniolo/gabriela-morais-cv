// URL pública del sitio. Configurable con NEXT_PUBLIC_SITE_URL (ver .env.example).
export const siteUrl = (
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.NODE_ENV === "production"
		? "https://gabriela-morais-cv.vercel.app"
		: "http://localhost:3000")
).replace(/\/$/, "");

export const siteName = "CV Gabriela Morais";

export function whatsappHref(telefono) {
	const numero = `549${telefono.replace(/\D/g, "")}`;
	const mensaje = encodeURIComponent(
		"Hola Gabriela, vimos tu CV y nos gustaría coordinar una entrevista."
	);
	return `https://wa.me/${numero}?text=${mensaje}`;
}
