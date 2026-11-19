"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./CourseGallery.module.css";

export default function CourseGallery({ cursos }) {
	const dialogRef = useRef(null);
	const [activo, setActivo] = useState(null);

	function abrir(curso) {
		setActivo(curso);
		dialogRef.current?.showModal();
	}

	function cerrar() {
		dialogRef.current?.close();
	}

	return (
		<>
			<ul className={styles.grid}>
				{cursos.map((c) => (
					<li key={c.id} className="reveal">
						<button type="button" onClick={() => abrir(c)} className={styles.card}>
							<span className={styles.thumb}>
								<Image
									src={c.imagen}
									alt={`Certificado: ${c.titulo}`}
									fill
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									className={styles.thumbImg}
								/>
							</span>
							<span className={styles.info}>
								<span className={styles.date}>
									{c.fecha}
									{c.horas && ` · ${c.horas}`}
								</span>
								<span className={styles.name}>{c.titulo}</span>
								<span className={styles.org}>{c.institucion}</span>
							</span>
						</button>
					</li>
				))}
			</ul>

			{/* <dialog> nativo: atrapa el foco y cierra con Escape sin JS extra. */}
			<dialog
				ref={dialogRef}
				className={styles.dialog}
				aria-label={activo ? `Certificado: ${activo.titulo}` : "Certificado"}
				onClick={(e) => e.target === e.currentTarget && cerrar()}
				onClose={() => setActivo(null)}
			>
				{activo && (
					<figure className={styles.figure}>
						<button type="button" onClick={cerrar} className={styles.close} aria-label="Cerrar">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
							</svg>
						</button>
						<div className={styles.full}>
							<Image
								src={activo.imagen}
								alt={`Certificado: ${activo.titulo}`}
								fill
								sizes="(min-width: 1024px) 60rem, 100vw"
								className={styles.fullImg}
							/>
						</div>
						<figcaption className={styles.caption}>
							<strong>{activo.titulo}</strong>
							<span>
								{activo.institucion} · {activo.fecha}
							</span>
						</figcaption>
					</figure>
				)}
			</dialog>
		</>
	);
}
