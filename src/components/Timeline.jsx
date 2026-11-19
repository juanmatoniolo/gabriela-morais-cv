import styles from "./Timeline.module.css";

export default function Timeline({ jobs }) {
	return (
		<ol className={styles.list}>
			{jobs.map((job) => (
				<li key={job.empresa} className={styles.item}>
					<div className={styles.head}>
						<h3 className={styles.role}>{job.cargo}</h3>
						<p className={styles.company}>{job.empresa}</p>
						<p className={styles.meta}>
							<span>{job.fecha}</span>
							<span>{job.lugar}</span>
						</p>
					</div>
					<ul className={styles.achievements}>
						{job.logros.map((logro) => (
							<li key={logro}>{logro}</li>
						))}
					</ul>
				</li>
			))}
		</ol>
	);
}
