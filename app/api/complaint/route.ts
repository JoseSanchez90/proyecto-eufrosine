import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      tipoDocumento,
      numeroDocumento,
      nombres,
      apellidos,
      domicilio,
      departamento,
      provincia,
      distrito,
      telefono,
      email,
      tipoBienContratado,
      descripcionBien,
      montoReclamado,
      detalleReclamo,
      pedidoConsumidor,
      fechaIncidente,
    } = await req.json();

    // Verifica que las variables están definidas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error("Missing email credentials");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Formatear el monto reclamado
    const montoFormateado = montoReclamado
      ? `S/ ${parseFloat(montoReclamado).toFixed(2)}`
      : "No especificado";

    // Crear el contenido del email con formato profesional
    const emailContent = `
📋 NUEVA RECLAMACIÓN - LIBRO DE RECLAMACIONES

👤 DATOS DEL CONSUMIDOR:
──────────────────────────────
• Tipo de Documento: ${tipoDocumento}
• Número de Documento: ${numeroDocumento}
• Nombres: ${nombres}
• Apellidos: ${apellidos}
• Domicilio: ${domicilio}
• Ubicación: ${distrito}, ${provincia}, ${departamento}
• Teléfono: ${telefono}
• Email: ${email}

📅 DETALLES DEL RECLAMO:
──────────────────────────────
• Fecha del Incidente: ${fechaIncidente}
• Tipo de Bien/Servicio: ${tipoBienContratado}
• Descripción: ${descripcionBien}
• Monto Reclamado: ${montoFormateado}

📝 DETALLE DEL RECLAMO:
──────────────────────────────
${detalleReclamo}

🎯 PETICIÓN DEL CONSUMIDOR:
──────────────────────────────
${pedidoConsumidor}

🏢 INFORMACIÓN DE LA EMPRESA:
──────────────────────────────
• Razón Social: Punto Vida H2O S.A.C.
• RUC: 20613393367
• Domicilio: Av. Cincuentenario Nro 390, Hualmay, Huaura, Lima

⚠️ ACCIÓN REQUERIDA: 
Responder al consumidor dentro de los 30 días calendario según Ley N° 29571
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "aguademesaeufrosineperu@gmail.com",
      subject: `📖 Libro de Reclamaciones - Nueva Reclamación de ${nombres} ${apellidos}`,
      text: emailContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending complaint email:", error);
    return NextResponse.json(
      { error: "Error sending complaint email" },
      { status: 500 }
    );
  }
}
