function About() {
  return (
    <main className="bg-[#07132c] px-4 py-10 md:px-6">
      <section
        id="sobre-mi"
        className="mx-auto max-w-[1200px] rounded-xl border border-slate-500/40 bg-[#1d2f42]/90 px-8 py-8 md:px-12 md:py-10"
      >
        <p className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-cyan-400">
          ANALISTA DE DATOS
        </p>

        <h1 className="mb-6 max-w-[1100px] text-3xl font-black leading-relaxed tracking-[-0.04em] text-white md:text-[3.2rem]">
          Convierto datos en decisiones de negocio
        </h1>

        <div className="max-w-[1100px] space-y-4 text-base leading-relaxed text-slate-300 md:text-[1.18rem]">
          <p>
            Soy Wilbert Chan, estudiante de Ingeniería en Sistemas apasionado
            por el Análisis de Datos y la Inteligencia de Negocios.
          </p>

          <p>
            Me gusta transformar datos complejos en dashboards interactivos,
            limpios y decisiones accionables. Tengo experiencia extrayendo y
            procesando información desde cero, integrando bases de datos SQL,
            automatizando análisis con Python y diseñando visualizaciones
            avanzadas en Power BI y Tableau.
          </p>

          <p>
            Estoy buscando mi primera oportunidad laboral como Analista de Datos
            Junior / Business Intelligence Junior, donde pueda seguir creciendo,
            descubrir patrones clave y aportar valor a las metas del negocio.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/529997643118?text=Hola%20Wilbert,%20me%20gustaría%20contactarte%20para%20hablar%20sobre%20una%20oportunidad%20laboral."
            className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Contacto
          </a>

          <a
            href="../../../public/cv/CV Wilbert Oliver analista (1).pdf"
            download
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-600"
          >
            Descargar CV
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
