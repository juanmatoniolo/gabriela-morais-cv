"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrintButton from "./PrintButton";
import styles from "./Navbar.module.css";

const links = [
	{ href: "/", label: "CV" },
	{ href: "/cursos", label: "Certificados" },
];

export default function Navbar() {
	const pathname = usePathname();
	const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

	return (
		<header className={`${styles.bar} no-print`}>
			<nav className={styles.inner} aria-label="Principal">
				<Link href="/" className={styles.brand} aria-label="Gabriela Morais, inicio">
					<span className={styles.avatar}>
						<Image src="/profile.jpg" alt="" fill sizes="36px" className={styles.avatarImg} />
					</span>
					<span className={styles.brandName}>Gabriela Morais</span>
				</Link>

				<ul className={styles.links}>
					{links.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={href}
								className={styles.link}
								aria-current={isActive(href) ? "page" : undefined}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>

				<PrintButton />
			</nav>
		</header>
	);
}
