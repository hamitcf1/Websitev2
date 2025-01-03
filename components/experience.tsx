import { motion } from "framer-motion"
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Developer",
    period: "2020 - Present",
    description: "Led development of multiple high-impact projects.",
  },
  {
    company: "Startup Inc",
    position: "Full Stack Developer",
    period: "2018 - 2020",
    description: "Developed and maintained various web applications.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold">Work Experience</h2>
        <div className="space-y-8">
          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 rounded-lg bg-card p-6 shadow-lg"
              >
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="rounded-lg bg-card p-6 shadow-lg">
              <p className="text-muted-foreground">Nothing yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

