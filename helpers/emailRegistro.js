import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const {email, nombre, token} = datos;
  const info = await transporter.sendMail({
    form: "APV - Administrador de PAcientes de Veterinaria",
    to: email,
    subject: 'Comprueba tu cuenta en APV',
    text: 'Comprueba tu cuenta en APV',
    html: `
        <p>Hola ${nombre}, comprueba tu cuenta en APV.</p>
        <p>Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `
  });

  console.log("Mensaje Enviado: %s", info.messageId)


}

export default emailRegistro;