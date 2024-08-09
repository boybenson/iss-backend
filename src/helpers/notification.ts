import nodemailer from "nodemailer";
import axios from "axios";

type IEmailProps = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

export const dispatchEmail = async (payload: IEmailProps) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      service: "Gmail",
      auth: {
        user: "bensony63@gmail.com",
        pass: "zeub iowt adbw tojw",
      },
    });
    await transporter.sendMail({ ...payload });
    return true;
  } catch (error) {}
};
