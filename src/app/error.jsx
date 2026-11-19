"use client";
import styles from "./status.module.css";

export default function Error({ reset }) {
	return (
		<main id="contenido" className={styles.main}>
			<p className={styles.code}>Error</p>
			<h1 className={styles.title}>Algo salió mal</h1>
			<p className={styles.text}>No pudimos cargar esta página. Probá de nuevo en unos segundos.</p>
			<button type="button" onClick={() => reset()} className={styles.button}>
				Reintentar
			</button>
		</main>
	);
}
