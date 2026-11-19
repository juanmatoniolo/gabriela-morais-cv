import styles from "./EntryList.module.css";

// Lista genérica para formación y cursos: título, detalle e institución, fecha.
export default function EntryList({ items }) {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<li key={item.titulo} className={styles.item}>
					<div className={styles.text}>
						<h3 className={styles.title}>{item.titulo}</h3>
						<p className={styles.detail}>
							{[item.institucion, item.horas, item.detalle].filter(Boolean).join(" · ")}
						</p>
					</div>
					<p className={styles.date}>{item.fecha}</p>
				</li>
			))}
		</ul>
	);
}
