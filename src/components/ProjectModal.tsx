import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data/projects'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
 const closeRef = useRef<HTMLButtonElement>(null)
 useEffect(() => {
   if (!project) return
   const previousOverflow = document.body.style.overflow
   document.body.style.overflow = 'hidden'
   closeRef.current?.focus()
   const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
   window.addEventListener('keydown', onKeyDown)
   return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown) }
 }, [project, onClose])
 return <AnimatePresence>{project && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose} role="presentation">
   <motion.section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 28, opacity: 0 }} transition={{ type: 'spring', damping: 28, stiffness: 260 }} onMouseDown={event => event.stopPropagation()}>
    <div className="modal-top"><p>Case study / {project.year}</p><button ref={closeRef} onClick={onClose} aria-label="Close project details"><X size={20} /></button></div>
    <div className="modal-intro"><p>{project.category}</p><h2 id="project-modal-title">{project.title}</h2><p>{project.description}</p></div>
    <img className="modal-hero-image" src={project.images[0]} alt={`${project.title} main interface placeholder`} />
    <div className="modal-grid"><div className="case-copy"><section><h3>Overview</h3><p>{project.overview}</p></section><section><h3>Problem</h3><p>{project.problem}</p></section><section><h3>Solution</h3><p>{project.solution}</p></section><section><h3>My role</h3><p>{project.role}</p></section></div><aside><section><h3>Technologies</h3><div className="modal-tags">{project.technologies.map(item => <span key={item}>{item}</span>)}</div></section><section><h3>Features</h3><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section></aside></div>
    {project.images.length > 1 && <div className="modal-images">{project.images.slice(1).map((image, index) => <img key={image} src={image} loading="lazy" alt={`${project.title} interface view ${index + 2}`} />)}</div>}
    {(project.github || project.demo) && <div className="modal-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>}</div>}
   </motion.section>
 </motion.div>}</AnimatePresence>
}
