import Image from "next/image";
import { whatsappHref } from "@/lib/site";
import styles from "./Hero.module.css";

export default function Hero({ data, disponibilidad }) {
	const { nombre, puesto, ciudad, email, telefono, foto } = data;

	return (
		<header className={`${styles.hero} fade-in`}>
			{foto && (
				<div className={styles.photo}>
					<Image
						src={foto}
						alt={`Retrato de ${nombre}`}
						fill
						sizes="(min-width: 768px) 176px, 112px"
						className={styles.img}
						priority
					/>
				</div>
			)}

			<div className={styles.body}>
				<p className={styles.eyebrow}>Facturación médica · ART y Obras Sociales</p>
				<h1 className={styles.name}>{nombre}</h1>
				<p className={styles.role}>{puesto}</p>
				<p className={styles.location}>
					{ciudad}
					{disponibilidad && <span className={styles.dot}>{disponibilidad}</span>}
				</p>

				<div className={styles.actions}>
					<a
						href={whatsappHref(telefono)}
						target="_blank"
						rel="noopener noreferrer"
						className={`${styles.btn} ${styles.primary}`}
					>
						<svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.43 1.32-1.98 1.37-.5.05-.98.23-3.31-.69-2.8-1.1-4.58-3.97-4.72-4.15-.13-.18-1.13-1.5-1.13-2.87s.72-2.04.97-2.32c.26-.28.56-.35.75-.35l.54.01c.17.01.4-.07.63.48.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.73 1.2 1.56 1.94 1.07.96 1.98 1.25 2.26 1.39.28.14.44.12.6-.07.17-.19.7-.82.89-1.1.18-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.68-.17 1.36Z" />
						</svg>
						WhatsApp
						<span className="visually-hidden"> {telefono}</span>
					</a>
					<a href={`mailto:${email}`} className={`${styles.btn} ${styles.secondary}`}>
						<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12H4zM4 7l8 6 8-6" />
						</svg>
						Email
					</a>
				</div>

				{/* En el PDF los botones no sirven: se muestran los datos como texto. */}
				<p className={styles.printContact}>
					{telefono} · {email}
				</p>
			</div>
		</header>
	);
}
