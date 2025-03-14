import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/data"

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div key={index} className="relative pl-6 md:pl-0">
          {/* Timeline connector */}
          {index !== experiences.length - 1 && (
            <div className="absolute left-0 top-8 bottom-0 w-px bg-border md:left-1/2 md:-ml-px" />
          )}

          <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 h-2 w-2 rounded-full bg-primary md:left-1/2 md:-ml-1" />

            {/* Date - alternating sides on desktop */}
            <div className={`mb-4 md:mb-0 ${index % 2 === 0 ? "md:text-right" : "md:col-start-2 md:row-start-1"}`}>
              <Badge variant="outline" className="text-sm font-medium">
                {experience.period}
              </Badge>
            </div>

            {/* Content - alternating sides on desktop */}
            <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}>
              <Card>
                <CardHeader>
                  <CardTitle>{experience.role}</CardTitle>
                  <CardDescription>{experience.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

