export default function CertificationCard({ certificate }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-slate-700 hover:shadow-lg hover:shadow-sky-500/5 md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold text-slate-100">
            {certificate.course}
          </h3>
          <p className="mt-2 text-sky-400">{certificate.provider}</p>

          <a
            href={certificate.credentials}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 transition-all duration-200 hover:border-sky-400/60 hover:bg-sky-500/20 hover:text-sky-200"
          >
            View Credentials
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-800/60 lg:max-w-[240px]">
          <img
            src={certificate.image}
            alt={`${certificate.course} certificate`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  )
}
