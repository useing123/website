import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Git",
    "Figma",
  ]

  return (
    <div className="container">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl md:order-last">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Profile"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-muted-foreground md:text-lg">
            I'm a passionate developer and designer with a focus on creating intuitive, user-friendly digital
            experiences. With a background in both design and development, I bring a unique perspective to every
            project.
          </p>
          <p className="text-muted-foreground md:text-lg">
            My approach combines technical expertise with creative problem-solving, allowing me to build solutions that
            are not only functional but also aesthetically pleasing and enjoyable to use.
          </p>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

