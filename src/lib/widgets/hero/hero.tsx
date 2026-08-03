import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Mail,
  Terminal
} from 'lucide-react'

import * as motion from 'motion/react-client'
import { GithubSvg, LinkedinSvg } from '@/lib/shared/icons'
import { Typewriter } from '@/lib/shared/ui'
import {
  CV_LINK,
  DEV_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  NAME
} from '@/lib/shared/constants'

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-24 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
      {/* Glow blob */}
      <div className="absolute top-32 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl 2xl:ml-[25%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-foreground mb-4"
        >
          {NAME}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-muted-foreground mb-8"
        >
          Frontend Developer who{' '}
          <Typewriter
            words={[
              'solves problems',
              'crafts interfaces',
              'thinks in components',
              'loves animations',
              'ships fast',
              'cares about UX',
              'obsesses over performance'
            ]}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
        >
          4+ years building scalable, accessible and performant web
          applications. I thrive on solving real-world problems with clean code
          and thoughtful architecture
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 active:scale-95 transition-all duration-150"
          >
            View Projects <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-800/60 text-blue-300 font-semibold hover:border-blue-500 hover:text-blue-200 active:scale-95 transition-all duration-150"
          >
            Get in Touch <Mail size={16} />
          </a>
          <a
            href={CV_LINK}
            target={'_blank'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-muted-foreground font-semibold hover:text-foreground transition-colors duration-150"
          >
            <FileText size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 mt-12"
        >
          {[
            { icon: GithubSvg, href: GITHUB_LINK, label: 'GitHub' },
            { icon: LinkedinSvg, href: LINKEDIN_LINK, label: 'LinkedIn' },
            { icon: Terminal, href: DEV_LINK, label: 'Dev.to' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={'_blank'}
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-blue-400 hover:bg-blue-950/50 transition-all duration-150"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
