const SkillCard = ({ icon, title, sub }) => (
  <div className="group rounded-2xl bg-white shadow-card p-5 hover:-translate-y-0.5 transition">
    <div className="w-10 h-10 rounded-xl2 bg-brand-100 grid place-items-center mb-3">{icon}</div>
    <h4 className="font-semibold text-slate-800">{title}</h4>
    <p className="text-xs text-slate-500 mt-1">{sub}</p>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-xl font-semibold text-center text-slate-900 mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SkillCard icon={"✏️"} title="UI/UX Design" sub="Figma, Adobe XD, Sketch" />
        <SkillCard icon={"</>"} title="Frontend Dev" sub="React, Vue, Tailwind" />
        <SkillCard icon={"🏷️"} title="Branding" sub="Logo, Identity, Print" />
        <SkillCard icon={"⚡"} title="Motion Graphic" sub="After Effects, Lottie" />
      </div>
    </section>
  );
}
