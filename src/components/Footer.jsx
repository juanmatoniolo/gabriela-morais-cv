import Link from "next/link";
import { cv } from "@/lib/cv";
import { whatsappHref } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
	const { nombre, email, telefono, ciudad } = cv.header;

	return (
		<footer className={`${styles.footer} no-print`}>
			<div className={styles.inner}>
				<div>
					<p className={styles.name}>{nombre}</p>
					<p className={styles.meta}>{ciudad}</p>
				</div>
				<ul className={styles.links}>
					<li>
						<a href={whatsappHref(telefono)} target="_blank" rel="noopener noreferrer">
							WhatsApp {telefono}
						</a>
					</li>
					<li>
						<a href={`mailto:${email}`}>{email}</a>
					</li>
					<li>
						<Link href="/cursos">Certificados</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
