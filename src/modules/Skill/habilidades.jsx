const skills = [
  {
    icon: "▤",
    title: "SQL",
    description:
      "Consultas complejas, optimización de queries, joins de múltiples fuentes y limpieza de estructuras relacionales.",
  },
  {
    icon: "<>",
    title: "Python",
    description:
      "Análisis exploratorio con Pandas, manipulación estadística de datasets con NumPy y automatización de pipelines.",
  },
  {
    icon: "▥",
    title: "Power BI",
    description:
      "Modelado relacional en DAX, visualizaciones interactivas de KPIs empresariales y dashboards automatizados.",
  },
  {
    icon: "◔",
    title: "Tableau",
    description:
      "Creación de data stories visuales, cruces de datos multidimensionales y mapas interactivos.",
  },
  {
    icon: "▧",
    title: "Excel",
    description:
      "Tablas dinámicas avanzadas, fórmulas anidadas, macros y modelado preliminar para reportes rápidos.",
  },
  {
    icon: "▥",
    title: "Google Sheets",
    description:
      "Integración nativa con APIs de marketing, trabajo colaborativo en la nube y dashboards ligeros.",
  },
];

function Habilidades() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-24 bg-[#07132c] px-6 py-14 text-white md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-base font-bold uppercase tracking-[0.08em] text-cyan-400 md:text-lg">
          02. Skills
        </p>

        <h2 className="mb-10 text-4xl font-black leading-none md:text-5xl">
          Habilidades técnicas
        </h2>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="min-h-[230px] rounded-2xl border border-slate-600/80 bg-[#1b2948] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#123c58] text-2xl font-bold text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold">{skill.title}</h3>

              <p className="text-base leading-relaxed text-slate-400">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
