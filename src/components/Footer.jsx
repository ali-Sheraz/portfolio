import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</p>
        <a href="#top" className="hover:text-white transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
