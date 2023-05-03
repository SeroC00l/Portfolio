import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Cors from "cors";

// Inicializar el middleware CORS
const cors = Cors({
  methods: ["POST", "HEAD"],
});

// Función auxiliar para ejecutar el middleware CORS
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ejecutar el middleware CORS
  await runMiddleware(req, res, cors);
  console.log(req.body);

  // Verificar el método de la solicitud
  if (req.method !== "POST") {
    res.status(405).json({ message: "Método no permitido." });
    return;
  }

  // Configurar el transporte de correo de NodeMailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contactalejandrourrea@gmail.com", // Reemplaza esto con tu correo electrónico
      pass: "A0dab8745f9", // Reemplaza esto con la contraseña de tu correo electrónico
    },
  });

  // Definir las opciones del correo electrónico
  const mailOptions = {
    from: req.body.email, // Remitente del correo electrónico
    to: "aleurrea4@gmail.com", // Reemplaza esto con el correo electrónico al que deseas enviar el formulario
    subject: `Nuevo mensaje de ${req.body.name}`,
    text: req.body.message,
  };

  // Enviar el correo electrónico
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo electrónico enviado exitosamente." });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el correo electrónico.", error });
  }
}
