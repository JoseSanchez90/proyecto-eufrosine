"use client";

import { Badge } from "@/components/ui/badge";
import { museomoderno, pacifico } from "@/lib/fonts";
import clsx from "clsx";
import { CheckCircle, Mail, MapPin } from "lucide-react";
import { GlowingEffectDemoSecond } from "@/components/process";
import { useEffect, useState } from "react";
import { FaFacebook, FaHashtag, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { PrivacyPolicy } from "@/components/privacyPolicy";
import { TermsAndConditions } from "@/components/termsAndConditions";
import { ComplaintBook } from "@/components/complaintBook";
import Swal from "sweetalert2";
import OffersCarousel from "@/components/offersCarousel";
import PresentationsCarousel from "@/components/productsCarousel";
import { BiSolidOffer } from "react-icons/bi";
import OptimizedVideo from "@/components/optimized-video";

export default function Home() {
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
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showComplaintBook, setShowComplaintBook] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error sending message");

      // Alerta de éxito con SweetAlert2
      await Swal.fire({
        title: "¡Mensaje Enviado!",
        html: `
        <div class="text-center">
          <h3 class="text-xl font-bold text-[#1F01B9] mb-2">¡Gracias por contactarnos!</h3>
          <p class="text-gray-600">Hemos recibido tu mensaje correctamente.</p>
          <p class="text-gray-600 mt-2">Te responderemos dentro de las 24 horas.</p>
        </div>
      `,
        icon: "success",
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
        },
        background: "#f0f9ff",
        confirmButtonColor: "#1F01B9",
        confirmButtonText: "Entendido",
        customClass: {
          popup: "rounded-3xl shadow-2xl border-2 border-[#1F01B9]",
          confirmButton: "rounded-2xl px-6 py-3 font-semibold",
        },
      });

      // Limpiar formulario
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);

      // Alerta de error con SweetAlert2
      await Swal.fire({
        title: "¡Hubo un error!",
        text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente.",
        icon: "error",
        showClass: {
          popup: `
          animate__animated
          animate__shakeX
          animate__faster
        `,
        },
        background: "#fef2f2",
        confirmButtonColor: "#dc2626",
        confirmButtonText: "Reintentar",
        customClass: {
          popup: "rounded-3xl shadow-2xl border-2 border-red-500",
          confirmButton: "rounded-2xl px-6 py-3 font-semibold",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Bloquear scroll del body
  useEffect(() => {
    if (showPrivacyPolicy || showTerms || showComplaintBook) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showPrivacyPolicy, showTerms, showComplaintBook]);

  return (
    <main className="h-full w-full">
      {/* SECCIÓN INICIO */}
      <section id="inicio" className="relative h-screen">
        <OptimizedVideo />
        <div className="absolute h-full inset-0 bg-black/50 -z-10" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className={clsx(
              "text-3xl md:text-4xl 2xl:text-7xl mb-8 text-white font-bold",
              pacifico.className
            )}
          >
            Hidratación Pura, Vida Sana
          </h1>
          <p className="max-w-4xl text-lg md:text-2xl 2xl:text-3xl text-gray-200 mb-8 font-semibold">
            Eufrosine te ofrece agua purificada de la más alta calidad, esencial
            para tu bienestar diario y salud integral.
          </p>
          <div className="flex gap-4 md:gap-8 mt-4">
            <button
              onClick={() => scrollToSection("ofertas")}
              className="flex items-center gap-2 px-4 md:px-8 lg:px-12 py-4 rounded-full bg-[#1F01B9] hover:bg-[#391FB6] text-base font-semibold text-white transition-colors cursor-pointer"
            >
              <BiSolidOffer className="shrink-0" size={18} />
              Ver Ofertas
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=51903565918"
              target="_blank"
              rel="noopener"
            >
              <button className="flex items-center gap-2 px-4 md:px-8 lg:px-12 py-4 rounded-full bg-white hover:bg-zinc-200 text-base font-semibold text-black transition-colors cursor-pointer">
                <FaWhatsapp className="shrink-0 text-green-700" size={18} />
                Escribenos
              </button>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-neutral-100">
        {/* SECCIÓN NOSOTROS */}
        <section
          id="nosotros"
          className="max-w-sm sm:max-w-xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-4 pt-20 pb-10 xl:pt-20 xl:pb-10 2xl:pt-30 2xl:pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 2xl:gap-38">
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

              <div className="flex items-center justify-center gap-4 lg:gap-6 2xl:gap-10 pt-8 2xl:pt-12">
                <div className="rounded-[30px] p-4 sm:p-6 bg-[#f5f5f5] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                  <h2 className="text-xl xl:text-3xl text-blue-600 font-extrabold">
                    5 +
                  </h2>
                  <p className="text-xs xl:text-base text-gray-500">
                    Años compartiendo
                  </p>
                </div>
                <div className="rounded-[30px] p-4 sm:p-6 bg-[#f5f5f5] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                  <h2 className="text-xl xl:text-3xl text-blue-600 font-extrabold">
                    1k +
                  </h2>
                  <p className="text-xs xl:text-base text-gray-500">
                    Clientes satisfechos
                  </p>
                </div>
                <div className="rounded-[30px] p-4 sm:p-6 bg-[#f5f5f5] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                  <h2 className="text-xl xl:text-3xl text-blue-600 font-extrabold">
                    100%
                  </h2>
                  <p className="text-xs xl:text-base text-gray-500">
                    Calidad garantizada
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-3 gap-10 xl:gap-7 2xl:gap-14">
              {Valores.map((valores, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 rounded-[30px] items-center p-4 2xl:p-6 gap-4 2xl:gap-0 bg-[#f5f5f5] shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
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
        </section>

        {/* PRESENTACIONES */}
        <section
          id="productos"
          className="max-w-md sm:max-w-xl lg:max-w-5xl 2xl:max-w-7xl mx-auto pt-20 pb-10 xl:pt-20 xl:pb-10 2xl:pt-30 2xl:pb-20"
        >
          <div className="w-full h-full text-center px-4">
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

          {/* Versión Desktop - Grid normal */}
          <PresentationsCarousel />
        </section>

        {/* SECCIÓN PROCESO */}
        <section
          id="proceso"
          className="min-h-screen w-full mx-auto pt-20 pb-20 xl:pt-20 xl:pb-10 2xl:pt-28 2xl:pb-20"
        >
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
        </section>

        {/* SECCIÓN COMPROMISO */}
        <section className="max-w-xs md:max-w-xl lg:max-w-5xl 2xl:max-w-6xl flex flex-col justify-center items-center py-18 bg-linear-to-tr from-blue-800 via-blue-500 to-blue-300 rounded-[40px] px-4 mx-auto shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
          <div className="w-full max-w-sm px-4 xl:max-w-6xl flex flex-col lg:flex-row justify-center items-center gap-14 xl:gap-16">
            <div className="space-y-4">
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
                  Cumplimos con todas las normativas nacionales e
                  internacionales de calidad del agua. Nuestros procesos están
                  certificados por organismos reguladores y realizamos
                  auditorías periódicas.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-fit px-2 py-1 text-xs bg-white rounded-full flex items-center gap-2">
                  <CheckCircle className="text-blue-700" size={14} />
                  <p className="text-blue-700">Certificación ISO 9001</p>
                </div>
                <div className="w-fit px-2 py-1 text-xs bg-white rounded-full flex items-center gap-2">
                  <CheckCircle className="text-blue-700" size={14}/>
                  <p className="text-blue-700">Normas sanitarias nacionales</p>
                </div>
                <div className="w-fit px-2 py-1 text-xs bg-white rounded-full flex items-center gap-2">
                  <CheckCircle className="text-blue-700" size={14}/>
                  <p className="text-blue-700">
                    Análisis microbiológicos constantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCION DE OFERTAS ESPECIALES */}
        <section
          id="ofertas"
          className="w-full mx-auto pt-20 pb-10 xl:pt-10 xl:pb-10 2xl:pt-20 2xl:pb-20"
        >
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

          {/* Versión Desktop & Mobile */}
          <OffersCarousel />
        </section>

        {/* SECCION EVENTOS */}
        <section
          id="eventos"
          className="max-w-sm sm:max-w-5xl 2xl:max-w-6xl mx-auto min-h-screen w-full pt-10 pb-10 xl:pt-10 xl:pb-10 2xl:pt-20 2xl:pb-20"
        >
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
          <div className="grid grid-cols-1 gap-8 sm:gap-12 mt-8 2xl:mt-12 px-6">
            {/* EVENTO 1 */}
            <div className="group h-fit xl:h-70 2xl:h-75 flex flex-col md:flex-row items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
              {/* Imagen con efecto de zoom */}
              <div className="overflow-hidden w-full md:w-3/7">
                <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                  <img
                    src="/img/evento-1.webp"
                    alt="Botella 500ml"
                    className="w-full h-full md:h-80 lg:h-full object-cover"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="p-4 md:p-6 2xl:px-8 2xl:py-6 text-start w-full md:w-3/5 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-base xl:text-xl 2xl:text-2xl font-semibold text-[#1F01B9]">
                    Campeonato Interno de Exalumnos – UNJFSC
                  </h3>
                  <p className="text-gray-700 text-sm xl:text-base 2xl:text-lg mb-4">
                    La marca Eufrosine estuvo presente en el Campeonato Interno
                    de Exalumnos de la Universidad Nacional José Faustino
                    Sánchez Carrión, apoyando la unión, la energía y la
                    hidratación de cada participante. Un evento lleno de
                    compañerismo y deporte donde el agua de calidad acompañó
                    cada momento.
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-4">
                  <Badge className="bg-blue-500 text-white text-xs xl:text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Universidad
                  </Badge>
                  <Badge className="bg-blue-500 text-white text-xs xl:text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    ExAlumnos
                  </Badge>
                </div>
              </div>
            </div>

            {/* EVENTO 2 */}
            <div className="group h-fit xl:h-70 2xl:h-75 flex flex-col md:flex-row-reverse items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
              {/* Imagen con efecto de zoom */}
              <div className="overflow-hidden w-full md:w-3/7">
                <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                  <img
                    src="/img/evento-2.webp"
                    alt="Botella 500ml"
                    className="w-full h-full md:h-80 lg:h-full object-cover"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="p-4 md:p-6 2xl:px-8 2xl:py-6 text-start w-full md:w-3/5 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-base xl:text-xl 2xl:text-2xl font-semibold text-[#1F01B9]">
                    Campeonato Relámpago de Fútbol
                  </h3>
                  <p className="text-gray-700 text-sm xl:text-base 2xl:text-lg mb-4">
                    En un emocionante campeonato relámpago, los equipos
                    demostraron su talento, esfuerzo y trabajo en equipo bajo el
                    sol. Eufrosine acompañó a los jugadores brindando
                    hidratación pura y frescura durante todo el torneo,
                    promoviendo el deporte y el bienestar físico.
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-4">
                  <Badge className="bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Fútbol
                  </Badge>
                  <Badge className="bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Hidratación
                  </Badge>
                </div>
              </div>
            </div>

            {/* EVENTO 3 */}
            <div className="group h-fit xl:h-70 2xl:h-75 flex flex-col md:flex-row items-center text-center rounded-[40px] bg-white overflow-hidden shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
              {/* 🖼️ Imagen con efecto de zoom */}
              <div className="overflow-hidden w-full md:w-3/7">
                <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                  <img
                    src="/img/evento-3.webp"
                    alt="Botella 500ml"
                    className="w-full h-full md:h-80 lg:h-full object-cover"
                  />
                </div>
              </div>

              {/* 📄 Texto */}
              <div className="p-4 md:p-6 2xl:px-8 2xl:py-6 text-start w-full md:w-3/5 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-base xl:text-xl 2xl:text-2xlfont-semibold text-[#1F01B9]">
                    Campeonato de Vóley
                  </h3>
                  <p className="text-gray-700 text-sm xl:text-base 2xl:text-lg mb-4">
                    Las jugadoras y jugadores vivieron una jornada intensa de
                    competencia y diversión en el campeonato de vóley, donde
                    Eufrosine fue parte fundamental al mantenerlos frescos e
                    hidratados. Una experiencia que refuerza nuestro compromiso
                    con el deporte y la vida saludable.
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-4">
                  <Badge className="bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    Vóley
                  </Badge>
                  <Badge className="bg-blue-500 text-white text-sm dark:bg-blue-600">
                    <FaHashtag className="w-8 h-8" />
                    VidaSaludable
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCION CONTACTO */}
        <section
          id="contactanos"
          className="max-w-sm sm:max-w-5xl 2xl:max-w-6xl mx-auto min-h-screen w-full pt-20 pb-20 xl:pt-10 xl:pb-20 2xl:pt-20 2xl:pb-40"
        >
          <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 px-6">
            {/* Columna izquierda - Información de contacto */}
            <div className="flex flex-col lg:pt-12">
              {/* Información de contacto */}
              <div className="flex flex-col space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700 p-3 rounded-full shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-gray-900">Email</p>
                    <p className="text-neutral-600 text-sm md:text-sm">
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
                    <p className="text-neutral-600 text-sm md:text-sm">
                      Hualmay, Huacho, Lima
                    </p>
                  </div>
                </div>
              </div>

              {/* Horario de atención */}
              <div className="transition-all py-8">
                <h3 className="font-semibold mb-4 text-[#1F01B9] text-lg">
                  Horario de atención
                </h3>
                <div className="space-y-3 text-sm sm:text-base flex flex-col justify-around">
                  <div className="flex justify-between text-neutral-600">
                    <span>Lunes - Sábado</span>
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

              <div className="w-full justify-center mb-6">
                <img
                  src="/img/Logo-Eufrosine-transparent.png"
                  alt="Logo"
                  className="w-50 h-40 lg:w-70 lg:h-60 object-cover mx-auto"
                />
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="bg-white rounded-[40px] p-6 lg:p-8 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] md:p-6">
              <div className="space-y-6">
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Botón con spinner */}
                  <button
                    type="submit"
                    className="w-full bg-[#1F01B9] hover:bg-[#391FB6] text-white py-3 rounded-full text-base font-semibold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </button>

                  <p className="text-xs text-center text-neutral-500 my-3">
                    Al enviar este formulario, aceptas nuestra política de
                    privacidad
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1F01B9] pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:justify-items-center">
            {/* Marca */}
            <div className="grid grid-cols-2 md:flex md:flex-col justify-center items-center md:items-start">
              <div className="col-span-1">
                <h3
                  className={clsx(
                    "text-3xl lg:text-4xl text-white mb-4",
                    pacifico.className
                  )}
                >
                  eufrosine
                </h3>
                <p className="text-gray-200 text-sm lg:text-base">
                  Agua de mesa de alta calidad para una vida saludable
                </p>
              </div>
              <div className="col-span-1 pt-4">
                <img
                  src="/img/Logo-Eufrosine-white.png"
                  alt="Logo"
                  className="w-35 lg:w-40 object-cover"
                />
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base lg:text-lg">
                Enlaces Rápidos
              </h4>
              <div className="space-y-3 text-gray-200 text-sm lg:text-base">
                <button
                  onClick={() =>
                    document
                      .getElementById("inicio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Inicio
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("nosotros")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Nosotros
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("productos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Presentaciones
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("proceso")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Proceso
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("ofertas")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Ofertas
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Enlaces Legales */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base lg:text-lg">Legal</h4>
              <div className="space-y-3 text-gray-200 text-sm lg:text-base">
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Políticas y Privacidad
                </button>
                <button
                  onClick={() => setShowTerms(true)}
                  className="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                >
                  Términos y Condiciones
                </button>
                <button
                  onClick={() => setShowComplaintBook(true)}
                  className="flex items-center gap-2 group cursor-pointer mt-6"
                >
                  <img
                    src="/img/libro_reclam.jpg"
                    alt="Libro_reclamaciones"
                    className="w-40 rounded-2xl"
                  />
                </button>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base lg:text-lg">
                Síguenos
              </h4>
              <div className="flex gap-6">
                <a
                  href="https://www.facebook.com/aguaeufrosine"
                  target="_blank"
                  rel="noopener"
                  className="cursor-pointer group"
                >
                  <FaFacebook
                    size={20}
                    className="text-white hover:text-blue-300 transition-all duration-200 transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.instagram.com/aguaeufrosine/"
                  target="_blank"
                  rel="noopener"
                  className="cursor-pointer group"
                >
                  <FaInstagram
                    size={20}
                    className="text-white hover:text-pink-400 transition-all duration-200 transform group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between border-t border-white/30 py-4 text-center text-gray-200">
            <p className="text-sm">
              © 2024 Eufrosine. Todos los derechos reservados.
            </p>
            <p className="text-xs pt-2 lg:pt-0">
              Diseñado y desarrollado por{" "}
              <a
                href="https://nexbloq.vercel.app/"
                target="_blank"
                rel="noopener"
                className={clsx(
                  "text-xs italic font-medium",
                  museomoderno.className
                )}
              >
                Nexbloq
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Políticas de Privacidad */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop que bloquea todo - AGREGAR ESTO */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setShowPrivacyPolicy(false)}
            onWheel={(e) => e.stopPropagation()} // ← Esto bloquea el scroll
          />

          {/* Modal - AGREGAR overflow-hidden al body cuando el modal esté abierto */}
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            onWheel={(e) => e.stopPropagation()} // ← Esto también ayuda
          >
            <div className="bg-white rounded-3xl w-full max-w-6xl h-full max-h-[85vh] overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <PrivacyPolicy onBack={() => setShowPrivacyPolicy(false)} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Términos y Condiciones */}
      {showTerms && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setShowTerms(false)}
            onWheel={(e) => e.stopPropagation()}
          />
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl w-full max-w-6xl h-full max-h-[85vh] overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <TermsAndConditions onBack={() => setShowTerms(false)} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Libro de Reclamaciones */}
      {showComplaintBook && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowComplaintBook(false)}
            onWheel={(e) => e.stopPropagation()}
          />
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl w-full max-w-6xl h-full max-h-[85vh] overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <ComplaintBook onBack={() => setShowComplaintBook(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
