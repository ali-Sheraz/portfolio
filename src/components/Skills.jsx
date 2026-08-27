import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-[#22d3ee] uppercase tracking-widest mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Tools I reach for.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-border glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="font-semibold text-white/90 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                  >
                    {item}
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
