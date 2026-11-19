"use client";
import styles from "./PrintButton.module.css";

export default function PrintButton() {
	return (
		<button type="button" onClick={() => window.print()} className={styles.button}>
			<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
			</svg>
			<span className={styles.short}>PDF</span>
			<span className={styles.long}>Descargar PDF</span>
		</button>
	);
}
