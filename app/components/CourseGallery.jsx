"use client";
import { useState, useEffect } from "react";

export default function CourseGallery({ cursos }) {
    const [activo, setActivo] = useState(null);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setActivo(null);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {cursos.map((c) => (
                    <li key={c.id}>
                        <button
                            onClick={() => setActivo(c)}
                            className="group block w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                                <img
                                    src={c.imagen}
                                    alt={`Certificado ${c.titulo}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="p-3 sm:p-4">
                                <p className="text-sm font-semibold text-slate-800 sm:text-base">
                                    {c.titulo}
                                </p>
                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    {c.institucion}
                                </p>
                                <p className="mt-1 text-xs text-teal-700">{c.fecha}{c.horas ? ` · ${c.horas}` : ""}</p>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>

            {activo && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Certificado ${activo.titulo}`}
                    onClick={() => setActivo(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-3xl rounded-xl bg-white p-3 shadow-2xl sm:p-4"
                    >
                        <button
                            onClick={() => setActivo(null)}
                            aria-label="Cerrar"
                            className="absolute -top-2 -right-2 rounded-full bg-white p-2 text-slate-700 shadow-md hover:bg-slate-100 sm:-top-3 sm:-right-3"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={activo.imagen}
                            alt={`Certificado ${activo.titulo}`}
                            className="mx-auto max-h-[75vh] w-auto rounded"
                        />
                        <p className="mt-3 text-center text-sm font-medium text-slate-800">
                            {activo.titulo}
                        </p>
                        <p className="text-center text-xs text-slate-500">{activo.institucion} · {activo.fecha}</p>
                    </div>
                </div>
            )}
        </>
    );
}