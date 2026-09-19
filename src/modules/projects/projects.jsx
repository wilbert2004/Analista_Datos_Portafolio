import projects from "../data/data";

function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-[#07132c] px-6 py-14 text-white md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-base font-bold uppercase tracking-[0.08em] text-cyan-400 md:text-lg">
          03. PORTAFOLIO
        </p>

        <h2 className="mb-10 text-4xl font-black leading-none md:text-5xl">
          Proyectos destacados
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const imageById = {
              1: "/Ventas_globales/ventasGlobales.png",
              2: "/mortalidadvida/mortalidad.png",
              3: "/TechStore%20México/techstore.png",
              4: "/Empleados/empleados.png",
              5: "/Smartphones/Smartphones.png",
            };

            const image = imageById[project.id];

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[24px] border border-slate-600/80 bg-[#101e39] transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_18px_45px_rgba(34,211,238,0.18)]"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img
                      src={image}
                      alt={`Vista previa del proyecto ${project.title}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07132c] via-transparent to-transparent opacity-80" />

                    <span className="absolute bottom-4 right-4 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-[#07132c] opacity-0 transition duration-300 group-hover:opacity-100">
                      Ver proyecto →
                    </span>
                  </div>
                </a>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-black text-white">
                    {project.title}
                  </h3>

                  <p className="mb-5 min-h-20 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-cyan-400/40 px-3 py-1 text-xs font-semibold text-cyan-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
