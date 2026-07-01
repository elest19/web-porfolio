import PageMeta from '../components/ui/PageMeta'
import Hero from '../components/sections/Hero'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { profile } from '../data/profile'

export default function Home() {
  return (
    <>
      <PageMeta
        title={`${profile.name} | ${profile.title}`}
        description={profile.tagline}
        image={profile.image || '/profile.jpg'}
      />
      <Hero />

      <section
        aria-labelledby="summary-heading"
        className="border-t border-slate-800 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2
                  id="summary-heading"
                  className="text-2xl font-bold text-slate-100 sm:text-3xl"
                >
                  About Me
                </h2>
                <p className="mt-4 leading-relaxed text-slate-400" style={{ textAlign: 'justify' }}>
                  {profile.bio}
                </p>
                <div className="mt-8">
                  <Button to="/about" variant="outline">
                    Read More
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                <h3 className="text-lg font-semibold text-slate-100">
                  What I Do
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: 'Frontend Development',
                      desc: 'Building responsive, accessible interfaces with React and modern CSS.',
                    },
                    {
                      title: 'Backend Development',
                      desc: 'Designing RESTful APIs and server-side logic with Node.js.',
                    },
                    {
                      title: 'Full-Stack Solutions',
                      desc: 'Delivering end-to-end web applications from concept to deployment.',
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                      <div>
                        <p className="font-medium text-slate-200">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
