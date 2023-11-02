import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Configura los encabezados CORS manualmente
  res.setHeader("Access-Control-Allow-Origin", "*"); // Cambia el * a tu dominio en producción para mayor seguridad
  res.setHeader("Access-Control-Allow-Methods", "POST");

  // Verifica el método de la solicitud
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed." });
    return;
  }

  // Analiza el cuerpo de la solicitud JSON
  const { name, email, message, phone, subject } = req.body;

  // Configurar el transporte de correo de NodeMailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contactsero78@gmail.com", // Reemplaza esto con tu correo electrónico
      pass: "udsd mmea qfrh lxbe", // Reemplaza esto con la contraseña de tu correo electrónico
    },
  });

  // Definir las opciones del correo electrónico
  const mailOptions = {
    from: email, // Remitente del correo electrónico
    to: "aleurrea4@gmail.com", // Reemplaza esto con el correo electrónico al que deseas enviar el formulario
    subject: subject,
    text: `Nuevo mensaje de ${name}\n ${phone !== "" ? "phone: "+ phone  : ""}\n ${message}`,
  };

  // Enviar el correo electrónico
  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Mail Sent Succesfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending the mail.", error });
  }
}
