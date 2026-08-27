import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-[#22d3ee] uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Let's build something <span className="text-gradient">great together.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Open to full-stack and AI engineering opportunities. Reach out and I'll get back to you quickly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] px-8 py-4 font-semibold text-black hover:opacity-90 transition-opacity shadow-lg shadow-[#7c5cff]/25"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 text-white/50">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span className="text-white/20">/</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span className="text-white/20">/</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
              {profile.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
