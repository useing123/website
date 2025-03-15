import type { ProjectType, ExperienceType } from "./types"

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "MangAI Frontend",
    description: "A Vue-based web application for manga enthusiasts, featuring AI-powered features and a modern user interface. Built with Vue.js and integrated with AI services.",
    image: "/mangai.png?height=400&width=600",
    technologies: ["Vue.js", "JavaScript", "AI Integration", "Responsive Design"],
    demoUrl: "https://n17r2023project.vercel.app/",
    repoUrl: "https://github.com/useing123/mangaifrontend",
    metrics: [
      { name: "Live Demo", value: "Active", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>' },
      { name: "Framework", value: "Vue.js", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
      { name: "Deployment", value: "Vercel", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>' },
      { name: "Status", value: "Production", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>' }
    ]
  },
  {
    id: 2,
    title: "International GameJam Almaty",
    description: "Organized and hosted a major international game development hackathon in Almaty, bringing together developers, designers, and creative minds to create innovative games in 48 hours.",
    image: "/gamejam.png?height=400&width=600",
    technologies: ["Event Management", "Game Development", "Community Building", "Mentorship"],
    demoUrl: "https://www.gamejam.su/",
    repoUrl: "",
    metrics: [
      { name: "Participants", value: "100+", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
      { name: "Duration", value: "48hrs", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>' },
      { name: "Projects", value: "50+", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>' },
      { name: "Location", value: "Almaty", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>' }
    ]
  },
  {
    id: 3,
    title: "PergamentAI - Hackathon Project",
    description: "TL;DR You can send youtube lecture and get notion summary of it. Full-stack AI-powered application developed during a hackathon. Features a Vue.js frontend for intuitive user interaction and a Python FastAPI backend for AI model integration. Built in an intense coding sprint to showcase rapid development and innovation.",
    image: "/pergament.png?height=400&width=600",
    technologies: ["Vue.js", "Python", "FastAPI", "AI Models", "TypeScript", "REST API"],
    demoUrl: "https://gizatulla.notion.site/nFactorial-LLM-Cup-787affd3104947739f01a1473fed615c",
    repoUrl: "https://github.com/useing123/PergamentAI",
    metrics: [
      { name: "Stack", value: "Full Stack", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.91a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>' },
      { name: "Development", value: "48hrs", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-timer"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>' },
      { name: "Components", value: "2", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>' },
      { name: "Achievement", value: "2nd place", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>' }
    ]
  }
]

export const experiences: ExperienceType[] = [
  {
    period: "September 2024 - Present",
    company: "nFactorial School - Leading Coding Bootcamp in Kazakhstan, backed by Princeton alumni, ICPC finalists, current alumni works at FAANG companies",
    role: "Full Stack Developer",
    achievements: [
      "Better understanding of how marketing works and how to generate leads",
      "Creating projects with NextJS, OpenAI, Supabase, TailwindCSS, Shadcn UI",
      "Redesign landing page of nFactorial School",
      "Building analytics for marketing team",
      "Building call analytics tool for sales team you can reach it by link (research.nfactorial.dev/calls)",
    ],
  },
  {
    period: "July 2024 - September 2024",
    company: "Freelance UX/UI, Frontend Consulting",
    role: "Freelance UX/UI, Frontend Developer",
    achievements: [
      "Living on money from sales commision and freelancing and leading organization of International GameJam Almaty",
      "Completed various freelance UX/UI design projects",
      "Research at university about on topic 'How to hack LLM's with prompt'"
    ],
  },
  {
    period: "2023 - 2024",
    company: "nFactorial School - Leading Coding Bootcamp in Kazakhstan, backed by Princeton alumni, ICPC finalists, current alumni works at FAANG companies",
    role: "Sales Manager",
    achievements: [
      "Managed sales operations at nFactorial School",
      "Company record of sales",
      "Maintaing company website",
      "B2B sales experience",
      "My big learning working as sales manager was how to understand customer needs and how to sell to them",
    ],
  },
  {
    period: "2022 - 2023",
    company: "Freelance",
    role: "UX/UI Designer",
    achievements: [
      "Completed various freelance UX/UI design projects",
      "Internship at some companies and understanding of how to work in a team",
      "Starting coding UX/UI designs with ChatGpt"
    ],
  },
]

