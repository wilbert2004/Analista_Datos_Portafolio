import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Contacto desde mi portafolio: ${name}`;
    const body = `Nombre: ${name}
Correo: ${email}

Mensaje:
${message}`;

    window.location.href = `mailto:chanucwilbertoliver@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="contacto"
      className="bg-[#07132c] px-6 py-14 text-white md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-base font-bold uppercase tracking-[0.08em] text-cyan-400 md:text-lg">
          04. CONEXIÓN
        </p>

        <h2 className="mb-10 text-4xl font-black leading-none md:text-5xl">
          Contacto
        </h2>

        <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-600/80 bg-[#1b2948] p-8 md:p-12"
          >
            <h3 className="mb-8 text-2xl font-black">Envíame un mensaje</h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-slate-300"
                >
                  Nombre completo
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Escribe tu nombre..."
                  required
                  className="w-full rounded-lg border border-slate-600 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-slate-300"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  required
                  className="w-full rounded-lg border border-slate-600 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-slate-300"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto o vacante laboral..."
                  required
                  className="w-full resize-none rounded-lg border border-slate-600 bg-transparent px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-400 px-5 py-4 font-black text-[#07132c] transition hover:bg-cyan-300"
              >
                Enviar mensaje
              </button>

              {sent && (
                <p className="text-center text-sm text-cyan-300">
                  Se abrió tu aplicación de correo para completar el envío.
                </p>
              )}
            </div>
          </form>

          <div className="pt-2">
            <h3 className="mb-5 text-2xl font-black">
              ¿Listo para empezar a analizar?
            </h3>

            <p className="mb-10 text-lg leading-relaxed text-slate-400">
              Estoy disponible para incorporarme a equipos ágiles de datos de
              forma remota o híbrida. Si buscas a alguien motivado, estructurado
              y listo para aportar valor técnico, platiquemos.
            </p>

            <div className="space-y-7">
              <a
                href="mailto:chanucwilbertoliver@gmail.com"
                className="flex items-center gap-5 transition hover:text-cyan-400"
              >
                <span className="text-3xl text-cyan-400">✉</span>
                <span>
                  <strong className="block text-sm text-slate-400">
                    CORREO
                  </strong>
                  <span className="font-bold">
                    chanucwilbertoliver@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/wilbert-oliver-chan-uc-028229314/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 transition hover:text-cyan-400"
              >
                <span className="text-3xl text-cyan-400">in</span>
                <span>
                  <strong className="block text-sm text-slate-400">
                    LINKEDIN
                  </strong>
                  <span className="font-bold">Wilbert Chan</span>
                </span>
              </a>

              <a
                href="https://github.com/wilbert2004"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 transition hover:text-cyan-400"
              >
                <span className="text-3xl text-cyan-400">⌘</span>
                <span>
                  <strong className="block text-sm text-slate-400">
                    GITHUB
                  </strong>
                  <span className="font-bold">github.com/wilbert2004</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
