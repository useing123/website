import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import AboutSection from "@/components/about-section"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 md:py-40 lg:py-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--background-end-rgb),0.2),rgba(var(--background-start-rgb),0))]" />
        <div className="container max-w-4xl space-y-6 text-center">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Designer, Developer, Problem Solver
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            I build exceptional digital experiences that combine aesthetics with functionality. Let's create something
            amazing together.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/40 py-20">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-muted/40 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
          <p className="mb-8 text-muted-foreground md:text-xl">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
          <Button asChild size="lg" className="group">
            <Link href="useing322@gmail.com">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

