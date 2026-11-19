import styles from "./status.module.css";

export default function Loading() {
	return (
		<main className={styles.main} aria-busy="true">
			<span className={styles.spinner} aria-hidden="true" />
			<p className="visually-hidden">Cargando…</p>
		</main>
	);
}
