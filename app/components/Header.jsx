import Image from "next/image";

export default function Header({ data }) {
    return (
        <header className="mb-6 border-b border-slate-200 pb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            {data.foto && (
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-teal-700 shadow-sm sm:h-32 sm:w-32 print:w-24 print:h-24">
                    <Image
                        src={data.foto}
                        alt={`Foto de ${data.nombre}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-teal-700 sm:text-3xl md:text-4xl">
                    {data.nombre}
                </h1>
                <p className="mt-1 text-base font-semibold text-slate-700 sm:text-lg">
                    {data.puesto}
                </p>
                <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500 sm:text-sm">
                    <span>{data.ciudad}</span>
                    <span aria-hidden>|</span>
                    <a href={`tel:${data.telefono}`} className="hover:text-teal-700 hover:underline">
                        {data.telefono}
                    </a>
                    <span aria-hidden>|</span>
                    <a href={`mailto:${data.email}`} className="hover:text-teal-700 hover:underline">
                        {data.email}
                    </a>
                </p>
            </div>
        </header>
    );
}