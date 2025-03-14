import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Figma",
    "Stable Diffusion",
    "Midjourney",
    "Shadcn UI",
    "Sales Management",
    "Gpt",
    "Claude",

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
            I'm a Full Stack Developer with a unique journey through design and business. Starting as a UX/UI designer, I developed a keen eye for creating beautiful, user-centric experiences. My time in sales management at nFactorial School taught me the importance of understanding user needs and business objectives.
          </p>
          <p className="text-muted-foreground md:text-lg">
            Today, I combine my design sensibility, business acumen, and technical skills to create web applications that not only look great but also deliver real value. I believe the best digital solutions emerge when you understand both the user interface and the underlying technology.
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

