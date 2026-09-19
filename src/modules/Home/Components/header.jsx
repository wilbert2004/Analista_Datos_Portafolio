import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-cyan-500 bg-[#07132c]/95 px-4 py-4 text-white backdrop-blur sm:px-6 md:px-8">
      {" "}
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="text-xl font-black tracking-wide text-cyan-400 sm:text-2xl">
          Data <span className="text-white">Analytics</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 text-base font-medium text-slate-300 lg:text-lg">
            <a
              href="#sobre-mi"
              className="transition-colors hover:text-cyan-400"
            >
              Sobre mí
            </a>

            <a
              href="#trayectoria"
              className="transition-colors hover:text-cyan-400"
            >
              Experiencia
            </a>
            <a
              href="#habilidades"
              className="transition-colors hover:text-cyan-400"
            >
              Habilidades
            </a>
            <a
              href="#proyectos"
              className="transition-colors hover:text-cyan-400"
            >
              proyectos
            </a>
          </nav>

          <a
            href="#contacto"
            className="rounded-lg border border-cyan-400 bg-transparent px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Contacto
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950 md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>
      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-xl border border-cyan-500/40 bg-[#0d1d35] p-4 md:hidden">
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <a
              href="#sobre-mi"
              className="transition-colors hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Sobre mí
            </a>
            <a
              href="#trayectoria"
              className="transition-colors hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Trayectoria
            </a>
            <a
              href="#habilidades"
              className="transition-colors hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Habilidades
            </a>
            <a
              href="#habilidades"
              className="transition-colors hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Habilidades
            </a>
            <a
              href="#proyectos"
              className="transition-colors hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              proyectos
            </a>
            <a
              href="#contacto"
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
