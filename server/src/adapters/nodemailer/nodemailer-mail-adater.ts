import { MailAdapter, SendMailData } from '@/adapters/mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: process.env.NODEMAILER_FROM,
      to: process.env.NODEMAILER_TO,
      subject,
      html: body
    })
  }
}
