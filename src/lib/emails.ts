import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export const sendEmail = async (payload: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions, // spread in the SMTP options
  });

  const from = `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`;
  return await transporter.sendMail({
    from: from,
    ...payload,
  });
};
