export default function HomePage() {
  const services = [
    {
      title: "Finanzas corporativas",
      description:
        "Acompañamos la gestión financiera para ordenar, proyectar y sostener decisiones estratégicas con información clara.",
    },
    {
      title: "Asesoramiento contable y administrativo",
      description:
        "Ordenamos circuitos, procesos e información para que la administración sea una herramienta de gestión.",
    },
    {
      title: "Profesionalización de áreas y procesos",
      description:
        "Diseñamos estructuras, roles, rutinas y herramientas para que la empresa crezca con mayor organización.",
    },
    {
      title: "Outsourcing contable",
      description:
        "Brindamos soporte externo para fortalecer el cumplimiento y mejorar la calidad de la información.",
    },
  ];

  const highlights = [
    "Reorganización administrativa y financiera",
    "Implementación y mejora de sistemas de gestión",
    "KPIs, reporting y tableros de BI",
    "Estructuración y acompañamiento a startups",
    "Mejora de procesos y circuitos operativos",
    "Soporte a directorios y toma de decisiones",
  ];

  const institutionalSections = [
    {
      title: "Qué hacemos",
      text: "Acompañamos a empresas en la organización de su gestión, fortaleciendo sus áreas administrativas, contables, financieras y operativas.",
    },
    {
      title: "Cómo trabajamos",
      text: "Desarrollamos propuestas a medida, con relevamiento, priorización, implementación y seguimiento cercano junto a cada equipo.",
    },
    {
      title: "A quién acompañamos",
      text: "Trabajamos con pymes, empresas familiares, startups y organizaciones que buscan ordenar, profesionalizar y crecer con información útil.",
    },
  ];

  const team = [
    {
      name: "Lisandro Alonso",
      role: "Socio",
      text: "Contador con más de 8 años de experiencia en gestión administrativa y financiera. Enfocado en estructurar procesos, mejorar información y acompañar decisiones estratégicas.",
    },
    {
      name: "Laura Samos",
      role: "Socia Fundadora",
      text: "Más de 25 años de experiencia en gestión integral de empresas, con foco en finanzas, administración y optimización de procesos.",
    },
    {
      name: "Emilia Rinaldoni",
      role: "Socia Fundadora",
      text: "Profesional en administración con más de 10 años de experiencia. Lidera proyectos de mejora de procesos y planificación estratégica.",
    },
  ];

  const clients = ["Bastías", "Brulinda", "Pont", "Obis", "Galerías Piazza", "Pluspet"];

  const steps = [
    {
      step: "01",
      title: "Entendemos el negocio",
      text: "Partimos del relevamiento de la situación actual, los objetivos y las necesidades reales de cada empresa.",
    },
    {
      step: "02",
      title: "Ordenamos y priorizamos",
      text: "Definimos focos de trabajo, procesos clave, responsables e información necesaria para avanzar con claridad.",
    },
    {
      step: "03",
      title: "Implementamos con acompañamiento",
      text: "Trabajamos junto al equipo, con seguimiento cercano y soluciones aplicadas al día a día de la organización.",
    },
    {
      step: "04",
      title: "Generamos información útil",
      text: "Transformamos datos en reportes y herramientas que ayuden a decidir, controlar y crecer.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-yellow-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-2xl font-semibold tracking-tight">Conzensus</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Gestión para empresas</div>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#servicios" className="transition hover:text-slate-900">Servicios</a>
            <a href="#metodologia" className="transition hover:text-slate-900">Metodología</a>
            <a href="#nosotros" className="transition hover:text-slate-900">Nosotros</a>
            <a href="#equipo" className="transition hover:text-slate-900">Equipo</a>
            <a href="#contacto" className="transition hover:text-slate-900">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-yellow-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              Un equipo que te acompaña conectando ideas y resultados para tu empresa
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Ordenamos la gestión para que tu empresa decida mejor.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              En Conzensus acompañamos a empresas en sus desafíos administrativos, contables, financieros y de procesos,
              con foco en generar estructura, información útil y resultados sostenibles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contacto" className="rounded-2xl bg-yellow-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5">
                Hablemos
              </a>
              <a href="#servicios" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-center md:grid-cols-2">
            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-xl shadow-slate-200/50">
              <div className="text-sm text-slate-500">Enfoque</div>
              <div className="mt-2 text-2xl font-semibold">Gestión con criterio</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Conectamos el trabajo operativo con información que ayude a la dirección a tomar decisiones.</p>
            </div>
            <div className="rounded-3xl border border-yellow-200 bg-yellow-500 p-6 text-white shadow-xl shadow-yellow-300/40 md:translate-y-8">
              <div className="text-sm text-white/80">Objetivo</div>
              <div className="mt-2 text-2xl font-semibold">Claridad y orden</div>
              <p className="mt-3 text-sm leading-6 text-white/80">Profesionalizamos áreas, procesos y reportes para que la empresa pueda crecer con bases más sólidas.</p>
            </div>
            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-xl shadow-slate-200/50 md:-translate-y-2">
              <div className="text-sm text-slate-500">Herramientas</div>
              <div className="mt-2 text-2xl font-semibold">Procesos + BI + sistemas</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Trabajamos sobre procesos, sistemas de gestión, tableros y rutinas administrativas.</p>
            </div>
            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-xl shadow-slate-200/50 md:translate-y-6">
              <div className="text-sm text-slate-500">Forma de trabajo</div>
              <div className="mt-2 text-2xl font-semibold">Cercanía real</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Nos involucramos con cada equipo para implementar mejoras concretas y sostenibles.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Servicios</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Acompañamiento en gestión, información y estructura.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Trabajamos con empresas que necesitan ordenar su funcionamiento, profesionalizar áreas y contar con información confiable y oportuna.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-yellow-200 bg-slate-50 p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {institutionalSections.map((item) => (
            <div key={item.title} className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="metodologia" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Metodología de trabajo</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Una forma de trabajo cercana, ordenada y aplicada al negocio.</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">Cada proyecto se construye en conjunto, priorizando lo importante y avanzando con entregas concretas que se integren al funcionamiento real de la empresa.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm text-slate-400">{item.step}</div>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Presentación institucional</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Una propuesta institucional clara, cercana y profesional.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">En Conzensus acompañamos a empresas que necesitan fortalecer su gestión desde una mirada integral. Trabajamos sobre la organización administrativa, financiera, contable y de procesos, buscando construir estructuras más claras, información más confiable y herramientas de gestión que aporten valor real al negocio.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Nuestra propuesta institucional se apoya en una forma de trabajo cercana, profesional y aplicada. Nos involucramos en cada proyecto con foco en ordenar, priorizar e implementar mejoras concretas que ayuden a la empresa a crecer con mayor solidez.</p>
          </div>

          <div className="rounded-[2rem] border border-yellow-200 bg-slate-50 p-8 shadow-sm">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Lo que buscamos generar</div>
            <div className="mt-6 space-y-4 text-slate-700">
              <div className="rounded-2xl bg-white p-4 shadow-sm">Procesos más claros y sostenibles</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Información confiable y oportuna</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Mayor soporte para la toma de decisiones</div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">Un acompañamiento cercano al equipo</div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Equipo</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">Un equipo que acompaña de forma cercana y profesional.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <div className="mt-1 text-sm text-yellow-600">{member.role}</div>
              <p className="mt-3 text-sm text-slate-600">{member.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold">Empresas que confían en nosotros</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 text-lg font-medium md:grid-cols-3">
            {clients.map((c) => (
              <div key={c}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-yellow-500 px-8 py-14 text-white shadow-2xl shadow-yellow-300/40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">Contacto</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">¿Te gustaría ordenar y fortalecer la gestión de tu empresa?</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">Podemos ayudarte a estructurar procesos, profesionalizar áreas y construir información que acompañe el crecimiento del negocio.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:contacto@conzensus.ar" className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900">contacto@conzensus.ar</a>
              <a href="https://www.linkedin.com/company/conzensusar" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

