import type { ProjectType, ExperienceType } from "./types"

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with product catalog, cart, and checkout functionality.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "React", "Redux", "Firebase"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application providing real-time forecasts and historical data.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["JavaScript", "React", "Chart.js", "Weather API"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media performance metrics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project",
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A mobile-responsive application for discovering and saving recipes.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "CSS Modules", "Food API", "LocalStorage"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project",
  },
]

export const experiences: ExperienceType[] = [
  {
    period: "09.01.2024 - Present",
    company: "Current Company",
    role: "Full Stack Developer",
    achievements: [
      "Working as a Full Stack Developer, handling both frontend and backend tasks"
    ],
  },
  {
    period: "2023 - 2024",
    company: "nFactorial School",
    role: "Sales Manager",
    achievements: [
      "Managed sales operations and strategies at nFactorial School"
    ],
  },
  {
    period: "2022 - 2023",
    company: "Freelance",
    role: "UX/UI Designer",
    achievements: [
      "Completed various freelance UX/UI design projects"
    ],
  },
]

