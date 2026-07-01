export default function ExperienceCard({ experience }) {
  return (
    <article className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-slate-700 hover:shadow-lg hover:shadow-sky-500/5 md:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-100">
            {experience.position}
          </h3>
          <p className="mt-1 text-sky-400">{experience.company}</p>
        </div>
        <div className="text-sm text-slate-400">
          <p>{experience.duration}</p>
          {experience.location && <p>{experience.location}</p>}
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {experience.responsibilities.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-emerald-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}
