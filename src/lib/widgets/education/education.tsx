import { ExternalLink } from 'lucide-react'

import { FadeUp, SectionLabel } from '@/lib/shared/ui'

const EDUCATION = [
  {
    degree: 'B.Sc. Programming',
    institution: 'ITMO University – QS Top 100 in Computer Science',
    period: '2020 – 2024',
    detail:
      'Focused on frontend development, UX/UI, and algorithmic problem solving. I brought it all together in my thesis – Bead Loop, a pattern editor where React, TypeScript, and Canvas meet thoughtful design, fast performance, and real usability',
    link: 'https://de.ifmo.ru/certificates/e5d7b4f158564b93.pdf'
  },
  {
    degree: 'The Frontend Developer Path',
    institution: 'Scrimba',
    period: '2025 – 2026',
    detail:
      'Intensive 80+ hour program, created in collaboration with Mozilla MDN. Covers React, APIs, accessibility, responsive design, and modern JavaScript. Includes 12+ portfolio projects and a verified certificate',
    link: 'https://scrimba.com/@lnik-m:certs'
  }
]

export const Education = () => {
  return (
    <section id="education" className="px-6 md:px-16 lg:px-28 py-24 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionLabel>Education</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-12">
            Academic background
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-5">
          {EDUCATION.map((edu, i) => (
            <FadeUp key={edu.institution} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-blue-800/60 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0 mt-1">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.detail}
                </p>
                <div className="flex gap-3 mt-2 pt-2 border-t border-border">
                  <a
                    href={edu.link}
                    target={'_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition-colors font-mono"
                  >
                    <ExternalLink size={13} /> Certificates
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
