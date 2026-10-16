import { WaveDivider } from './WaveDivider'
import { ArrowUpRight } from 'lucide-react'
import { contact } from '../data/contact'

export function Footer() { return <footer><WaveDivider tone="dark" /><div className="footer-inner"><div><p className="footer-name">Muhamad Fiqri<br />Ramadhan Kurniawan</p><p>Full Stack Web Developer</p></div><div className="footer-links"><a href="#top">Back to top <ArrowUpRight size={15} /></a><a href={contact.github.url} target="_blank" rel="noreferrer">GitHub / {contact.github.name} <ArrowUpRight size={15} /></a><a href={contact.linkedin.url} target="_blank" rel="noreferrer">LinkedIn / {contact.linkedin.name} <ArrowUpRight size={15} /></a><a href={`mailto:${contact.email}`}>Email / {contact.email} <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© 2026 Muhamad Fiqri Ramadhan Kurniawan</span><span>Built with curiosity &amp; too much debugging.</span></div></footer>
}
