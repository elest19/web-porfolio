import PageMeta from '../components/ui/PageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import ScrollReveal from '../components/ui/ScrollReveal'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <PageMeta
        title={`Projects | ${profile.name}`}
        description={`Explore web development projects by ${profile.name} — full-stack applications built with modern technologies.`}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl ">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of web applications I've built, showcasing my skills in frontend, backend, and full-stack development."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2" style={{ textAlign: 'justify' }}>
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
