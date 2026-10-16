import { ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
export function About() {
 return <section className="section about" id="about">
   <motion.p className="section-label" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><span>01</span> A little context</motion.p>
   <div className="about-grid">
    <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .08 }}>Curious by default.<br /><em>Deliberate</em> by practice.</motion.h2>
    <motion.div className="about-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .18 }}>
      <p>I’m Muhamad Fiqri Ramadhan Kurniawan — a developer from Bandung who enjoys turning complex thoughts into useful digital products. I care about how a product works, but just as much about how it feels to use.</p>
      <p>Currently learning through the PPLG/RPL programme at SMK Negeri 4 Bandung, building the craft across software development, web applications, and problem solving.</p>
      <div className="fact-row"><span>Education <b>SMKN 4 Bandung · PPLG/RPL</b></span><span>Focus <b>Full stack web development</b></span><span>Interests <b>Systems, UI/UX, useful AI</b></span></div>
      <button className="text-button" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>What I work with <ArrowDownRight size={16} /></button>
    </motion.div>
   </div>
 </section>
}
