import nodemailer, { SendMailOptions } from 'nodemailer';
import config from '@/config/config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const sendEmail = async (options: SendMailOptions) => {
    try {
        const nodeMailerOptions: SMTPTransport | SMTPTransport.Options | string = {
            host: config.mailServer.host,
            port: parseInt(config.mailServer.port || ''),
            auth: {
                user: config.mailServer.auth.user,
                pass: config.mailServer.auth.pass,
            },
            secure: false,
            // Add these options to ignore certificate errors
            tls: {
                rejectUnauthorized: false,
            },
        };

        // 1. create transporter
        const transporter = nodemailer.createTransport(nodeMailerOptions);

        // 2. define email options
        const mailOptions = {
            from: config.mailServer.sendingEmail,
            ...options,
        };

        // 3. send email
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error(
            'There was an error sending the email. Try again later!',
            error as ErrorOptions,
        );
    }
};
