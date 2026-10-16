import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export function Skills() {
 return <section className="section skills" id="skills"><div className="skills-top"><p className="section-label"><span>02</span> Toolbox</p><p>I use the right amount of technology to make an idea tangible.</p></div>
   <div className="skill-groups">{skillGroups.map((group, index) => <motion.article key={group.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><p>{String(index + 1).padStart(2, '0')}</p><h3>{group.name}</h3><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.article>)}</div>
 </section>
}
