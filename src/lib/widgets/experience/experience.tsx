import { FadeUp, SectionLabel, TechBadge } from '@/lib/shared/ui'

const EXPERIENCE = [
  {
    role: 'Frontend Developer',
    company: 'MTS Web Services, Big Tech',
    period: 'March 2024 – Present',
    desc: 'Built complex UI components (data tables, multi-step forms, validation flows) for a B2B platform. Led REST-to-GraphQL migration, implemented ABAC, and integrated with Squidex. Built reusable components for a cross-project design system. Owned a separate frontend repo in a 2‑person UI team and quickly shipped Vue widgets.',
    tech: [
      'React',
      'TypeScript',
      'GraphQL',
      'Redux',
      'Vue',
      'Onion Architecture'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'imibox, TurboRent',
    period: 'September 2022 – March 2024',
    desc: 'Developed and evolved a Dutch startup platform with FSD architecture, ChatGPT API, and Google Auth. Built custom CRM editor extensions, contributed to feature ideation, and migrated the project to SvelteKit with Cypress e2e tests.',
    tech: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Turbo Repo',
      'SvelteKit',
      'FSD'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'AgroStab',
    period: 'October 2021 – September 2022',
    desc: 'Owned the entire frontend, from design to production. Collaborated on API design, onboarded and mentored two developers, and handled nginx + DB deployment.',
    tech: ['React', 'react-redux', 'Webpack']
  }
]

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-28 py-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-12">
            Where I&apos;ve worked
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-600/80 via-blue-800/40 to-transparent ml-[7px] hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={exp.company} delay={i * 0.12}>
                <div className="sm:pl-10 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-background hidden sm:block" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-blue-400 font-semibold text-sm">
                      {exp.company}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground sm:ml-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map(t => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
