export interface ProjectType {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
}

export interface ExperienceType {
  period: string
  company: string
  role: string
  achievements: string[]
}

