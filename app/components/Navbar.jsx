"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrintButton from "./PrintButton";

export default function Navbar() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "CV" },
        { href: "/cursos/", label: "Cursos" },
    ];

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur print:hidden">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
                <Link href="/" className="text-sm font-semibold text-teal-700 sm:text-base">
                    Gabriela Morais
                </Link>
                <div className="flex items-center gap-3 sm:gap-4">
                    <ul className="flex items-center gap-1 sm:gap-2">
                        {links.map(({ href, label }) => {
                            const active = pathname === href;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition sm:text-sm ${active
                                            ? "bg-teal-700 text-white"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <PrintButton />
                </div>
            </div>
        </nav>
    );
}