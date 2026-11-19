import CourseGallery from "@/components/CourseGallery";
import { cursos } from "@/lib/cursos";
import styles from "./page.module.css";

export const metadata = {
	title: "Certificados",
	description:
		"Certificados de Gabriela Morais: Secretariado Superior en Administración Médica (UTN.BA), Prestaciones Médicas y Nomenclador Nacional, Facturación Médica y Facturación Sanatorial.",
	alternates: { canonical: "/cursos" },
	openGraph: { url: "/cursos", title: "Certificados | Gabriela Morais" },
};

export default function CursosPage() {
	return (
		<main id="contenido" className={styles.main}>
			<header className={`${styles.header} fade-in`}>
				<p className={styles.eyebrow}>Formación complementaria</p>
				<h1 className={styles.title}>Certificados</h1>
				<p className={styles.intro}>
					Cursos de facturación médica, Nomenclador Nacional y administración sanitaria. Tocá un
					certificado para verlo completo.
				</p>
			</header>
			<CourseGallery cursos={cursos} />
		</main>
	);
}
