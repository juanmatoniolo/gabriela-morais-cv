import styles from "./Highlights.module.css";

export default function Highlights({ items }) {
	return (
		<section aria-label="Resumen de un vistazo" className={styles.wrap}>
			<dl className={styles.grid}>
				{items.map(({ valor, texto }) => (
					<div key={valor} className={styles.item}>
						<dt className={styles.value}>{valor}</dt>
						<dd className={styles.label}>{texto}</dd>
					</div>
				))}
			</dl>
		</section>
	);
}
