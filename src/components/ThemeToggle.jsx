'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = stored ? stored === 'dark' : systemDark
      setDark(initial)
      document.documentElement.classList.toggle('dark', initial)
    } catch {}
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="btn-ghost" hidden>
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
