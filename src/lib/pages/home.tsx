import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Education,
  Contact
} from '@/lib/widgets'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}
