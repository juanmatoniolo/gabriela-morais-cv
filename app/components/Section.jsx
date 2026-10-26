export default function Section({ title, children }) {
    return (
        <section className="mb-5 print:mb-2">
            <h2 className="mb-2 border-b border-slate-200 pb-1 text-xs font-bold uppercase tracking-wider text-teal-700 sm:text-sm print:text-[11px] print:mb-1 print:pb-0.5">
                {title}
            </h2>
            <div className="text-sm leading-relaxed sm:text-[15px] print:text-[10px] print:leading-tight">
                {children}
            </div>
        </section>
    );
}