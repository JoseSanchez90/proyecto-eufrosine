"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // tiempo de animación (mayor → más suave)
      lerp: 0.1, // valor entre 0 y 1, más bajo → más inercia
      smoothWheel: true, // suavizado para rueda de mouse
      wheelMultiplier: 0.8, // velocidad de scroll con rueda – más lento
      touchMultiplier: 0.7, // velocidad de scroll táctil
      easing: (t) => 1 - Math.pow(1 - t, 3), // por ejemplo un easing cúbico
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
