'use client'
import { type PropsWithChildren, useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface Props {
  delay?: number
  className?: string
}

export const FadeUp = ({
  children,
  delay = 0,
  className = ''
}: PropsWithChildren<Props>) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
