import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cab7fb95b50ef3",
    pass: "10b1d00158e22f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Mail App <feedback@app.com>",
      to: "Jean Carlos Izepon <izeponjc@gmail.com>",
      subject,
      html: body,
    });
  }
}