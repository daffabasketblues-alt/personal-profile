export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-100 to-pink-100" />
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Contact Me</h3>
          <p className="text-sm text-slate-600 max-w-md">
            Interested working together? Let’s talk about your project and make something amazing!
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>📧 hello@gmail.com</li>
            <li>📞 +62 812-3456-7890</li>
          </ul>
          <div className="mt-4 flex gap-3 text-slate-500">
            <a href="#" className="hover:text-slate-900">IG</a>
            <a href="#" className="hover:text-slate-900">Db</a>
            <a href="#" className="hover:text-slate-900">in</a>
          </div>
        </div>

        <form className="bg-white rounded-2xl shadow-card p-5 md:p-6 space-y-3">
          <div>
            <label className="text-xs text-slate-500">Name</label>
            <input className="mt-1 w-full rounded-xl2 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs text-slate-500">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl2 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="you@email.com" />
          </div>
          <div>
            <label className="text-xs text-slate-500">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-xl2 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300" placeholder="Type your message..." />
          </div>
          <button type="submit" className="w-full rounded-xl2 px-4 py-2.5 text-white text-sm font-semibold shadow-soft bg-gradient-to-r from-candy-400 to-brand-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
