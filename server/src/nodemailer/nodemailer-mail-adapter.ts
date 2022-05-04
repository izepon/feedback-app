import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../adapters/mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '9955de172fc7f2',
    pass: '2bf06a7c80ed15',
  },
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