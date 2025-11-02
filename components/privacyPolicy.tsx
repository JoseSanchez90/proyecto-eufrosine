import {
  Shield,
  FileText,
  Lock,
  UserCheck,
  CheckCircle,
  X,
} from "lucide-react";
import clsx from "clsx";
import { pacifico } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white">
      <button
        onClick={onBack}
        className="lg:hidden fixed bg-[#1F01B9] text-white rounded-3xl w-9 h-9 flex items-center space-x-2 ml-3 mt-3 group cursor-pointer"
      >
        <X size={18} className="ml-2" />
      </button>
      {/* Header - Sin fondo azul, como tus otras secciones */}
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
              Políticas de Privacidad
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
              En{" "}
              <span
                className={clsx(
                  "text-[#1F01B9] text-2xl font-semibold",
                  pacifico.className
                )}
              >
                eufrosine
              </span>
              , nos comprometemos a proteger su privacidad y garantizar la
              seguridad de sus datos personales. La presente Política de
              Privacidad establece cómo recopilamos, utilizamos, almacenamos y
              protegemos su información personal.
            </p>
          </section>

          {/* Section 1 */}
          <section className="bg-gray-50 rounded-3xl p-4 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 lg:p-3 rounded-2xl">
                <FileText className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900 mb-2">
                  1. Responsable del Tratamiento de Datos
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>El responsable del tratamiento de sus datos personales es:</p>
              <div className="bg-white p-4 lg:p-6 rounded-2xl space-y-3 shadow-sm text-base">
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
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 lg:p-3 rounded-2xl">
                <UserCheck className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900 mb-2">
                  2. Información que Recopilamos
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                A través de nuestro sitio web, únicamente recopilamos
                información personal cuando usted voluntariamente nos la
                proporciona mediante nuestro formulario de contacto.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 flex-shrink-0" />
                  <span>
                    <strong>Nombre completo:</strong> Para personalizar nuestra
                    comunicación con usted
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 flex-shrink-0" />
                  <span>
                    <strong>Correo electrónico:</strong> Para responder a sus
                    consultas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 flex-shrink-0" />
                  <span>
                    <strong>Número de teléfono:</strong> Para contactarlo de
                    manera directa si es necesario
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 lg:p-3 rounded-2xl">
                <Lock className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900 mb-2">
                  3. Finalidad del Tratamiento de Datos
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600  text-base xl:text-lg leading-relaxed">
              <p>
                Los datos personales que usted nos proporciona serán utilizados
                exclusivamente para las siguientes finalidades:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>
                    Responder a sus consultas y solicitudes de información
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>Brindarle atención al cliente y soporte</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <span>Establecer comunicación comercial</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 lg:p-3 rounded-2xl">
                <Shield className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  4. Base Legal del Tratamiento
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                El tratamiento de sus datos personales se fundamenta en las
                siguientes bases legales:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    <strong>Consentimiento:</strong> Al completar y enviar el
                    formulario de contacto, usted otorga su consentimiento
                    libre, previo, expreso, informado e inequívoco para el
                    tratamiento de sus datos personales conforme al artículo 5
                    de la Ley N° 29733.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  <p>
                    <strong>
                      Ejecución de una relación contractual o precontractual:
                    </strong>{" "}
                    El tratamiento es necesario para atender sus solicitudes de
                    información y eventualmente celebrar un contrato de
                    compraventa de nuestros productos.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 lg:p-3 rounded-2xl">
                <Lock className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  5. Seguridad y Confidencialidad
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Eufrosine ha implementado medidas técnicas, organizativas y
                legales apropiadas para proteger sus datos personales contra el
                acceso no autorizado, pérdida, destrucción, alteración o
                divulgación, conforme a lo establecido en el artículo 39 del
                Reglamento de la Ley N° 29733.
              </p>
              <p>Estas medidas incluyen:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Almacenamiento seguro de datos con acceso restringido
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Uso de protocolos de encriptación para la transmisión de
                  información
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Capacitación del personal en protección de datos personales
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Políticas internas de confidencialidad y manejo de información
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 text-[#1F01B9] mt-1 shrink-0" />
                  Auditorías periódicas de seguridad
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 lg:p-3 rounded-2xl">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  6. Plazo de Conservación de Datos
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-4 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Sus datos personales serán conservados durante el tiempo
                necesario para cumplir con las finalidades para las cuales
                fueron recopilados, o según lo exijan las disposiciones legales
                aplicables. Una vez cumplida la finalidad o vencido el plazo
                legal, sus datos serán eliminados o anonimizados de manera
                segura.
              </p>
              <p>
                El plazo máximo de conservación será de <strong>5 años</strong>{" "}
                desde la última interacción registrada, salvo que usted solicite
                su cancelación antes de dicho plazo.
              </p>
            </div>
          </section>

          {/* Sección 7 - Derechos ARCO (como ejemplo de continuación) */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 lg:p-3 rounded-2xl">
                <UserCheck className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                  7. Sus Derechos (Derechos ARCO)
                </h2>
              </div>
            </div>
            <div className="lg:pl-16 space-y-6 text-gray-600 text-base xl:text-lg leading-relaxed">
              <p>
                Como titular de datos personales, usted tiene los siguientes
                derechos reconocidos en los artículos 18 al 23 de la Ley N°
                29733:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Derecho de Acceso",
                    desc: "Solicitar información sobre sus datos personales que son objeto de tratamiento en nuestros bancos de datos.",
                  },
                  {
                    title: "Derecho de Rectificación",
                    desc: "Solicitar la actualización, inclusión o rectificación de sus datos personales cuando estos sean inexactos, incompletos o no estén actualizados.",
                  },
                  {
                    title: "Derecho de Cancelación",
                    desc: "Solicitar la supresión o cancelación de sus datos personales cuando considere que no están siendo tratados conforme a la ley.",
                  },
                  {
                    title: "Derecho de Oposición",
                    desc: "Oponerse al tratamiento de sus datos personales para fines específicos, cuando exista un motivo legítimo.",
                  },
                  {
                    title: "Derecho de Información",
                    desc: "Ser informado sobre el uso que se le ha dado o se le está dando a sus datos personales.",
                  },
                  {
                    title: "Derecho al Tratamiento Objetivo",
                    desc: "No ser objeto de decisiones basadas únicamente en tratamientos automatizados.",
                  },
                ].map((derecho, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl shadow-sm"
                  >
                    <h3 className="text-base xl:text-lg text-[#1F01B9] font-semibold mb-2">
                      {derecho.title}
                    </h3>
                    <p className="text-gray-600 text-sm xl:text-base">
                      {derecho.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <p className="text-[#1F01B9] font-semibold">
                  <strong>Ejercicio de derechos:</strong> Para ejercer
                  cualquiera de estos derechos, puede contactarnos enviando un
                  correo electrónico a{" "}
                  <strong>aguademesaeufrosineperu@gmail.com</strong> o mediante
                  comunicación escrita a nuestro domicilio. Le responderemos en
                  un plazo no mayor a 10 días hábiles.
                </p>
              </div>
            </div>
          </section>

          {/* Final Note */}
          <section className="bg-linear-to-tr from-blue-800 via-blue-600 to-blue-400 p-8 rounded-3xl text-center">
            <p className="text-white text-base xl:text-lg 2xl:text-xl leading-relaxed font-medium">
              Al utilizar nuestro sitio web y proporcionar sus datos personales
              a través del formulario de contacto, usted reconoce haber leído,
              comprendido y aceptado los términos establecidos en esta Política
              de Privacidad.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
