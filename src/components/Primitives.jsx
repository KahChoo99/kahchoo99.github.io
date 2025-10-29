'use client'
import DATA from '@/data/cvData'


export function Section({ id, title, children }) {
return (
<section id={id} className="py-8">
<h2 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h2>
<div className="mt-4">{children}</div>
</section>
)
}


export function Card({ href, children }) {
const base = 'nature-card p-5 hover:shadow-md transition-shadow'
return href ? (
<a href={href} target="_blank" rel="noreferrer" className={base}>
{children}
</a>
) : (
<div className={base}>{children}</div>
)
}


export function Badge({ children }) {
return <span className="nature-badge">{children}</span>
}


export function Chip({ children }) {
return <span className="nature-chip">{children}</span>
}


export function Button({ children, variant = 'solid', ...rest }) {
const cls = variant === 'ghost' ? 'btn-ghost' : 'btn-solid'
return <a className={cls} {...rest}>{children}</a>
}


export function Footer() {
return (
<footer className="mt-16 border-t border-leaf-100 dark:border-neutral-800">
<div className="wavy" />
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
<p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
<p className="flex items-center gap-3">
{DATA.github && <a className="underline hover:no-underline" href={DATA.github}>GitHub</a>}
{DATA.linkedin && <>
<span>•</span>
<a className="underline hover:no-underline" href={DATA.linkedin}>LinkedIn</a>
</>}
{DATA.website && <>
<span>•</span>
<a className="underline hover:no-underline" href={DATA.website}>Website</a>
</>}
</p>
</div>
</footer>
)
}