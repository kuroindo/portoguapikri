import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { contact } from '../data/contact'

export function Contact() { return <section className="contact" id="contact"><motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><span>06</span> Say hello</motion.p><motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Have an idea?<br /><em>Let’s build it.</em></motion.h2><a className="contact-email" href={`mailto:${contact.email}`}>{contact.email} <ArrowUpRight size={22} /></a><p>I’m always open to a good conversation, a thoughtful collaboration, or the next thing to learn.</p></section> }
