import { SpinningText } from "./ui/spinning-text";

export const offers = [
  {
    id: 1,
    title: "Combo Verano",
    subtitle: "Siempre cuidamos tu salud",
    price: "S/ 15",
    highlight: "Ahorra 12%",
    details: [
      "1 Reposición de bidon de 20 Litros",
      "1 Botella de 7 Litros",
      "Envio gratuito Huacho, Carquin y Hualmay",
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-10 lg:w-12" />,
    gift: <SpinningText className="text-sm md:text-base font-normal md:font-medium" radius={5}>Haz tu pedido y recibe tu regalo •</SpinningText>,
    note: "Promoción válida hasta agotar stock",
    whatsappMessage: "Hola, estoy interesado en el Combo Verano (S/15). ¿Podrías brindarme más información?",
  },
  {
    id: 2,
    title: "Promo Primavera Verano",
    subtitle: "Solución completa para tu hogar",
    price: "S/ 33",
    highlight: "Aprovecha esta super promoción",
    details: [
      "Recarga de 3 bidones de 20 Litros",
      "Ideal para familias o negocios pequeños",
      "Envio gratuito Huacho, Carquin y Hualmay",
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-10 lg:w-12" />,
    gift: <SpinningText className="text-sm md:text-base font-normal md:font-medium" radius={5}>Haz tu pedido y recibe tu regalo •</SpinningText>,
    note: "Promoción válida hasta agotar stock",
    whatsappMessage: "Hola, me interesa la Promo Primavera Verano (S/33). Quisiera hacer un pedido.",
  },
  {
    id: 3,
    title: "Combo Personal Premium",
    subtitle: "Hidatacion al instante",
    price: "S/ 22",
    highlight: "Combina comodidad y ahorro",
    details: [
      "10 Paquetes (15 und por paquete) de 625ml",
      "Adicionamos 2 paquetes más",
      "Envio gratuito Huacho, Carquin y Hualmay",
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-10 lg:w-12" />,
    gift: <SpinningText className="text-sm md:text-base font-normal md:font-medium" radius={5}>Haz tu pedido y recibe tu regalo •</SpinningText>,
    note: "Promoción válida hasta agotar stock",
    whatsappMessage: "Hola, quiero más información sobre el Combo Personal Premium (S/22).",
  }
];
