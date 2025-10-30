"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";

interface MenuItem {
  number: string;
  label: string;
  link: string;
  ariaLabel?: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface CustomStaggeredMenuProps {
  items: MenuItem[];
  socialItems?: SocialItem[];
}

export default function CustomStaggeredMenu({
  items,
  socialItems = [],
}: CustomStaggeredMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si está en móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // detectar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ajuste de velocidad para móvil
  const animationSpeed = isMobile ? 0.25 : 0.5;

  const itemVariants: Record<string, any> = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * (isMobile ? 0.05 : 0.1) + 0.3,
        duration: isMobile ? 0.2 : 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative z-40">
      {/* Botón del menú */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-3 lg:top-6 right-8 text-black text-lg font-medium z-30 bg-white px-4 py-2 rounded-full shadow-md hover:bg-zinc-300 transition cursor-pointer"
      >
        Menu +
      </button>

      {/* Overlay + Paneles */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Paneles en cascada */}
            {["#6368F8", "#2441E5", "#FFFFFF"].map((color, i) => (
              <motion.div
                key={color}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{
                  type: "tween",
                  duration: animationSpeed,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`fixed top-0 right-0 h-full ${
                  i === 2 ? "z-50" : "z-40"
                } w-[280px] sm:w-[380px]`}
                style={{ backgroundColor: color }}
              />
            ))}

            {/* Contenido principal */}
            <motion.aside
              key="menu-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: animationSpeed,
                delay: 0.25,
              }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[380px] bg-white shadow-2xl z-50 flex flex-col justify-between py-10 px-8"
            >
              {/* Cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 font-semibold cursor-pointer"
              >
                <IoCloseCircle className="w-10 h-10 hover:text-blue-600 transition" />
              </button>

              {/* Enlaces */}
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4 mt-12"
              >
                {items.map((item, i) => (
                  <motion.li
                    key={item.label}
                    variants={itemVariants}
                    custom={i}
                  >
                    <a
                      href={`#${item.link}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.link);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setIsOpen(false);
                      }}
                      className="flex gap-2 text-2xl md:text-4xl font-bold text-gray-800 hover:text-blue-600 transition"
                    >
                      <span>{item.label}</span>
                      <span className="text-sm font-normal text-blue-600">
                        {item.number}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Redes */}
              {socialItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="gap-4 mt-10"
                >
                  <p className="font-medium text-sm md:text-lg text-blue-800">
                    Redes Sociales
                  </p>
                  <div className="flex gap-6 mt-3 flex-wrap">
                    {socialItems.map((social) => (
                      <a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-600 transition text-xs md:text-lg"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
