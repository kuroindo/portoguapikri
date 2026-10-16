import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectGallery({ onOpen }: { onOpen: (project: Project) => void }) {
 return <section className="projects" id="work"><div className="projects-heading"><p className="section-label"><span>03</span> Selected work</p><h2>Built for people,<br /><em>not portfolios.</em></h2><p>Concepts and projects where interface, information, and utility meet.</p></div><div className="project-canvas">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={onOpen} />)}</div></section>
}
