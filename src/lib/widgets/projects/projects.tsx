import { ExternalLink } from 'lucide-react'
import { GithubSvg } from '@/lib/shared/icons'

import { FadeUp, SectionLabel, TechBadge } from '@/lib/shared/ui'

const PROJECTS = [
  {
    title: 'Bead Loop',
    description:
      'Bead Loop is a SaaS SPA for creating and editing beading patterns. You can explore the UI, create templates and projects, and experiment with different pattern types (Loom, Peyote, Cross)',
    gif: '/bead-loop.webm',
    poster: '/bead-loop.png',
    tech: [
      'react-router',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Vitest',
      'Mantine',
      'neon-auth',
      'Drizzle ORM',
      'FSD'
    ],
    github: 'https://github.com/lnik-m/bead-loop-portfolio',
    live: 'https://bead-loop.netlify.app',
    additional:
      "Currently all data is stored in your browser's localStorage, so you can try it out immediately without signing up (API and authentication are currently under active development)",
    additionalGithub: 'https://github.com/lnik-m/bead-loop'
  },
  {
    title: 'hangman',
    description:
      'Hangman is a classic word guessing game where players try to guess a hidden word by suggesting letters. Each incorrect guess brings the hangman closer to completion. Used free external API to get random words and definitions',
    gif: '/hangman.webm',
    poster: '/hangman.png',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Jest',
      'Github actions',
      'FSD',
      'Mobile First',
      'Accessible'
    ],
    github: 'https://github.com/lnik-m/hangman',
    live: 'https://hangman-eosin-sigma.vercel.app'
  },
  {
    title: 'Password Generator',
    description:
      'A simple and elegant password generator that creates strong, secure passwords with customizable options',
    gif: '/password-generator.webm',
    poster: '/password-generator.png',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'SSG', 'CSS'],
    github: 'https://github.com/lnik-m/password-generator-portfolio',
    live: 'https://lnik-password-generator.netlify.app'
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-28 py-24 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionLabel>Projects</SectionLabel>
          <div className="flex items-end justify-between mt-2 mb-10 flex-wrap gap-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Things I&apos;ve built
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.08}>
              <div className="group relative flex flex-col rounded-xl bg-card border border-border hover:border-blue-700/50 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/50">
                <div className="relative overflow-hidden h-48 bg-secondary/40">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster={project.poster}
                    className="w-full h-full mt-2 opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  >
                    <source src={project.gif} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {project.additional && (
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.additional}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map(t => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-border">
                    <a
                      href={project.github}
                      target={'_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition-colors font-mono"
                    >
                      <GithubSvg size={13} /> Source
                    </a>
                    <a
                      href={project.live}
                      target={'_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition-colors font-mono"
                    >
                      <ExternalLink size={13} /> Live demo
                    </a>

                    {project.additionalGithub && (
                      <a
                        href={project.additionalGithub}
                        target={'_blank'}
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition-colors font-mono ml-auto"
                      >
                        <GithubSvg size={13} /> Source In Progress
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
