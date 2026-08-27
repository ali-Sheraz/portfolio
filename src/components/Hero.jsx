import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#7c5cff]/30 blur-[120px]" />
        <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-[#22d3ee]/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 w-full">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="font-mono text-sm text-[#22d3ee] tracking-widest uppercase mb-5"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-4 text-2xl sm:text-3xl font-semibold text-gradient"
        >
          {profile.role}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-6 max-w-xl text-white/60 text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] px-7 py-3.5 font-semibold text-black hover:opacity-90 transition-opacity shadow-lg shadow-[#7c5cff]/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/85 hover:bg-white/5 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/40 font-mono"
        >
          <span>4+ years experience</span>
          <span>MERN · NestJS · AI/RAG</span>
          <span>{profile.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
