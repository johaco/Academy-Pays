// COMPONENTE QUE MUESTRA DOS TARJETAS DE PLANES DE PRECIOS
import PlanCard from "./PlanCard";

const plans = [
  {
    id: "starter",
    title: "Clases De Jiu Jitsu",
    description: "Con este plan accedes a todas las clases de Jiu Jitsu en Zona Este.",
    price: 20000,
    periodLabel: "/mes",
    features: [
      "Clases mixtas",
      "A partir de 13 años",
      "4 clases por semana",
      "Clases con Gi y NoGi",
      "Cede en Junin(Polideportivo La Colonia) y Rivadavia(Casa España)",
      "Sabados de Sparring",
    ],
    cta: "Pagar",
    url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=340866ac3165478e92ae452e64217c2f",
    logo: "/img/PARCHE-CICERO.jpg",
  },
  {
    id: "company",
    title: "Clases De MMA",
    description: "Con este plan accedes a todas las clases de MMA en Zona Este, ademas de Jiu JItsu y Kick Boxing.",
    price: 30000,
    periodLabel: "/mes",
    features: [
      "Clases mixtas",
      "A partir de 13 años",
      "Mas de 9 clases por semana",
      "Clases de Jiu Jitsu",
      "Clases de Kick Boxing",
      "Cede en Junin(Polideportivo La Colonia), Junin(Arrascaeta 120) y Rivadavia(Casa España)",
      "Sabados de Sparring",
    ],
    cta: "Pagar",
    url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=ec44ef3c47ee47119d3a1330adc45240",
    logo: "/img/picantes-mma.png",
  },
];

export default function PricingPlan() {
  return (
    <section className=" bg-[#0b1220] py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-3">
          Cuotas Mensuales
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto mb-10">
          Elije el plan que mejor se adapte a tus necesidades y comienza tu
          viaje en las artes marciales con nosotros. Si ya eres miembro,
          simplemente selecciona tu plan y continúa entrenando.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <PlanCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
