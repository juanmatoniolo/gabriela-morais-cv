export default function JobItem({ job }) {
    return (
        <div className="mb-4 print:mb-2.5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 print:flex-row print:justify-between print:items-baseline print:gap-2">
                <p className="font-semibold print:text-[12.5px]">
                    {job.empresa} — {job.cargo}
                </p>
                <p className="text-xs text-slate-500 sm:text-sm sm:whitespace-nowrap print:text-[10.5px]">
                    {job.fecha}
                </p>
            </div>
            <p className="mb-1 text-xs text-slate-500 sm:text-sm print:text-[10.5px] print:mb-0.5">{job.lugar}</p>
            <ul className="list-disc space-y-1 pl-5 print:space-y-0.5 print:pl-4">
                {job.logros.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
        </div>
    );
}