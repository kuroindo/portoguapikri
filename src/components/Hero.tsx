import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { WaveDivider } from './WaveDivider'

export function Hero() {
  const to = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return <section className="hero" id="top">
    <div className="hero-noise" />
    <div className="hero-inner">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>Based in Bandung, Indonesia <span /> Available for good ideas</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
        I build digital<br /><em>experiences,</em> not<br />just websites.
      </motion.h1>
      <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
        <p>A young developer making useful web applications, thoughtful systems, and ideas that deserve to exist beyond the screen.</p>
        <div className="hero-actions"><button className="button button-light" onClick={() => to('work')}>View projects <ArrowDownRight size={17} /></button><button className="text-button" onClick={() => to('contact')}>Contact me <ArrowUpRight size={16} /></button></div>
      </motion.div>
    </div>
    <button className="scroll-cue" onClick={() => to('about')} aria-label="Scroll to about section"><span className="mouse"><i /></span><span>Gulir Bawah</span></button>
    <WaveDivider />
  </section>
}
