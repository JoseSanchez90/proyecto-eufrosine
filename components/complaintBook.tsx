import { BookOpen, User, FileText, CheckCircle, X, Send } from "lucide-react";
import clsx from "clsx";
import { pacifico } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

interface ComplaintBookProps {
  onBack: () => void;
}

export function ComplaintBook({ onBack }: ComplaintBookProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Datos del consumidor
    tipoDocumento: "DNI",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    domicilio: "",
    departamento: "",
    provincia: "",
    distrito: "",
    telefono: "",
    email: "",

    // Detalles del reclamo
    tipoBienContratado: "producto",
    descripcionBien: "",
    montoReclamado: "",
    detalleReclamo: "",
    pedidoConsumidor: "",

    // Información de la empresa
    fechaIncidente: "",
    lugarIncidente: "tienda",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "numeroDocumento",
      "nombres",
      "apellidos",
      "domicilio",
      "departamento",
      "provincia",
      "distrito",
      "telefono",
      "email",
      "fechaIncidente",
      "descripcionBien",
      "detalleReclamo",
      "pedidoConsumidor",
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (missingFields.length > 0) {
      Swal.fire({
        title: "Campos Incompletos",
        html: `Por favor complete los siguientes campos obligatorios:<br>
            <strong>${missingFields.length} campo(s) requerido(s)</strong>`,
        icon: "warning",
        showClass: {
          popup: `
          animate__animated
          animate__wobble
          animate__faster
        `,
        },
        background: "#fffbeb",
        color: "#d97706",
        confirmButtonColor: "#d97706",
        confirmButtonText: "Entendido",
        customClass: {
          popup: "rounded-3xl shadow-2xl",
        },
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    if (!validateForm()) return;

    // Confirmación
    const confirmResult = await Swal.fire({
      title: "Enviar Reclamo",
      text: "¿Está seguro de enviar su reclamo? Una vez enviado, nos comunicaremos con usted pronto.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1F01B9",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Revisar datos",
      showClass: {
        popup: `
        animate__animated
        animate__zoomIn
        animate__faster
      `,
      },
      customClass: {
        popup: "rounded-full shadow-2xl border-2 border-[#1F01B9]",
      },
    });

    if (!confirmResult.isConfirmed) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/complaint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await Swal.fire({
          title: "¡Éxito!",
          html: `
          <div class="text-center">
            <h3 class="text-xl font-bold text-[#1F01B9] mb-2">Reclamo Registrado</h3>
            <p class="text-gray-600">Su reclamo #${Date.now()
              .toString()
              .slice(-6)} ha sido registrado exitosamente.</p>
            <p class="text-gray-600 mt-2">Nos comunicaremos con usted dentro de las 48 horas.</p>
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
          background: "#f0f9ff",
          confirmButtonColor: "#1F01B9",
          confirmButtonText: "Entendido",
          customClass: {
            popup: "rounded-3xl shadow-2xl border-2 border-[#1F01B9]",
          },
        });
        onBack();
      } else {
        throw new Error("Error en el servidor");
      }
    } catch (error) {
      await Swal.fire({
        title: "¡Hubo un error!",
        text: "No pudimos procesar su reclamo. Por favor, intente nuevamente o contáctenos directamente.",
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
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <button
        onClick={onBack}
        className="lg:hidden fixed bg-[#1F01B9] text-white rounded-3xl w-9 h-9 flex items-center space-x-2 ml-3 mt-3 group cursor-pointer"
      >
        <X size={18} className="ml-2" />
      </button>
      {/* Header */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
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
              Libro de Reclamaciones
            </h1>
            <p className="text-sm xl:text-base 2xl:text-xl text-gray-600">
              Formulario oficial - Ley N° 29571
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8 xl:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Información de la Empresa */}
          <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
            <div className="flex items-start gap-2 lg:gap-6 mb-4 lg:mb-6">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <BookOpen className="text-[#1F01B9]" size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900 mb-2">
                  Información de la Empresa
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
                    <strong>Actividad:</strong> Venta de agua de mesa purificada
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Formulario de Reclamación */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Datos del Consumidor */}
            <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-2 rounded-2xl">
                  <User className="text-blue-600" size={20} />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                    Datos del Consumidor
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    (Todos los campos son obligatorios)
                  </p>
                </div>
              </div>

              <div className="lg:pl-16 space-y-6">
                {/* Tipo y Número de Documento */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Documento *
                    </label>
                    <select
                      name="tipoDocumento"
                      value={formData.tipoDocumento}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    >
                      <option value="DNI">DNI</option>
                      <option value="CE">Carnet de Extranjería</option>
                      <option value="PASAPORTE">Pasaporte</option>
                      <option value="RUC">RUC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Documento *
                    </label>
                    <input
                      type="text"
                      name="numeroDocumento"
                      value={formData.numeroDocumento}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Nombres y Apellidos */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombres *
                    </label>
                    <input
                      type="text"
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Domicilio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Domicilio *
                  </label>
                  <input
                    type="text"
                    name="domicilio"
                    value={formData.domicilio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                    required
                  />
                </div>

                {/* Departamento, Provincia, Distrito */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departamento *
                    </label>
                    <input
                      type="text"
                      name="departamento"
                      value={formData.departamento}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Provincia *
                    </label>
                    <input
                      type="text"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Distrito *
                    </label>
                    <input
                      type="text"
                      name="distrito"
                      value={formData.distrito}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Teléfono y Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono / Celular *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Detalles del Reclamo */}
            <section className="bg-gray-50 rounded-3xl p-6 xl:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-2 rounded-2xl">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl xl:text-2xl text-gray-900">
                    Detalles del Reclamo
                  </h2>
                </div>
              </div>

              <div className="lg:pl-16 space-y-6">
                {/* Fecha del Incidente */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha del Hecho *
                  </label>
                  <input
                    type="date"
                    name="fechaIncidente"
                    value={formData.fechaIncidente}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                    required
                  />
                </div>

                {/* Tipo de Bien */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Bien o Servicio *
                  </label>
                  <select
                    name="tipoBienContratado"
                    value={formData.tipoBienContratado}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                    required
                  >
                    <option value="producto">Producto (Agua de Mesa)</option>
                    <option value="servicio">Servicio de Entrega</option>
                    <option value="atencion">Atención al Cliente</option>
                  </select>
                </div>

                {/* Descripción del Bien */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción del Bien Contratado o Servicio *
                  </label>
                  <input
                    type="text"
                    name="descripcionBien"
                    value={formData.descripcionBien}
                    onChange={handleInputChange}
                    placeholder="Ej: Bidón de agua 20L, Botella 625ml, etc."
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                    required
                  />
                </div>

                {/* Monto Reclamado */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monto Reclamado (S/)
                    <span className="text-gray-500 text-sm ml-1">
                      (Opcional)
                    </span>
                  </label>
                  <input
                    type="number"
                    name="montoReclamado"
                    value={formData.montoReclamado}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent"
                  />
                </div>

                {/* Detalle del Reclamo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detalle del Reclamo *
                  </label>
                  <textarea
                    name="detalleReclamo"
                    value={formData.detalleReclamo}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describa detalladamente los hechos que motivan su reclamo..."
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Pedido del Consumidor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué solicita? *
                  </label>
                  <textarea
                    name="pedidoConsumidor"
                    value={formData.pedidoConsumidor}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Especifique claramente qué solución espera obtener..."
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F01B9] focus:border-transparent resize-none"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Botón de Envío */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1F01B9] hover:bg-[#391FB6] text-white px-8 py-3 rounded-full text-base font-semibold transition-colors cursor-pointer duration-200 flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    {/* Spinner que gira */}
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Reclamo
                  </>
                )}
              </button>
              <p className="text-gray-600 text-sm mt-3">
                Nos comunicaremos con usted dentro de las 48 horas hábiles
              </p>
            </div>
          </form>

          {/* Información Legal */}
          <section className="bg-blue-50 rounded-3xl p-6 xl:p-8 border border-[#1F01B9]/30">
            <h3 className="text-lg font-semibold text-[#1F01B9] mb-4 text-center">
              Información Importante
            </h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start gap-2">
                <CheckCircle className="w-5 text-[#1F01B9] shrink-0" />
                Según la Ley N° 29571, tenemos 30 días calendario para responder
                a su reclamo
              </p>
              <div className="flex items-start gap-2">
                <div>
                  <CheckCircle className="w-5 text-[#1F01B9] shrink-0" />
                </div>
                <p>
                  Puede consultar el seguimiento de su reclamo al correo:{" "}
                  <strong>aguademesaeufrosineperu@gmail.com</strong>{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
