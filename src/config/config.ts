import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

const config = {
    mailServer: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        domain: process.env.SMTP_DOMAIN,
        sendingEmail: process.env.SMTP_MAIL,
    },
};

export default config;