import { Sparkles, Gamepad, PlaneTakeoff, Spool } from 'lucide-react'

import Image from 'next/image'
import { FadeUp, SectionLabel, TechBadge } from '@/lib/shared/ui'
import { NAME, PHOTO } from '@/lib/shared/constants'

const SKILLS = [
  'React',
  'TypeScript',
  'Next.js',
  'Vue.js',
  'Tailwind CSS',
  'GraphQL',
  'Vite',
  'Webpack',
  'Redux Toolkit',
  'FSD',
  'ESLint',
  'cypress',
  'jest',
  'Storybook',
  'Figma',
  'Git'
]

const HOBBIES = [
  { icon: Gamepad, label: 'Logic Games' },
  { icon: PlaneTakeoff, label: 'Travel & Exploration' },
  { icon: Spool, label: 'DIY things' },
  { icon: Sparkles, label: 'Figure Skating' }
]

export const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-28 py-24">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <SectionLabel>About Me</SectionLabel>
        </FadeUp>
        <div className="grid md:grid-cols-5 gap-12 mt-8">
          <FadeUp delay={0.1} className="md:col-span-3">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              I turn complex requirements into{' '}
              <span className="text-blue-400">elegant interfaces</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I believe the best interfaces are invisible – they load fast,
                feel natural, and just work. I speak design and backend
                fluently, bridging the gap between pixels and logic with clean,
                thoughtful code
              </p>
              <p>
                My daily stack is React + TypeScript. And yes, I treat Core Web
                Vitals like a personal high-score board
              </p>
              <p>
                Outside of work, I maintain Bead Loop and craft with my hands:
                beads, knitting or speed-solving Sudoku. I also love
                narrative-driven games – Undertale and Hogwarts Legacy are among
                my favourites, and I still enjoy the creative freedom of sandbox
                worlds like Minecraft
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {SKILLS.map(s => (
                <TechBadge key={s} label={s} />
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.25} className="md:col-span-2">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square max-w-xs mx-auto md:max-w-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-800/40" />
                <Image
                  src={PHOTO}
                  alt={NAME}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-500/20" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {HOBBIES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-blue-300 hover:border-blue-800/60 transition-colors"
                  >
                    <Icon size={15} className="text-blue-400 shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
