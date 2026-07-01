import PageMeta from '../components/ui/PageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import { profile } from '../data/profile'

export default function About() {
  return (
    <>
      <PageMeta
        title={`About | ${profile.name}`}
        description={`Learn more about ${profile.name} — background, career objective, and technical strengths.`}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mx-auto mb-10 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-900/50 ring-2 ring-sky-400/30 sm:h-100 sm:w-100">
              <img
                src="/Portfolio-Profile.png"
                alt={`${profile.name} profile`}
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <SectionHeading
            eyebrow="About Me"
            title="Who I Am"
            description="A brief look at my background, goals, and what drives me as a developer."
          />

          <ScrollReveal>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-100">
                Professional Biography
              </h3>
              <p className="mt-4 leading-relaxed text-slate-400">{profile.bio}</p>
              <p className="mt-4 leading-relaxed text-slate-400">
                {profile.intro}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-100">
                Career Objective
              </h3>
              <p className="mt-4 leading-relaxed text-slate-400">
                {profile.objective}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-100">
                Technical Strengths
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {profile.strengths.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:border-sky-400/50 hover:text-sky-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-100">
                Personal Interests
              </h3>
              <ul className="mt-6 space-y-3">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-slate-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
