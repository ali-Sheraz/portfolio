import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-[#22d3ee] uppercase tracking-widest mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Things I've built.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative glass rounded-2xl p-7 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7c5cff]/10"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-[var(--fg)] group-hover:text-gradient transition-colors">
                  {p.name}
                </h3>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-[var(--fg)]/15 p-2 text-[var(--fg)]/60 hover:text-[var(--fg)] hover:border-[#22d3ee]/50 transition-colors"
                    aria-label={`Open ${p.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="text-[var(--fg)]/60 text-sm leading-relaxed mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--fg)]/5 border border-[var(--fg)]/10 text-[var(--fg)]/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
