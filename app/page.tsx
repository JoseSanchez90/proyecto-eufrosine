"use client";

import { Badge } from "@/components/ui/badge";
import { pacifico } from "@/lib/fonts";
import { Products } from "@/components/products";
import clsx from "clsx";
import { BadgeCheckIcon, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
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
import { FaFacebook, FaHashtag, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/components/utils/formatters";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const phone = "51903565918";
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error sending message");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función reutilizable para generar el enlace de WhatsApp
  const getWhatsAppUrl = (message: string) =>
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

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
          <div className="flex gap-6 md:gap-8 mt-4">
            <button
              onClick={() => scrollToSection("ofertas")}
              className="px-8 md:px-12 py-4 rounded-full bg-[#1F01B9] hover:bg-[#391FB6] text-base font-semibold text-white transition-colors cursor-pointer"
            >
              Ver Ofertas
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=51903565918"
              target="_blank"
              rel="noopener"
            >
              <button className="px-8 md:px-12 py-4 rounded-full bg-white hover:bg-zinc-200 text-base font-semibold text-black transition-colors cursor-pointer">
                Escribenos
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="bg-white">
        <div className="relative max-w-sm sm:max-w-5xl 2xl:max-w-7xl mx-auto pt-20 pb-10 xl:pt-20 xl:pb-10 2xl:pt-40 2xl:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-24 2xl:gap-38">
            <div className="flex flex-col text-start">
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
            </div>

            <div className="grid grid-rows-3 gap-10 xl:gap-7 2xl:gap-14">
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
            </div>
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
                {/* Imagen con efecto de zoom */}
                <div className="overflow-hidden w-1/2 rounded-[40px]">
                  <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                    {product.image}
                  </div>
                </div>

                {/* Texto */}
                <div className="p-4 w-1/2 h-full flex flex-col justify-between">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg sm:text-2xl text-start font-semibold text-[#1F01B9]">
                      {product.title}
                    </h3>
                    <p className="text-gray-700 text-start text-sm sm:text-base mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-xl font-bold text-blue-600">
                      {formatPrice(product.price)}
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
          {/* 🌐 Versión Desktop */}
          <div className="hidden md:flex justify-center items-center gap-12 p-4 mt-8 xl:mt-4 2xl:mt-10">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                className="flex flex-col h-full justify-between rounded-[40px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
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
                  <p className="text-2xl 2xl:text-3xl text-center font-bold text-blue-600 mb-2">
                    {offer.price}
                  </p>
                  <p className="text-sm text-green-600 text-center font-medium mb-4">
                    {offer.highlight}
                  </p>

                  <ul className="space-y-1 2xl:space-y-2 text-sm">
                    {offer.details.map((detail, i) => (
                      <li key={i} className="flex items-start sm:items-center">
                        <span className="mr-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-2">
                  <div className="w-full flex justify-center md:pt-6 md:pb-10 2xl:pt-8 2xl:pb-12">
                    <span className="relative md:left-7 md:top-8 2xl:left-10 2xl:top-12">
                      {offer.gift}
                    </span>
                    <span>{offer.image}</span>
                  </div>
                  <p className="text-sm text-gray-500">{offer.note}</p>

                  <a
                    href={getWhatsAppUrl(offer.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Chatea sobre ${offer.title} por WhatsApp`}
                    aria-label={`Abrir chat de WhatsApp para ${offer.title}`}
                    className="w-full"
                  >
                    <button className="w-full py-2 2xl:py-3 rounded-full bg-[#1F01B9] text-base 2xl:text-lg font-semibold text-white transition-colors hover:bg-[#391FB6] cursor-pointer">
                      Solicitar ahora
                    </button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Versión Mobile - Carousel */}
          <div className="block md:hidden relative">
            <div className="overflow-hidden py-8" ref={emblaRef}>
              <div className="flex">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex-[0_0_80%] min-w-0 pl-5 pr-5"
                  >
                    <Card className="h-full flex flex-col justify-between rounded-[40px] shadow-[8px_8px_20px_#bebebe,-8px_-8px_20px_#ffffff] w-full will-change-transform">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-center">
                          {offer.title}
                        </CardTitle>
                        <CardDescription className="text-center">
                          {offer.subtitle}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <p className="text-3xl text-center font-bold text-blue-600 mb-2">
                          {offer.price}
                        </p>
                        <p className="text-sm text-green-600 text-center font-medium mb-3">
                          {offer.highlight}
                        </p>
                        <ul className="text-sm">
                          {offer.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 mt-1">
                                <CheckCircle className="w-3 h-3 text-blue-600" />
                              </span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter className="flex flex-col gap-2">
                        <div className="w-full flex justify-center pt-4 pb-10">
                          <span className="relative left-7 top-8">
                            {offer.gift}
                          </span>
                          <span>{offer.image}</span>
                        </div>
                        <p className="text-xs text-gray-500">{offer.note}</p>

                        <a
                          href={getWhatsAppUrl(offer.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Chatea sobre ${offer.title} por WhatsApp`}
                          aria-label={`Abrir chat de WhatsApp para ${offer.title}`}
                          className="w-full"
                        >
                          <button className="w-full px-12 py-3 rounded-full bg-[#1F01B9] text-base font-semibold text-white transition-colors hover:bg-[#391FB6] cursor-pointer">
                            Solicitar ahora
                          </button>
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Puntos indicadores (solo móvil) */}
            <div className="flex justify-center gap-2 -mt-2">
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

      {/* SECCION EVENTOS */}
      <section id="eventos" className="bg-white">
        <div className="max-w-sm sm:max-w-5xl 2xl:max-w-6xl mx-auto min-h-screen w-full pt-20 pb-10 xl:pt-10 xl:pb-10 2xl:pt-20 2xl:pb-20">
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
            <div className="group h-fit md:h-70 2xl:h-80 flex flex-col md:flex-row-reverse items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
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

      {/* SECCION CONTACTO */}
      <section id="contactanos" className="bg-white">
        <div className="max-w-sm sm:max-w-5xl 2xl:max-w-6xl mx-auto min-h-screen w-full pt-20 pb-20 xl:pt-10 xl:pb-20 2xl:pt-20 2xl:pb-40">
          <div className="flex flex-col items-center justify-center text-center px-2 mb-12">
            <h2
              className={clsx(
                "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[#1F01B9] mb-3 2xl:mb-5",
                pacifico.className
              )}
            >
              Contáctanos
            </h2>
            <p className="text-base xl:text-lg 2xl:text-2xl text-gray-700">
              ¿Tienes alguna pregunta sobre nuestros productos?
              <br />
              Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 px-2">
            {/* Columna izquierda - Información de contacto */}
            <div className="flex flex-col">
              {/* Información de contacto */}
              <div className="w-full justify-center mb-6 md:mt-4 md:mb-4">
                <img
                  src="/img/Logo-Eufrosine-transparent.png"
                  alt="Logo"
                  className="w-60 object-cover mx-auto"
                />
              </div>

              <div className="p-2 md:p-6 flex flex-col space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-3 rounded-full shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-gray-900">Email</p>
                    <p className="text-neutral-600 text-sm md:text-base">
                      aguademesaeufrosineperu@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-3 rounded-full shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-gray-900">Ubicación</p>
                    <p className="text-neutral-600 text-sm md:text-base">
                      Hualmay, Huacho, Lima
                    </p>
                  </div>
                </div>
              </div>

              {/* Horario de atención */}
              <div className="p-6 bg-white transition-all">
                <h3 className="font-semibold mb-4 text-[#1F01B9] text-lg">
                  Horario de atención
                </h3>
                <div className="space-y-3 text-sm sm:text-base flex flex-col justify-around">
                  <div className="flex justify-between text-neutral-600">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium text-gray-900">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Sábados</span>
                    <span className="font-medium text-gray-900">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Domingos</span>
                    <span className="font-medium text-gray-900">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <Card className="bg-white rounded-[40px] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] p-2 md:p-6 border-0">
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 mb-3">
                    <div>
                      <Label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Nombre *
                      </Label>
                      <input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        className="w-full px-4 py-3 rounded-full border-2 border-neutral-300 bg-white text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Email *
                      </Label>
                      <input
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="w-full px-4 py-3 rounded-full border-2 border-neutral-300 bg-white text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Teléfono (Opcional)
                      </Label>
                      <input
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        className="w-full px-4 py-3 rounded-full border-2 border-neutral-300 bg-white text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+51 999 999 999"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Mensaje *
                      </Label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full text-sm px-4 py-3 rounded-3xl border-2 border-neutral-300 bg-white text-gray-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1F01B9] hover:bg-[#391FB6] text-white py-3 rounded-full text-base font-semibold transition-colors cursor-pointer"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Enviando..." : "Enviar"}
                  </button>
                  {status === "success" && (
                    <p className="text-green-500">
                      Mensaje enviado satisfactoriamente!
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500">Error al enviar mensaje.</p>
                  )}

                  <p className="text-xs text-center text-neutral-500 my-3">
                    Al enviar este formulario, aceptas nuestra política de
                    privacidad
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-white">
        <footer className="bg-[#1F01B9] py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:justify-items-center">
              {/* Marca */}
              <div className="grid grid-cols-2 md:flex md:flex-col justify-center items-center md:items-start">
                <div className="col-span-1">
                  <h3
                    className={clsx(
                      "text-4xl text-white mb-4",
                      pacifico.className
                    )}
                  >
                    eufrosine
                  </h3>
                  <p className="text-gray-200">
                    Agua de mesa de alta calidad para una vida saludable
                  </p>
                </div>
                <div className="col-span-1 pt-4">
                  <img
                    src="/img/Logo-Eufrosine-white.png"
                    alt="Logo"
                    className="w-full md:w-35 object-cover"
                  />
                </div>
              </div>

              {/* Enlaces Rapidos */}
              <div>
                <h4 className="text-white font-semibold mb-4">
                  Enlaces Rápidos
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("inicio")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Inicio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("nosotros")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Nosotros
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("productos")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Productos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("proceso")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Proceso
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("ofertas")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Ofertas
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document
                          .getElementById("contacto")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Contacto
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contacto */}
              <div>
                <h4 className="text-white font-semibold mb-4">Contacto</h4>
                <ul className="flex flex-col space-y-2 text-gray-200">
                  <li className="flex items-center gap-4">
                    <Phone className="w-4 h-4" /> 903 565 918
                  </li>
                  <li className="flex items-center gap-4">
                    <MapPin className="w-4 h-4" />Hualmay, Huacho, Lima
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-white font-semibold mb-4">Síguenos</h4>
                <div className="flex gap-6">
                  <a href="https://api.whatsapp.com/send?phone=51903565918" target="_blank" rel="noopener" className="cursor-pointer">
                    <FaWhatsapp
                      size={26}
                      className="text-white hover:text-green-600 transition-all duration-200"
                    />
                  </a>
                  <a href="https://www.facebook.com/aguaeufrosine" target="_blank" rel="noopener" className="cursor-pointer">
                    <FaFacebook
                      size={26}
                      className="text-white hover:text-blue-500 transition-all duration-200"
                    />
                  </a>
                  <a href="https://www.instagram.com/aguaeufrosine/" target="_blank" rel="noopener" className="cursor-pointer">
                    <FaInstagram
                      size={26}
                      className="text-white hover:text-orange-600 transition-all duration-200"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white pt-4 text-center text-gray-200">
              <p className="text-sm">
                © 2024 Eufrosine. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
