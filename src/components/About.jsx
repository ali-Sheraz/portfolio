import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Companies", value: "4" },
  { label: "Core Stack", value: "MERN" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-[#22d3ee] uppercase tracking-widest mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Building products end-to-end, <span className="text-white/40">from database to UI.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-5 text-white/60 leading-relaxed text-lg"
          >
            <p>
              I'm a Full Stack Developer specializing in the <span className="text-white">MERN</span> ecosystem and{" "}
              <span className="text-white">NestJS</span> backends, with hands-on experience shipping SaaS platforms,
              hospital management systems, logistics tools and AI-powered agents.
            </p>
            <p>
              Beyond CRUD apps, I build{" "}
              <span className="text-white">RAG pipelines, vector search and multi-agent AI systems</span> — wiring
              LLMs into real product workflows like conversational appointment booking and automated SOAP notes.
            </p>
            <p>
              I care about clean, modular architecture, and I've deployed and managed production infrastructure on{" "}
              <span className="text-white">AWS (EC2, S3, Lambda, SQS)</span> with Nginx reverse proxies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-5 py-6 hover:border-[#7c5cff]/40 transition-colors"
              >
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
