import { Mail, Terminal } from 'lucide-react'
import { GithubSvg, LinkedinSvg } from '@/lib/shared/icons'

import { FadeUp, SectionLabel } from '@/lib/shared/ui'
import {
  DEV_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MAIL,
  NAME,
  LOCATION
} from '@/lib/shared/constants'

export const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-28 py-28">
      <div className="max-w-3xl mx-auto text-center flex flex-col justify-center">
        <FadeUp>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">
            Let&apos;s build something{' '}
            <span className="text-blue-400">remarkable</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Always open to hearing about interesting React or Vue roles – even
            if I&apos;m not actively searching. Messages get a reply within 24
            hours
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${MAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 active:scale-95 transition-all duration-150 shadow-lg shadow-blue-900/40"
            >
              <Mail size={20} /> {MAIL}
            </a>
            <a
              href={LINKEDIN_LINK}
              target={'_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-blue-800/60 text-blue-300 font-bold text-lg hover:border-blue-500 hover:text-blue-200 active:scale-95 transition-all duration-150"
            >
              <LinkedinSvg size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-14 pt-10 border-t border-border">
            <a
              href={GITHUB_LINK}
              target={'_blank'}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <GithubSvg size={20} />
            </a>
            <a
              href={LINKEDIN_LINK}
              target={'_blank'}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <LinkedinSvg size={20} />
            </a>
            <a
              href={DEV_LINK}
              target={'_blank'}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <Terminal size={20} />
            </a>
          </div>

          <p className="text-xs font-mono text-muted-foreground mt-8">
            Designed & built by {NAME} · {LOCATION}, 2026
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
