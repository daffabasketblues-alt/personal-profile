export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="rounded-md bg-gradient-to-r from-brand-400 to-candy-400 px-2 py-1 text-white text-xs">Frame</span>
          <span className="text-slate-800">MyProfile</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#portfolio" className="hover:text-slate-900">Portfolio</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>

        <a href="#contact"
           className="ml-4 rounded-xl2 text-xs font-semibold px-3.5 py-2 shadow-soft bg-gradient-to-r from-candy-400 to-brand-500 text-white hover:opacity-95">
          ✨ Hire Me
        </a>
      </div>
    </header>
  );
}
