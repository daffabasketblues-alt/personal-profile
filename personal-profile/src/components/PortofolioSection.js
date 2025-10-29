import w1 from "../assets/images/work-1.webp";
import w2 from "../assets/images/work-2.webp";
import w3 from "../assets/images/work-3.webp";

const Card = ({ img, title, tag }) => (
  <div className="rounded-2xl bg-white shadow-card overflow-hidden hover:shadow-lg transition">
    <img src={img} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h4 className="font-semibold text-slate-800">{title}</h4>
      <p className="text-xs text-slate-500 mt-1">{tag}</p>
    </div>
  </div>
);

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-5">
        <Card img={w1} title="Dashboard Web App" tag="UI/UX, Frontend" />
        <Card img={w2} title="Mobile App Landing" tag="Design, Branding" />
        <Card img={w3} title="Motion Graphic" tag="Animation, Branding" />
      </div>
      <div className="text-center mt-6">
        <a href="#" className="inline-block rounded-xl2 px-4 py-2 text-sm font-semibold border border-slate-200 hover:bg-slate-50">
          🏀 More on Dribbble
        </a>
      </div>
    </section>
  );
}
