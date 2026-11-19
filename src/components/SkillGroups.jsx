import styles from "./SkillGroups.module.css";

export default function SkillGroups({ groups }) {
	return (
		<div className={styles.groups}>
			{Object.entries(groups).map(([grupo, items]) => (
				<div key={grupo} className={styles.group}>
					<h3 className={styles.title}>{grupo}</h3>
					<ul className={styles.chips}>
						{items.map((item) => (
							<li key={item} className={styles.chip}>
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
