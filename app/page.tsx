"use client";

import { Badge } from "@/components/ui/badge";
import { pacifico } from "@/lib/fonts";
import { Products } from "@/components/products";
import clsx from "clsx";
import { motion } from "framer-motion";
import { BadgeCheckIcon, CheckCircle } from "lucide-react";
import { GlowingEffectDemoSecond } from "@/components/process";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { offers } from "@/components/offers";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaHashtag } from "react-icons/fa";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const Valores = [
    {
      Icon: (
        <img
          src="/svg/fluent-color--ribbon-star-20.svg"
          alt="Mision"
          className="w-22 h-22"
        />
      ),
      title: "Nuestra Misión",
      description:
        "Proporcionar agua de la más alta calidad, promoviendo la salud y el bienestar de nuestras comunidades mientras cuidamos el medio ambiente.",
    },
    {
      Icon: (
        <img
          src="/svg/fluent-color--lightbulb-filament-20.svg"
          alt="Vision"
          className="w-22 h-22"
        />
      ),
      title: "Nuestra Visión",
      description:
        "Ser la empresa de agua de mesa más reconocida y confiable, innovando constantemente en procesos sostenibles y tecnología.",
    },
    {
      Icon: (
        <img
          src="/svg/fluent-color--heart-20.svg"
          alt="Valores"
          className="w-22 h-22"
        />
      ),
      title: "Nuestros Valores",
      description:
        "Integridad, compromiso con la calidad, responsabilidad ambiental y servicio excepcional al cliente.",
    },
  ];

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <main className="relative w-full h-full">
      {/* SECCIÓN INICIO */}
      <section id="inicio" className="relative h-screen w-full">
        <video
          src="/video/background-mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute lg:fixed inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute h-full inset-0 bg-black/50 -z-10" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className={clsx(
              "text-4xl md:text-5xl 2xl:text-7xl mb-8 text-white font-bold",
              pacifico.className
            )}
          >
            Hidratación Pura, Vida Sana
          </h1>
          <p className="max-w-4xl text-xl md:text-2xl 2xl:text-3xl text-gray-200 mb-8 font-semibold">
            Eufrosine te ofrece agua purificada de la más alta calidad, esencial
            para tu bienestar diario y salud integral.
          </p>
          <button className="px-12 py-4 rounded-full bg-[#1F01B9] text-base font-semibold text-white transition-colors hover:bg-[#391FB6] border-2 cursor-pointer">
            Ver Ofertas
          </button>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="bg-white">
        <div className="relative max-w-sm sm:max-w-5xl 2xl:max-w-7xl mx-auto pt-20 pb-10 xl:pt-20 xl:pb-10 2xl:pt-40 2xl:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-24 2xl:gap-38">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col text-start"
            >
              <h2
                className={clsx(
                  "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[#1F01B9] mb-3 2xl:mb-5",
                  pacifico.className
                )}
              >
                Quiénes Somos
              </h2>
              <p className="text-base xl:text-lg 2xl:text-xl text-gray-700 leading-snug 2xl:leading-relaxed mb-5">
                Eufrosine es una empresa líder en la producción y distribución
                de agua de mesa premium. Desde nuestros inicios, nos hemos
                comprometido con la calidad, pureza y excelencia en cada gota de
                agua que producimos.
              </p>
              <p className="text-base xl:text-lg 2xl:text-xl text-gray-700 leading-snug 2xl:leading-relaxed">
                Nuestra planta de producción cuenta con tecnología de última
                generación y un equipo de profesionales dedicados a garantizar
                que cada botella cumpla con los más altos estándares de calidad
                internacional. Creemos que el agua pura es un derecho
                fundamental y trabajamos cada día para hacerla accesible a
                todos.
              </p>

              <div className="flex items-center justify-center gap-5 sm:gap-6 2xl:gap-10 mt-6 2xl:mt-12">
                <div className="rounded-[30px] p-4 sm:p-6 bg-[#f5f5f5] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                  <h2 className="text-2xl 2xl:text-3xl text-blue-600 font-extrabold">
                    5 +
                  </h2>
                  <p className="text-sm 2xl:text-base text-gray-500">
                    Años compartiendo
                  </p>
                </div>
                <div className="rounded-[30px] p-4 sm:p-6 bg-[#f5f5f5] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                  <h2 className="text-2xl 2xl:text-3xl text-blue-600 font-extrabold">
                    1k +
                  </h2>
                  <p className="text-sm 2xl:text-base text-gray-500">
                    Clientes satisfechos
                  </p>
                </div>
                <div className="rounded-[30px] p-4 sm:p-6 bg-[#f5f5f5] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                  <h2 className="text-2xl 2xl:text-3xl text-blue-600 font-extrabold">
                    100%
                  </h2>
                  <p className="text-sm 2xl:text-base text-gray-500">
                    Calidad garantizada
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="grid grid-rows-3 gap-10 xl:gap-7 2xl:gap-14"
            >
              {Valores.map((valores, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 rounded-[50px] items-center p-4 2xl:p-6 gap-4 2xl:gap-0 bg-[#f5f5f5] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
                >
                  <div className="col-span-1">{valores.Icon}</div>
                  <div className="col-span-4 text-start">
                    <h2 className="text-base 2xl:text-lg font-semibold">
                      {valores.title}
                    </h2>
                    <p className="text-sm 2xl:text-base">
                      {valores.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="bg-white">
        <div className="max-w-sm sm:max-w-5xl 2xl:max-w-6xl mx-auto pt-20 pb-10 xl:pt-20 xl:pb-10 2xl:pt-40 2xl:pb-20">
          <div className="w-full h-full text-center">
            <h2
              className={clsx(
                "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[#1F01B9] mb-3 2xl:mb-5",
                pacifico.className
              )}
            >
              Nuestras Presentaciones
            </h2>
            <p className="text-base xl:text-lg 2xl:text-2xl text-gray-700 xl:px-28">
              Ya sea en casa, en el trabajo o durante tus actividades diarias,
              nuestras presentaciones están pensadas para acompañarte siempre.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-8 2xl:mt-10">
            {Products.map((product, i) => (
              <div
                key={i}
                className="group h-auto flex items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
              >
                {/* 🖼️ Imagen con efecto de zoom */}
                <div className="overflow-hidden w-1/2 rounded-[40px]">
                  <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                    {product.image}
                  </div>
                </div>

                {/* 📄 Texto */}
                <div className="p-4 text-start space-y-2 sm:space-y-4 w-1/2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1F01B9]">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {product.description}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500 text-white dark:bg-blue-600"
                  >
                    <BadgeCheckIcon />
                    {product.amount}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PROCESO */}
      <section id="proceso" className="bg-white">
        <div className="min-h-screen w-full mx-auto pt-20 pb-10 xl:pt-20 xl:pb-10 2xl:pt-28 2xl:pb-20">
          <div className="z-10 flex flex-col items-center justify-center text-center px-6">
            <h2
              className={clsx(
                "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[#1F01B9] mb-3 2xl:mb-5",
                pacifico.className
              )}
            >
              Nuestro Proceso
            </h2>
            <p className="text-lg xl:text-lg 2xl:text-2xl text-gray-700">
              Cada gota pasa por un riguroso proceso de purificación con
              tecnología avanzada
            </p>
            <div className="mt-8 2xl:mt-10">
              <GlowingEffectDemoSecond />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN COMPROMISO */}
      <section className="flex flex-col justify-center items-center py-18 bg-linear-to-tr from-blue-800 via-blue-600 to-blue-400">
        <div className="w-full max-w-sm px-4 xl:max-w-6xl flex flex-col xl:grid xl:grid-cols-5 items-center gap-14 xl:gap-16">
          <div className="xl:col-span-2">
            <img
              src="/img/bottle.jpg"
              alt="Bottle"
              className="w-full h-full object-cover rounded-[40px] shadow-[8px_8px_30px_#575A99,-8px_-8px_30px_#8D91E3]"
            />
          </div>
          <div className="xl:col-span-3 space-y-4">
            <div>
              <h2
                className={clsx(
                  "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-white mb-4 lg:mb-6",
                  pacifico.className
                )}
              >
                Certificaciones y Estándares
              </h2>
              <p className="max-w-3xl text-base xl:text-lg 2xl:text-xl text-zinc-200">
                Cumplimos con todas las normativas nacionales e internacionales
                de calidad del agua. Nuestros procesos están certificados por
                organismos reguladores y realizamos auditorías periódicas.
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckCircle className="w-4 text-blue-700" />
                <p className="text-blue-700">Certificación ISO 9001</p>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckCircle className="w-4 text-blue-700" />
                <p className="text-blue-700">Normas sanitarias nacionales</p>
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <CheckCircle className="w-4 text-blue-700" />
                <p className="text-blue-700">
                  Análisis microbiológicos constantes
                </p>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* SECCION DE OFERTAS ESPECIALES */}
      <section id="ofertas" className="bg-white">
        <div className="min-h-screen w-full mx-auto pt-20 pb-10 xl:pt-10 xl:pb-10 2xl:pt-20 2xl:pb-20">
          <div className="flex flex-col items-center justify-center text-center px-6">
            <h2
              className={clsx(
                "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[#1F01B9] mb-3 2xl:mb-5",
                pacifico.className
              )}
            >
              Ofertas Especiales
            </h2>
            <p className="text-base xl:text-lg 2xl:text-2xl text-gray-700">
              Aprovecha nuestras promociones y ahorra en tus compras
            </p>
          </div>

          {/* Versión Desktop - Layout original */}
          <div className="hidden md:flex justify-center items-center gap-12 p-4 mt-8 xl:mt-4 2xl:mt-10">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                className="flex flex-col md:w- md:h-130 2xl:w-90 2xl:h-150 justify-between rounded-[40px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
              >
                <CardHeader>
                  <CardTitle className="text-lg 2xl:text-xl font-bold text-center">
                    {offer.title}
                  </CardTitle>
                  <CardDescription className="text-center text-sm 2xl:text-base">
                    {offer.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl 2xl:text-3xl text-center font-bold text-blue-600 mb-2">
                    {offer.price}
                  </div>
                  <p className="text-sm text-green-600 text-center font-medium mb-4">
                    {offer.highlight}
                  </p>
                  <ul className="space-y-1 2xl:space-y-2 text-sm">
                    {offer.details.map((detail, i) => (
                      <li key={i} className="flex items-start sm:items-center">
                        <span className="mr-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </span>{" "}
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="w-full flex justify-center mt-11 mb-6 2xl:mt-12 2xl:mb-6">
                    <span className="relative md:left-8 md:top-10 2xl:left-11 2xl:top-12">
                      {offer.gift}
                    </span>
                    <span>{offer.image}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">{offer.note}</p>
                  <button className="w-full py-2 2xl:py-3 rounded-full bg-[#1F01B9] text-base 2xl:text-lg font-semibold text-white transition-colors hover:bg-[#391FB6] border-2 border-gray-300 cursor-pointer">
                    Solicitar ahora
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Versión Mobile - Carousel */}
          <div className="block md:hidden relative">
            <div className="overflow-hidden py-8" ref={emblaRef}>
              {" "}
              {/* Agregado py-4 para espacio vertical */}
              <div className="flex">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex-[0_0_80%] min-w-0 pl-5 pr-5" // Reducido a 80% y más padding
                  >
                    <Card className="h-140 flex flex-col justify-between rounded-[40px] shadow-[8px_8px_20px_#bebebe,-8px_-8px_20px_#ffffff] md:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] w-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-center">
                          {offer.title}
                        </CardTitle>
                        <CardDescription className="text-center">
                          {offer.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl text-center font-bold text-blue-600 mb-2">
                          {offer.price}
                        </div>
                        <p className="text-sm text-green-600 text-center font-medium mb-3">
                          {offer.highlight}
                        </p>
                        <ul className="text-sm">
                          {offer.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 mt-1">
                                <CheckCircle className="w-3 h-3 text-blue-600" />
                              </span>{" "}
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="w-full flex justify-center pt-10 pb-2">
                          <span className="relative left-8 top-9">
                            {offer.gift}
                          </span>
                          <span>{offer.image}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col gap-2">
                        <p className="text-xs text-gray-500">{offer.note}</p>
                        <button className="w-full px-12 py-3 rounded-full bg-[#1F01B9] text-base font-semibold text-white transition-colors hover:bg-[#391FB6] border-2 border-gray-300 cursor-pointer">
                          Solicitar ahora
                        </button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Puntos indicadores (solo móvil) */}
            <div className="flex justify-center gap-2 mt-1">
              {offers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={clsx(
                    "w-2 h-2 rounded-full transition-all",
                    i === selectedIndex ? "bg-[#1F01B9] w-4" : "bg-gray-300"
                  )}
                  aria-label={`Ir a oferta ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="eventos" className="bg-white">
        <div className="max-w-sm sm:max-w-5xl 2xl:max-w-6xl mx-auto min-h-screen w-full pt-20 pb-10 xl:pt-10 xl:pb-10 2xl:pt-40 2xl:pb-20">
          <div className="flex flex-col items-center justify-center text-center px-6">
            <h2
              className={clsx(
                "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[#1F01B9] mb-3 2xl:mb-5",
                pacifico.className
              )}
            >
              Apoyamos Eventos
            </h2>
            <p className="text-base xl:text-lg 2xl:text-2xl text-gray-700">
              Aprovecha nuestras promociones y ahorra en tus compras
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 mt-8 2xl:mt-12 px-4 md:px-0">
            {/* EVENTO 1 */}
            <div className="group h-fit md:h-70 2xl:h-80 flex flex-col md:flex-row items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
              {/* Imagen con efecto de zoom */}
              <div className="overflow-hidden w-full md:w-3/7 rounded-[40px]">
                <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                  <img
                    src="/img/evento-1.jpg"
                    alt="Botella 500ml"
                    className="w-full h-full object-cover rounded-[40px]"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="p-4 md:p-6 2xl:px-8 2xl:py-6 text-start w-full md:w-3/5 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1F01B9]">
                    Campeonato Interno de Exalumnos – UNJFSC
                  </h3>
                  <p className="text-gray-700 text-base 2xl:text-lg mb-4">
                    La marca Eufrosine estuvo presente en el Campeonato Interno
                    de Exalumnos de la Universidad Nacional José Faustino
                    Sánchez Carrión, apoyando la unión, la energía y la
                    hidratación de cada participante. Un evento lleno de
                    compañerismo y deporte donde el agua de calidad acompañó
                    cada momento.
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-4">
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-xs md:text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Universidad
                  </Badge>
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-xs md:text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    ExAlumnos
                  </Badge>
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-xs md:text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Eufrosine
                  </Badge>
                </div>
              </div>
            </div>

            {/* EVENTO 2 */}
            <div className="group h-fit md:h-70 2xl:h-80 flex flex-col md:flex-row items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
              {/* Imagen con efecto de zoom */}
              <div className="overflow-hidden w-full md:w-3/7 rounded-[40px]">
                <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                  <img
                    src="/img/evento-2.jpg"
                    alt="Botella 500ml"
                    className="w-full h-full object-cover rounded-[40px]"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="p-4 md:p-6 2xl:px-8 2xl:py-6 text-start w-full md:w-3/5 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1F01B9]">
                    Campeonato Relámpago de Fútbol
                  </h3>
                  <p className="text-gray-700 text-base 2xl:text-lg mb-4">
                    En un emocionante campeonato relámpago, los equipos
                    demostraron su talento, esfuerzo y trabajo en equipo bajo el
                    sol. Eufrosine acompañó a los jugadores brindando
                    hidratación pura y frescura durante todo el torneo,
                    promoviendo el deporte y el bienestar físico.
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-4">
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Fútbol
                  </Badge>
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Deporte
                  </Badge>
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Hidratación
                  </Badge>
                </div>
              </div>
            </div>

            {/* EVENTO 3 */}
            <div className="group h-fit md:h-70 2xl:h-80 flex flex-col md:flex-row items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
              {/* 🖼️ Imagen con efecto de zoom */}
              <div className="overflow-hidden w-full md:w-3/7 rounded-[40px]">
                <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                  <img
                    src="/img/evento-3.jpg"
                    alt="Botella 500ml"
                    className="w-full h-full object-cover rounded-[40px]"
                  />
                </div>
              </div>

              {/* 📄 Texto */}
              <div className="p-4 md:p-6 2xl:px-8 2xl:py-6 text-start w-full md:w-3/5 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1F01B9]">
                    Campeonato de Vóley
                  </h3>
                  <p className="text-gray-700 text-base 2xl:text-lg mb-4">
                    Las jugadoras y jugadores vivieron una jornada intensa de
                    competencia y diversión en el campeonato de vóley, donde
                    Eufrosine fue parte fundamental al mantenerlos frescos e
                    hidratados. Una experiencia que refuerza nuestro compromiso
                    con el deporte y la vida saludable.
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-4">
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Vóley
                  </Badge>
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    VidaSaludable
                  </Badge>
                  <Badge className="py-1 px-2 bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Energía
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
