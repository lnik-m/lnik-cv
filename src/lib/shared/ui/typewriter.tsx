'use client'
import { useState, useEffect } from 'react'

interface Props {
  words: string[]
}

export const Typewriter = ({ words }: Props) => {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        80
      )
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setWordIdx(prev => (prev + 1) % words.length)
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx, words])

  return (
    <span className="text-blue-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}
