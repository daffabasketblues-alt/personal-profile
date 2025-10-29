import avatar from "../assets/images/avatar.webp";

const Chip = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-brand-200/60 px-3 py-1 text-[12px] text-slate-700 border border-white shadow">✅ {children}</span>
);

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">About Me</h2>

      <div className="grid md:grid-cols-[220px,1fr] items-center gap-8">
        <img src={avatar} alt="Profile" className="w-56 h-56 object-cover rounded-xl2 shadow-card border-8 border-white" />
        <div>
          <p className="text-sm text-slate-600 max-w-2xl">
            Hi! I’m Rama, a passionate designer and frontend developer based in Jakarta.
            I build websites and apps that are not only stunning but also user-friendly.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>UI/UX Design</Chip>
            <Chip>Web Development</Chip>
            <Chip>Branding</Chip>
            <Chip>Motion Graphics</Chip>
          </div>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl2 px-4 py-2.5 text-white text-sm font-semibold shadow-soft bg-gradient-to-r from-brand-500 to-candy-400">
            🚀 Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
