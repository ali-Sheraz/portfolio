import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-[#22d3ee] uppercase tracking-widest mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Where I've worked.</h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7c5cff] via-[var(--fg)]/10 to-transparent" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] ring-4 ring-[var(--bg)]" />

                <div className="glass rounded-2xl p-6 hover:border-[var(--fg)]/20 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-[var(--fg)]">{job.role}</h3>
                    <span className="font-mono text-xs text-[var(--fg)]/40">{job.period}</span>
                  </div>
                  <p className="text-[#22d3ee] font-medium mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="text-[var(--fg)]/60 text-sm leading-relaxed flex gap-2">
                        <span className="text-[#7c5cff] mt-1">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
