function Footer() {
  return (
    <footer className="border-t border-slate-600/70 bg-[#07132c] px-6 py-10 text-white md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-black uppercase">WILBERT CHAN UC</h2>

          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
            Analista de datos y desarrollador web enfocado en crear dashboards
            interactivos y aplicaciones frontend que transforman información en
            decisiones estratégicas.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-black uppercase">Social</h3>

          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/wilbert.chan.33821"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-2xl font-black text-white transition hover:text-cyan-400"
            >
              f
            </a>

            <a
              href="https://github.com/wilbert2004"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl font-black text-white transition hover:text-cyan-400"
            >
              ◎
            </a>

            <a
              href="https://www.linkedin.com/in/wilbert-oliver-chan-uc-028229314/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl font-black text-white transition hover:text-cyan-400"
            >
              in
            </a>

            <a
              href="mailto:chanucwilbertoliver@gmail.com"
              aria-label="Correo electrónico"
              className="text-2xl font-black text-white transition hover:text-cyan-400"
            >
              ✉
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-600/70 pt-6 text-center text-base text-white">
        © 2026 Copyright. Creado por Wilbert Chan
      </div>
    </footer>
  );
}

export default Footer;
