import Navbar from "../components/Navbar";
import CourseGallery from "../components/CourseGallery";
import { cursos } from "../data/cursos";

export const metadata = {
    title: "Cursos y certificaciones",
    description:
        "Certificados de Gabriela Morais: Secretariado Superior en Administración Médica, Facturación Sanatorial, Nomenclador Nacional y facturación médica.",
};

export default function CursosPage() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12">
                <header className="mb-6 sm:mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-teal-700 sm:text-3xl md:text-4xl">
                        Cursos y certificaciones
                    </h1>
                    <p className="mt-1 text-sm text-slate-600 sm:text-base">
                        Certificados de formación complementaria. Tocá una imagen para ampliarla.
                    </p>
                </header>
                <CourseGallery cursos={cursos} />
            </main>
        </>
    );
}