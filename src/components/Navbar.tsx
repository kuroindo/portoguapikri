import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const links = [['Work', 'work'], ['About', 'about'], ['Notes', 'journey'], ['Contact', 'contact']] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <header className="navbar">
    <button className="wordmark" onClick={() => go('top')} aria-label="Back to top">MFRK<span>®</span></button>
    <nav className="nav-links" aria-label="Primary navigation">{links.map(([name, id]) => <button key={id} onClick={() => go(id)}>{name}</button>)}</nav>
    <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>
      {open && <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} aria-label="Mobile navigation">
        {links.map(([name, id]) => <button key={id} onClick={() => go(id)}>{name}</button>)}
      </motion.nav>}
    </AnimatePresence>
  </header>
}
