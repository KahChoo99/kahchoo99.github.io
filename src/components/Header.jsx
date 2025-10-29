'use client'
import Link from 'next/link'
import DATA from '@/data/cvData'
import ThemeToggle from './ThemeToggle'


export default function Header() {
return (
<header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-leaf-100 dark:border-neutral-800">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<Link href="#top" className="font-semibold tracking-tight">{DATA.name}</Link>
<nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
<a href="#about" className="hover:text-black dark:hover:text-white">About</a>
<a href="#skills" className="hover:text-black dark:hover:text-white">Skills</a>
<a href="#experience" className="hover:text-black dark:hover:text-white">Experience</a>
<a href="#projects" className="hover:text-black dark:hover:text-white">Projects</a>
<a href="#leadership" className="hover:text-black dark:hover:text-white">Awards</a>
<a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
</nav>
<ThemeToggle />
</div>
</header>
)
}