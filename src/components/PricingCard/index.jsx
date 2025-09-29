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
      "Sabados de Sparring",
      "Clases con Gi y NoGi",
      "Cede en Junin y Rivadavia",
    ],
    cta: "Pagar",
    url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=05cc5608396f4ed69278fbfeea418492",
    logo: "/dist/assets/img/PARCHE-CICERO.jpg",
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
      "Clases de Jiu Jitsu",
      "Clases de Kick Boxing",
      "Mas de 9 clases por semana",
      "Sabados de Sparring",
    ],
    cta: "Pagar",
    url: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=0112ea31f9534f4fb7e79936e637f504",
    logo: "/dist/assets/img/picantes-mma.png",
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
