import nodemailer from "nodemailer";
import commonConfigs from "../common-configs.json" assert { type: "json" };

const host = process.env.EMAIL_SMTP || commonConfigs.DEFAULT_EMAIL_SMTP;
const port = process.env.EMAIL_PORT || commonConfigs.DEFAULT_EMAIL_PORT;
const user = process.env.EMAIL_USER || commonConfigs.DEFAULT_EMAIL_USER;
const password = process.env.EMAIL_PASSWORD || commonConfigs.DEFAULT_EMAIL_PASSWORD;

console.log("-------------------------------------------");
console.log(host);
console.log(port);
console.log(user);
console.log(password);
console.log("-------------------------------------------");

export const mailClient = nodemailer.createTransport({
  host: host,
  port: port,
  secure: false,
  secureConnection: false, // TLS requires secureConnection to be false
  auth: {
    user: user,
    pass: password,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

mailClient.verify().then(console.log).catch(console.error);

mailClient
  .sendMail({
    from: `Suporte Mentorix <${user}>`,
    to: "suporte.mentorix@gmail.com ",
    subject: "Teste de envio de email",
    html: "<h1>Teste de envio de email</h1>",
    text: "Teste de envio de email",
  })
  .then(console.log)
  .catch(console.error);
