export default function JobItem({ job }) {
    return (
        <div className="mb-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="font-semibold">
                    {job.empresa} — {job.cargo}
                </p>
                <p className="text-xs text-slate-500 sm:text-sm sm:whitespace-nowrap">
                    {job.fecha}
                </p>
            </div>
            <p className="mb-1 text-xs text-slate-500 sm:text-sm">{job.lugar}</p>
            <ul className="list-disc space-y-1 pl-5">
                {job.logros.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
        </div>
    );
}