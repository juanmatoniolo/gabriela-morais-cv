import styles from "./Section.module.css";

export default function Section({ id, title, action, className = "", children }) {
	const headingId = `${id}-titulo`;

	return (
		<section id={id} aria-labelledby={headingId} className={`${styles.section} reveal ${className}`}>
			<div className={styles.head}>
				<h2 id={headingId} className={styles.title}>
					{title}
				</h2>
				{action}
			</div>
			{children}
		</section>
	);
}
