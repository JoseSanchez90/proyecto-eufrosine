import {
  FileText,
  Scale,
  ShoppingCart,
  Shield,
  CheckCircle,
  X,
} from "lucide-react";
import clsx from "clsx";
import { pacifico } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

interface TermsAndConditionsProps {
  onBack: () => void;
}

export function TermsAndConditions({ onBack }: TermsAndConditionsProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white">
      <button
        onClick={onBack}
        className="lg:hidden fixed bg-[#1F01B9] text-white rounded-3xl w-9 h-9 flex items-center space-x-2 ml-3 mt-3 group cursor-pointer"
      >
        <X size={18} className="ml-2" />
      </button>
      {/* Header - Mismo diseño que PrivacyPolicy */}
      <div className="py-8 px-2 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="w-full max-w-6xl">
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onBack}
            animate={{ width: isHovered ? "7rem" : "3rem" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="hidden fixed cursor-pointer overflow-hidden bg-[#1F01B9] rounded-full w-12 h-12 xl:flex items-center justify-start shadow-md"
          >
            <div className="flex items-center justify-center gap-1">
              <p
                className={clsx(
                  "text-6xl font-bold text-white select-none ml-3",
                  pacifico.className
                )}
              >
                <X size={22} />
              </p>

              <motion.span
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                }}
                transition={{ delay: isHovered ? 0.2 : 0, duration: 0.4 }}
                className="text-xl text-white font-semibold select-none pb-1"
              >
                cerrar
              </motion.span>
            </div>
          </motion.button>
          <div className="text-center mt-7 lg:mt-0">
            <h1
              className={clsx(
                "text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[#1F01B9] mb-4",
                pacifico.className
              )}
            >
              Términos y Condiciones
            </h1>
            <p className="text-sm xl:text-base 2xl:text-xl text-gray-600">
              Última actualización: 1 de noviembre de 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8 xl:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="text-start px-4">
            <p className="text-lg xl:text-xl text-gray-700 leading-relaxed">
              Bienvenido a{" "}
              <span
                className={clsx(
                  "text-[#1F01B9] text-2xl font-semibold",
                  pacifico.className
                )}
              >
                eufrosine
              </span>
              . Al acceder y utilizar nuestro sitio web, usted acepta cumplir y
              estar sujeto a los siguientes términos y condiciones de uso.
            </p>
          </section>

          {/* Section 1 */}
          <section className="bg-gray-50 rounded-3xl p-4 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <FileText className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900 mb-2">
                  1. Información General
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <div className="bg-white p-6 rounded-2xl space-y-3 shadow-sm text-base">
                <div className="flex items-start gap-2">
                  <div>
                    <CheckCircle className="w-5 text-[#1F01B9]" />
                  </div>
                  <p>
                    <strong>Razón Social:</strong> Punto Vida H2O S.A.C.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <CheckCircle className="w-5 text-[#1F01B9]" />
                  </div>
                  <p>
                    <strong>RUC:</strong> 20613393367
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <CheckCircle className="w-5 text-[#1F01B9]" />
                  </div>
                  <p>
                    <strong>Domicilio:</strong> Av. Cincuentenario Nro 390,
                    Hualmay, Huaura, Lima
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <CheckCircle className="w-5 text-[#1F01B9]" />
                  </div>
                  <p>
                    <strong>Correo electrónico:</strong>{" "}
                    aguademesaeufrosineperu@gmail.com
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <CheckCircle className="w-5 text-[#1F01B9]" />
                  </div>
                  <p>
                    <strong>Teléfono:</strong> 903 565 918
                  </p>
                </div>
              </div>
              <p>
                Eufrosine es una empresa dedicada a la producción y
                comercialización de agua de mesa purificada de alta calidad.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <Scale className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900 mb-2">
                  2. Aceptación de Términos
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Al utilizar nuestro sitio web, usted acepta estos términos y
                condiciones en su totalidad. Si no está de acuerdo con estos
                términos, por favor no utilice nuestro sitio web.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>
                    Usted debe tener al menos 18 años para utilizar nuestros
                    servicios
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>
                    Es responsable de mantener la confidencialidad de su
                    información de contacto
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>
                    Acepta proporcionar información veraz y actualizada
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <ShoppingCart className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900 mb-2">
                  3. Productos y Servicios
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Eufrosine ofrece agua de mesa purificada en diversas
                presentaciones:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>Botellas de 625ml</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>Botellas de 1 litro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>Bidones de 20 litros</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <p className="text-[#1F01B9] font-semibold">
                  <strong>Nota:</strong> Los precios, promociones y
                  disponibilidad de productos están sujetos a cambio sin previo
                  aviso. Para información actualizada, contáctenos directamente.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <Shield className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  4. Pedidos y Entrega
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>Proceso de solicitud y entrega de nuestros productos:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    Los pedidos se realizan mediante contacto telefónico o a
                    través de nuestro formulario web
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    Las entregas están sujetas a disponibilidad de stock y
                    capacidad de distribución
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    Nos reservamos el derecho de rechazar pedidos que no cumplan
                    con nuestras políticas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    La zona de cobertura de entrega es principalmente el
                    distrito de Hualmay y áreas aledañas
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  5. Precios y Pagos
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>Condiciones económicas y métodos de pago:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Todos los precios están expresados en Soles (PEN)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Los precios incluyen IGV según la legislación peruana
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Aceptamos pagos en efectivo al momento de la entrega
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Para pedidos corporativos, contamos con facturación
                  electrónica
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <Shield className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  6. Garantías y Devoluciones
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Políticas de garantía de calidad y procedimientos de devolución:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    Garantizamos la calidad y pureza de nuestro agua mediante
                    controles periódicos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    En caso de productos defectuosos, aceptamos devoluciones
                    dentro de las 24 horas posteriores a la entrega
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    Para proceder con una devolución, el producto debe estar en
                    su empaque original y sin abrir
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    Las devoluciones por arrepentimiento no están permitidas por
                    tratarse de productos de consumo básico
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <Scale className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  7. Limitación de Responsabilidad
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-6 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>Eufrosine no será responsable por:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Uso Inadecuado",
                    desc: "Daños resultantes del uso inadecuado o almacenamiento incorrecto de nuestros productos.",
                  },
                  {
                    title: "Fuerza Mayor",
                    desc: "Interrupciones en el servicio por casos fortuitos o de fuerza mayor que estén fuera de nuestro control.",
                  },
                  {
                    title: "Información de Terceros",
                    desc: "Contenido o prácticas de sitios web de terceros enlazados desde nuestro sitio.",
                  },
                  {
                    title: "Errores Técnicos",
                    desc: "Errores técnicos temporales o interrupciones en la disponibilidad del sitio web.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl shadow-sm"
                  >
                    <h3 className="text-base xl:text-lg text-[#1F01B9] font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm xl:text-base">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  8. Propiedad Intelectual
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Todo el contenido de este sitio web, incluyendo pero no limitado
                a:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Logotipos, marcas y nombre comercial "Eufrosine"
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Diseños gráficos e interfaces de usuario
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Contenido textual y fotografías
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Estructura y código del sitio web
                </li>
              </ul>
              <p>
                están protegidos por las leyes de propiedad intelectual y son
                propiedad exclusiva de Punto Vida H2O S.A.C.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <Scale className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  9. Modificaciones de Términos
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Nos reservamos el derecho de modificar estos términos y
                condiciones en cualquier momento. Las modificaciones entrarán en
                vigor inmediatamente después de su publicación en el sitio web.
              </p>
              <p>
                Es responsabilidad del usuario revisar periódicamente estos
                términos para estar informado sobre cualquier cambio.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  10. Legislación Aplicable
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Estos términos y condiciones se rigen por las leyes de la
                República del Perú. Cualquier disputa relacionada con estos
                términos estará sujeta a la jurisdicción de los tribunales de
                Lima, Perú.
              </p>
              <div className="bg-white p-6 rounded-2xl space-y-2 shadow-sm">
                <p>
                  <strong>Ley de Protección al Consumidor:</strong> Ley N° 29571
                </p>
                <p>
                  <strong>Código Civil Peruano:</strong> Artículos aplicables a
                  contratos
                </p>
                <p>
                  <strong>Ley General de Sociedades:</strong> Ley N° 26887
                </p>
              </div>
            </div>
          </section>

          {/* Final Note */}
          <section className="bg-linear-to-tr from-blue-800 via-blue-600 to-blue-400 p-8 rounded-3xl text-center">
            <p className="text-white text-base xl:text-lg 2xl:text-xl leading-relaxed font-medium">
              Al utilizar nuestro sitio web y realizar pedidos de nuestros
              productos, usted reconoce haber leído, comprendido y aceptado
              todos los términos y condiciones aquí establecidos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
