import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

export function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project) => void }) {
 return <motion.button className={`project-card project-${index + 1}`} onClick={() => onOpen(project)} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay: index * .08 }} whileHover={{ y: -8 }} aria-label={`View ${project.title} project details`}>
   <span className="project-image"><img src={project.thumbnail} alt={`${project.title} interface placeholder`} loading="lazy" /><span className="project-overlay"><span>{project.title}</span><small>View project <ArrowUpRight size={16} /></small></span></span>
   <span className="project-meta"><span>{String(index + 1).padStart(2, '0')} — {project.category}</span><span>{project.year}</span></span>
 </motion.button>
}
