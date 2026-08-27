import { motion } from "framer-motion";
import { education, certifications } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-[#22d3ee] uppercase tracking-widest mb-3">Education</p>
          <div className="glass rounded-2xl p-7">
            <h3 className="font-semibold text-lg text-white">{education.degree}</h3>
            <p className="text-white/60 mt-1">{education.school}</p>
            <p className="font-mono text-xs text-white/40 mt-2">{education.period}</p>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">{education.detail}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono text-sm text-[#22d3ee] uppercase tracking-widest mb-3">Certifications</p>
          <div className="space-y-4">
            {certifications.map((c) => (
              <div key={c.name} className="glass rounded-2xl p-7">
                <h3 className="font-semibold text-lg text-white">{c.name}</h3>
                <p className="text-white/60 mt-1">{c.issuer}</p>
                <p className="font-mono text-xs text-white/40 mt-2">{c.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
