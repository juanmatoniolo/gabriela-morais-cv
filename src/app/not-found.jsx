import Link from "next/link";
import styles from "./status.module.css";

export const metadata = {
	title: "Página no encontrada",
	robots: { index: false },
};

export default function NotFound() {
	return (
		<main id="contenido" className={styles.main}>
			<p className={styles.code}>404</p>
			<h1 className={styles.title}>Esta página no existe</h1>
			<p className={styles.text}>Puede que el enlace esté mal escrito o que la página se haya movido.</p>
			<Link href="/" className={styles.button}>
				Volver al CV
			</Link>
		</main>
	);
}
