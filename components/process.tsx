"use client";

import {
  Beaker,
  CheckCircle,
  Filter,
  Truck,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 2xl:gap-12 w-full max-w-5xl 2xl:max-w-6xl mx-auto">
      <GridItem
        imageUrl="/img/company1.jpg"
        icon={<Filter className="h-5 w-5 text-white" />}
        title="Filtración Múltiple"
        description="Sistema de filtros avanzados que eliminan impurezas y sedimentos del agua en múltiples etapas."
      />

      <GridItem
        imageUrl="/img/company2.jpg"
        icon={<Beaker className="h-5 w-5 text-white" />}
        title="Purificación Avanzada"
        description="Proceso de ósmosis inversa y luz ultravioleta para garantizar la máxima pureza del agua."
      />

      <GridItem
        imageUrl="/img/control.jpg"
        icon={<CheckCircle className="h-5 w-5 text-white" />}
        title="Control de Calidad"
        description="Análisis constante en nuestro laboratorio para asegurar que cada botella cumple nuestros estándares."
      />

      <GridItem
        imageUrl="/img/company3.jpg"
        icon={<Truck className="h-5 w-5 text-white" />}
        title="Embotellado y Distribución"
        description="Embotellado automático en ambiente controlado y distribución eficiente a todo el país."
      />
    </ul>
  );
}

interface GridItemProps {
  imageUrl: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ imageUrl, icon, title, description }: GridItemProps) => {
  return (
    <li className="list-none">
      <div className="relative flex justify-center items-center h-full p-6 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-1"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/90 group-hover:bg-black/20 transition-colors duration-700 z-2" />

        {/* Contenido principal */}
        <div
          className="relative z-4 flex flex-col justify-end h-full p-6 text-white
          transition-all duration-700 ease-in-out 
          group-hover:opacity-0 group-hover:translate-y-5"
        >
          {/* Icono */}
          <div className="w-fit mx-auto rounded-lg border border-blue-600 bg-cyan-400/10 p-2 mb-3 md:backdrop-blur-sm transition-all duration-300">
            {icon}
          </div>

          {/* Texto */}
          <h3 className="text-xl font-semibold mb-2 text-cyan-300 drop-shadow-[0_0_10px_#00E0FF]">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-white">{description}</p>
        </div>
      </div>
    </li>
  );
};
