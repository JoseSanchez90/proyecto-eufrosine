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
    image: <img src="/img/gift.png" alt="Gift" className="w-14 2xl:w-20" />,
    gift: <SpinningText className="text-sm 2xl:text-lg font-semibold" radius={7}>Haz tu pedido y recibe tu regalo gratis •</SpinningText>,
    note: "Promoción válida hasta agotar stock",
    whatsappMessage: "Hola, estoy interesado en el Combo Verano (S/15). ¿Podrías brindarme más información?",
  },
  {
    id: 2,
    title: "Promo Primavera Verano",
    subtitle: "Solución completa para tu hogar",
    price: "S/ 33",
    highlight: "Llévate 3 recargas por un solo precio",
    details: [
      "Recarga de 3 bidones de 20 Litros",
      "Ideal para familias o negocios pequeños",
      "Envio gratuito Huacho, Carquin y Hualmay",
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-14 2xl:w-20" />,
    gift: <SpinningText className="text-sm 2xl:text-lg font-semibold" radius={7}>Haz tu pedido y recibe tu regalo gratis •</SpinningText>,
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
      "10 Paquetes de 15 unidades de 625ml",
      "Adicionamos 2 paquetes de 15 unidades",
      "Envio gratuito Huacho, Carquin y Hualmay",
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-14 2xl:w-20" />,
    gift: <SpinningText className="text-sm 2xl:text-lg font-semibold" radius={7}>Haz tu pedido y recibe tu regalo gratis •</SpinningText>,
    note: "Promoción válida hasta agotar stock",
    whatsappMessage: "Hola, quiero más información sobre el Combo Personal Premium (S/22).",
  }
];
