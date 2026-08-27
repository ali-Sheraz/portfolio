import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-lg shadow-black/20" : ""
          }`}
        >
          <a href="#top" className="font-semibold tracking-tight text-lg">
            <span className="text-gradient">Sheraz</span>
            <span className="text-white/70">.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={profile.resumeUrl}
            download
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 text-sm font-medium transition-colors"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-white/80 p-2"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass mt-2 rounded-2xl px-6 py-5 flex flex-col gap-4 text-white/80"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-white">
                {l.label}
              </a>
            ))}
            <a href={profile.resumeUrl} download className="text-gradient font-medium">
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
