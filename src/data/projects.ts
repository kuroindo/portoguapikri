export interface Project {
  id: string
  title: string
  category: string
  year: string
  description: string
  overview: string
  problem: string
  solution: string
  role: string
  technologies: string[]
  features: string[]
  thumbnail: string
  images: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'sigm4', title: 'SIGM4', category: 'School infrastructure platform', year: '2026',
    description: 'A full-stack school asset, facility, and infrastructure management platform spanning 22 operational modules, supported by end-to-end product requirements, system architecture, UX flows, and a structured implementation roadmap.',
    overview: 'SIGM4 centralises the workflows required to manage school assets, facilities, and infrastructure across 22 operational modules.',
    problem: 'School operations need a reliable way to coordinate assets, facilities, and infrastructure without fragmented records and disconnected processes.',
    solution: 'A structured full-stack platform connects operational workflows with a clear system architecture, product requirements, and UX flows.',
    role: 'Full-stack Developer - development and deployment.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    features: ['Asset management', 'Facility management', 'Infrastructure workflows', '22 operational modules'],
    thumbnail: '/projects/sigm4/thumbnail.svg',
    images: ['/projects/sigm4/01.svg'],
    github: 'https://github.com/HanzzzBD/SIGM4',
  },
  {
    id: 'nawasena', title: 'Nawasena', category: 'Inclusive career ecosystem', year: '2026',
    description: 'An accessibility-first career ecosystem that helps people with disabilities discover inclusive job opportunities, build resumes, manage accessibility preferences, and access AI-assisted career features.',
    overview: 'Nawasena helps people with disabilities navigate career opportunities through an inclusive, accessibility-first ecosystem.',
    problem: 'Conventional job platforms often make accessibility needs invisible and inclusive opportunities difficult to discover.',
    solution: 'The platform brings opportunity discovery, resume building, accessibility preferences, and AI-assisted career support into one accessible flow.',
    role: 'Full-stack Developer - development and deployment.',
    technologies: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Prisma'],
    features: ['Inclusive job opportunities', 'Resume builder', 'Accessibility preferences', 'AI-assisted career features'],
    thumbnail: '/projects/nawasena/thumbnail.svg',
    images: ['/projects/nawasena/01.svg', '/projects/nawasena/02.svg'],
    github: 'https://github.com/HanzzzBD/KomunitasDisabilitas',
  },
  {
    id: 'sambatvibe', title: 'SambatVibe', category: 'Mental health community platform', year: '2026',
    description: 'A community space for people to talk through personal problems and support one another around mental health.',
    overview: 'SambatVibe is a web community that gives users a welcoming space to share what they are going through and connect through conversation.',
    problem: 'People can need a low-pressure place to discuss personal struggles, but may not know where to start or feel comfortable speaking up.',
    solution: 'A focused community experience encourages supportive conversations around everyday mental-health concerns.',
    role: 'Frontend Developer.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    features: ['Community discussions', 'Personal story sharing', 'Supportive conversations', 'Mental-health awareness'],
    thumbnail: '/projects/sambatvibe/thumbnail.svg', images: ['/projects/sambatvibe/01.svg'],
  },
  {
    id: 'smkn4', title: 'SMKN 4 Bandung', category: 'Information Platform', year: '2025',
    description: 'A more useful digital front door for a school community.',
    overview: 'A modern website concept that reorganises school information around the needs of students, parents, and prospective learners.',
    problem: 'Essential school information can be difficult to find when navigation follows organisational structure instead of real questions.',
    solution: 'A clearer content hierarchy makes announcements, programmes, and resources easier to reach on any device.',
    role: 'UX audit, information architecture, visual direction, and frontend concept.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    features: ['Structured announcements', 'Programme overview', 'Responsive navigation', 'Resource hub'],
    thumbnail: '/projects/smkn4/thumbnail.svg', images: ['/projects/smkn4/01.svg'],
    demo: 'https://smkn4bdg.vercel.app/',
  },
]
