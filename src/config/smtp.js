import nodemailer from "nodemailer";
import config from "./config.js";

export const smtpTransport = nodemailer.createTransport({
  host: config.smtpserver,
  port: config.smtpports,
  secure: false,
  auth: {
    user: config.smtpuser,
    pass: config.smtppass,
  },
});