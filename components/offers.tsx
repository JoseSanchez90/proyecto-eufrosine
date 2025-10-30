import { SpinningText } from "./ui/spinning-text";

export const offers = [
  {
    id: 1,
    title: "Pack Familiar 625ml",
    subtitle: "Ideal para reuniones y consumo diario",
    price: "S/ 70",
    highlight: "Ahorra 15%",
    details: [
      "10 paquetes de botellas de 625ml",
      "Cada paquete contiene 15 unidades",
      "Agua purificada y embotellada al vacío",
      "Entrega gratuita en zonas cercanas"
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-16 md:w-24" />,
    gift: <SpinningText className="text-sm lg:text-2xl font-semibold" radius={7}>Haz tu pedido y recibe un regalo gratis •</SpinningText>,
    note: "Promoción válida hasta agotar stock"
  },
  {
    id: 2,
    title: "Oferta 3 Botellas",
    subtitle: "Hidratación al instante",
    price: "S/ 12",
    highlight: "Llévate 3 botellas por un solo precio",
    details: [
      "3 unidades de botella de 625ml",
      "Perfectas para llevar al trabajo o al gym",
      "Plástico reciclable y seguro",
      "Descuento exclusivo por compra directa"
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-16 md:w-24" />,
    gift: <SpinningText className="text-sm lg:text-2xl font-semibold" radius={7}>Haz tu pedido y recibe un regalo gratis •</SpinningText>,
    note: "Promoción válida hasta agotar stock"
  },
  {
    id: 3,
    title: "Combo Familiar Premium",
    subtitle: "Solución completa para tu hogar",
    price: "S/ 22",
    highlight: "Combina comodidad y ahorro",
    details: [
      "1 bidón de 20 litros",
      "1 botella adicional de 7 litros",
      "Ideal para familias o negocios pequeños",
      "Entrega programada y recarga disponible"
    ],
    image: <img src="/img/gift.png" alt="Gift" className="w-16 md:w-24" />,
    gift: <SpinningText className="text-sm lg:text-2xl font-semibold" radius={7}>Haz tu pedido y recibe un regalo gratis •</SpinningText>,
    note: "Promoción válida hasta agotar stock"
  }
];
