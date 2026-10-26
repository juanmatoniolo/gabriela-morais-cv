export default function Section({ title, children }) {
    return (
        <section className="mb-6 print:mb-4">
            <h2 className="mb-2 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-teal-700 sm:text-sm">
                {title}
            </h2>
            <div className="text-sm leading-relaxed sm:text-[15px]">{children}</div>
        </section>
    );
}