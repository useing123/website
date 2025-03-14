import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ProjectType } from "@/lib/types"

interface ProjectCardProps {
  project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-2 py-0.5 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        {project.metrics && (
          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
            {project.metrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-1.5 border rounded-md p-2">
                {metric.icon && (
                  <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: metric.icon }} />
                )}
                <div>
                  <div className="font-medium">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.name}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.demoUrl && (
          <Button asChild variant="default" size="sm">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

