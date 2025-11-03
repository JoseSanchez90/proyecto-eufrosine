// components/optimized-video.tsx
"use client";

import { useState, useRef, useEffect } from 'react';

export default function OptimizedVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(console.error);
    };

    video.addEventListener('canplay', handleCanPlay);
    
    // Precarga inteligente
    if (document.readyState === 'complete') {
      video.load();
    } else {
      window.addEventListener('load', () => video.load());
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <>
      {/* Video optimizado */}
      <video
        ref={videoRef}
        src="/video/background-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className={`absolute lg:fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Placeholder que se desvanece */}
      <div 
        className={`absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-purple-900 -z-10 transition-opacity duration-00 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </>
  );
}