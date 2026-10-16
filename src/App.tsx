import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { ProjectGallery } from './components/ProjectGallery'
import { ProjectModal } from './components/ProjectModal'
import { Journey } from './components/Journey'
import { CurrentlyLearning } from './components/CurrentlyLearning'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import type { Project } from './data/projects'

export default function App() {
 const [selectedProject, setSelectedProject] = useState<Project | null>(null)
 return <><Navbar /><main><Hero /><About /><Skills /><ProjectGallery onOpen={setSelectedProject} /><Journey /><CurrentlyLearning /><Contact /></main><Footer /><ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /></>
}
