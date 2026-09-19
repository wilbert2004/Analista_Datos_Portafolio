const metrics = [
  {
    value: "5+",
    label: "Proyectos completados",
  },
  {
    value: "5",
    label: "Herramientas dominadas",
  },
  {
    value: "1+",
    label: "Años de experiencia en datos",
  },
];

function Trayectoria() {
  return (
    <main
      id="trayectoria"
      className="bg-[#07132c] px-6 py-14 text-white md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-base font-bold uppercase tracking-[0.12em] text-cyan-400 md:text-lg">
          01. TRAYECTORIA
        </p>

        <h1 className="mb-10 text-4xl font-black leading-none md:text-5xl">
          Sobre mí
        </h1>

        <section className="grid items-center gap-12 lg:grid-cols-[490px_1fr]">
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="../../../public/wilbert.jpg"
              alt="Retrato de Wilbert Chan"
              className="h-[490px] w-full object-cover"
            />
          </div>

          <div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-200 md:text-xl">
              <p>
                Mi enfoque como analista radica en tender puentes estables entre
                la ingeniería de sistemas y los objetivos comerciales de una
                empresa. No solo extraigo filas y columnas, sino que busco
                contar historias útiles a través del modelado de datos.
              </p>

              <p className="text-slate-400">
                He dedicado los últimos años a perfeccionar técnicas de limpieza
                de datos crudos y su traducción a dashboards listos para la
                junta directiva. Mi formación en sistemas me permite estructurar
                consultas SQL robustas y escribir scripts optimizados en Python.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="min-h-36 rounded-2xl border border-slate-600/70 bg-[#1b2948] px-6 py-7"
                >
                  <strong className="block text-4xl font-black text-cyan-400">
                    {metric.value}
                  </strong>

                  <span className="mt-4 block text-base text-slate-200">
                    {metric.label}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Trayectoria;
