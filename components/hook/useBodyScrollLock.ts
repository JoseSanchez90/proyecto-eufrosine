// hooks/useBodyScrollLock.ts
import { useEffect, useRef } from 'react';

export function useBodyScrollLock(locked: boolean) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (locked) {
      // Guardar posición actual
      scrollYRef.current = window.scrollY;
      
      // Aplicar bloqueo de scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    }

    return () => {
      // Solo restaurar si aún está bloqueado (cuando el menú se cierra)
      if (locked) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.height = '';
        
        // Restaurar posición solo si no hemos hecho scroll programáticamente
        // Esto evita el problema de volver al inicio
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollYRef.current);
        });
      }
    };
  }, [locked]);
}