// COMPONENTE QUE MUESTRA UNA TARJETA DE PLAN DE PRECIOS
function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 mr-3"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5l3 3 8-8"
        stroke="#34D399"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlanCard({
  title,
  description,
  price,
  periodLabel,
  features,
  cta,
  url,
}) {
  return (
    <article className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-md">

      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 rounded-full border border-slate-700 shadow-md p-2">
        <img src={logo} alt={`${title} logo`} className="w-16 h-16 object-contain" />
      </div>


      <header className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-lg">{description}</p>
      </header>

      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-6xl md:text-8xl font-extrabold text-white">
            ${price.toLocaleString("es-AR")}
          </span>
          <span className="text-slate-400 text-base self-end">
            {periodLabel}
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start text-slate-200 text-lg">
            <CheckIcon />
            <span className="leading-tight">{f}</span>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <a
          href={url}
          className="inline-block w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium shadow-sm transition text-center"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
