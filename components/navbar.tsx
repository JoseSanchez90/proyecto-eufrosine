"use client";

import CustomStaggeredMenu from "@/components/customStaggeredMenu";
import { pacifico } from "@/lib/fonts";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
  {
    label: "INICIO",
    number: "01",
    ariaLabel: "Ir a la página de inicio",
    link: "inicio",
  },
  {
    label: "NOSOTROS",
    number: "02",
    ariaLabel: "Conoce más sobre nosotros",
    link: "nosotros",
  },
  {
    label: "PRESENTACIONES",
    number: "03",
    ariaLabel: "Ver nuestras presentaciones de productos",
    link: "productos",
  },
  {
    label: "PROCESO",
    number: "04",
    ariaLabel: "Descubre nuestro proceso de purificación del agua",
    link: "proceso",
  },
  {
    label: "OFERTAS",
    number: "05",
    ariaLabel: "Explorar nuestras ofertas y promociones",
    link: "ofertas",
  },
  {
    label: "EVENTOS",
    number: "06",
    ariaLabel: "Conoce nuestros patrocinios y colaboraciones",
    link: "eventos",
  },
  {
    label: "CONTÁCTANOS",
    number: "07",
    ariaLabel: "Ir a la sección de contacto",
    link: "contactanos",
  },
];

const socialItems = [
  { label: "Facebook", link: "https://www.facebook.com/" },
  { label: "Instagram", link: "https://www.instagram.com/" },
];

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="fixed w-full top-3 lg:top-5 left-0 z-40 px-6 flex justify-between items-center">
      {/* LOGO ANIMADO */}
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          const inicio = document.getElementById("inicio");
          if (inicio) {
            inicio.scrollIntoView({ behavior: "smooth" });
          }
        }}
        animate={{ width: isHovered ? "11rem" : "3.5rem" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="hidden cursor-pointer overflow-hidden bg-[#1F01B9] border-2 border-gray-200 rounded-full h-14 xl:flex items-center justify-start shadow-md"
      >
        <div className="flex items-center pl-3 pb-5">
          <p
            className={clsx(
              "text-6xl font-bold text-white select-none",
              pacifico.className
            )}
          >
            e
          </p>

          <motion.span
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ delay: isHovered ? 0.2 : 0, duration: 0.4 }}
            className="text-3xl mt-5 ml-1 text-white font-semibold select-none"
          >
            ufrosine
          </motion.span>
        </div>
      </motion.button>

      <button
        onClick={() => {
          const inicio = document.getElementById("inicio");
          if (inicio) {
            inicio.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="xl:hidden cursor-pointer overflow-hidden bg-[#1F01B9] border border-gray-200 rounded-full h-11.5 w-11.5 flex items-center justify-start shadow-md"
      >
        <div className="flex items-center mx-auto">
          <p
            className={clsx(
              "text-5xl font-bold text-white mb-4",
              pacifico.className
            )}
          >
            e
          </p>
        </div>
        <span className="text-white font-semibold"></span>
      </button>

      {/* MENÚ */}
      <CustomStaggeredMenu items={menuItems} socialItems={socialItems} />
    </header>
  );
}

export default Navbar;
