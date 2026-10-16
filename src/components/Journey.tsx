import { motion } from 'framer-motion'
const journey = [
 ['2024', 'Started seriously learning software development — one small build and a lot of curiosity at a time.'],
 ['2025', 'Explored web development, databases, Laravel, programming languages, and UI/UX.'],
 ['2026', 'Building projects with more intention and preparing for professional experience.'],
]
export function Journey() { return <section className="section journey" id="journey"><p className="section-label"><span>04</span> The way here</p><div className="journey-layout"><h2>A work in<br /><em>progress.</em></h2><div>{journey.map(([year, text], index) => <motion.article key={year} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><time>{year}</time><p>{text}</p></motion.article>)}</div></div></section> }
