import avatar from "../assets/images/avatar.webp";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-100 via-pink-100 to-white" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs text-slate-500 mb-2">Hello, I’m</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            Creative Designer &<br/> Frontend Developer
          </h1>
          <p className="mt-4 text-slate-600 text-sm md:text-base max-w-md">
            Passionate in creating beautiful and functional digital experiences. I love mixing
            creativity with technology to craft impactful solutions.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#portfolio" className="rounded-xl2 px-4 py-2.5 text-white text-sm font-semibold shadow-soft bg-gradient-to-r from-brand-500 to-candy-400">
              See My Work
            </a>
            <a href="#contact" className="rounded-xl2 px-4 py-2.5 text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50">
              Contact Me
            </a>
          </div>

          <div className="mt-5 flex gap-3 text-slate-500">
            <a href="#" className="hover:text-slate-900">IG</a>
            <a href="#" className="hover:text-slate-900">Db</a>
            <a href="#" className="hover:text-slate-900">in</a>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-200 rounded-full blur-2xl opacity-70" />
          <img src={avatar} alt="Profile"
               className="relative w-52 h-52 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-card mx-auto" />
        </div>
      </div>
    </section>
  );
}
