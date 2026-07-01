import PageMeta from '../components/ui/PageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import ExperienceCard from '../components/ui/ExperienceCard'
import CertificationCard from '../components/ui/CertificationCard'
import ScrollReveal from '../components/ui/ScrollReveal'
import { profile } from '../data/profile'
import { experiences } from '../data/experience'
import { certifications } from '../data/experience'

export default function Experience() {
  return (
    <>
      <PageMeta
        title={`Experience | ${profile.name}`}
        description={`Professional experience and internships of ${profile.name} — roles, responsibilities, and skills gained.`}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Work History"
            title="Experience"
            description="My professional journey through internships and hands-on development roles."
          />

          <div className="relative space-y-8">
            <div
              className="absolute left-4 top-0 hidden h-full w-px bg-slate-800 md:block"
              aria-hidden="true"
            />
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 100}>
                <div className="relative md:pl-12">
                  <div
                    className="absolute left-2.5 top-8 hidden h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950 md:block"
                    aria-hidden="true"
                  />
                  <ExperienceCard experience={exp} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Course Certifications"
            title="Certificates"
            description="A showcase of my completed courses and certifications that have enhanced my skills and knowledge."
          />

          <div className="relative space-y-8">
            <div
              className="absolute left-4 top-0 hidden h-full w-px bg-slate-800 md:block"
              aria-hidden="true"
            />
            {certifications.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 100}>
                <div className="relative md:pl-12">
                  <div
                    className="absolute left-2.5 top-8 hidden h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950 md:block"
                    aria-hidden="true"
                  />
                  <CertificationCard certificate={exp} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
