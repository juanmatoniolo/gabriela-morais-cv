import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import JobItem from "./components/JobItem";
import { cv } from "./data/cv";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 print:max-w-none print:p-0">
        <Header data={cv.header} />

        <Section title="Perfil profesional">
          <p>{cv.perfil}</p>
        </Section>

        <Section title="Experiencia laboral">
          {cv.experiencia.map((job) => (
            <JobItem key={job.empresa} job={job} />
          ))}
        </Section>

        <Section title="Habilidades y Competencias">
          <div className="space-y-2">
            {Object.entries(cv.skills).map(([grupo, items]) => (
              <p key={grupo}>
                <strong className="text-slate-800">{grupo}:</strong>{" "}
                <span className="text-slate-700">{items.join(" · ")}</span>
              </p>
            ))}
          </div>
        </Section>

        <Section title="Formación Académica">
          <ul className="space-y-3">
            {cv.formacionAcademica.map((f) => (
              <li key={f.titulo} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                <div>
                  <strong className="text-slate-800">{f.titulo}</strong>
                  <div className="text-sm text-slate-600 mt-0.5">
                    {f.institucion} {f.detalle && `· ${f.detalle}`}
                  </div>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap">{f.fecha}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Cursos y Certificaciones">
          <ul className="space-y-3">
            {cv.cursos.map((c) => (
              <li key={c.titulo} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                <div>
                  <strong className="text-slate-800">{c.titulo}</strong>
                  <div className="text-sm text-slate-600 mt-0.5">
                    {c.horas && <span>{c.horas} · </span>}
                    {c.institucion}
                  </div>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap">{c.fecha}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Datos Adicionales">
          <div className="space-y-1">
            <p><strong className="text-slate-800">Idiomas:</strong> <span className="text-slate-700">{cv.extras.idiomas}</span></p>
            <p><strong className="text-slate-800">Disponibilidad:</strong> <span className="text-slate-700">{cv.extras.disponibilidad}</span></p>
          </div>
        </Section>
      </main>
    </>
  );
}