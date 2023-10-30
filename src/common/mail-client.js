import nodemailer from "nodemailer";
import dotenv from "dotenv";
const result = dotenv.config();
const configs = result.parsed;

console.log("configs: ", configs);

const host = process.env.EMAIL_SMTP || configs?.EMAIL_SMTP;
const port = process.env.EMAIL_PORT || configs?.EMAIL_PORT;
const user = process.env.EMAIL_USER || configs?.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD || configs?.EMAIL_PASSWORD;

// console.log("-------------------------------------------");
// console.log(host);
// console.log(port);
// console.log(user);
// console.log(password);
// console.log("-------------------------------------------");

export const mailClient = nodemailer.createTransport({
  host: host,
  port: port,
  secure: true,
  auth: {
    user: user,
    pass: password,
  },
});

mailClient.verify().then(console.log).catch(console.error);
