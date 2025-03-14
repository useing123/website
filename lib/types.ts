export interface ProjectType {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  metrics?: {
    name: string
    value: string
    icon?: string
  }[]
}

export interface ExperienceType {
  period: string
  company: string
  role: string
  achievements: string[]
}

