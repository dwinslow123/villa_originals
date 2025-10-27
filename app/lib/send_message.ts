'use server';
const nodemailer = require('nodemailer');
import { z } from 'zod';

const schema = z.object({
    firstName: z.string().min(2, "First Name is required").max(100),
    lastName: z.string().min(2, "Last Name is required").max(100),
    email: z.email().min(2, "Email is required").max(100),
    phoneNumber: z.string().trim().min(10, "Please enter a valid phone number.").max(15),
    message: z.string().min(2, "Message is required").max(500)
});

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

if (!SMTP_SERVER_HOST || !SMTP_SERVER_USERNAME || !SMTP_SERVER_PASSWORD || !SITE_MAIL_RECIEVER) {
    throw new Error('Missing required environment variables for email sending.');
}

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: SMTP_SERVER_HOST,
    port: 465,
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        type: 'OAuth2',
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: process.env.GMAIL_ACCESS_TOKEN,
    },
});

const sendMessage = async (initialState: any, formData: FormData) => {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone-number');
    const message = formData.get('message');

    const parsedData = schema.safeParse({
        firstName,
        lastName,
        email,
        phoneNumber: phone,
        message,
    });

    if (!parsedData.success) {
        return { errors: z.treeifyError(parsedData.error) };
    }
    const mailOptions = {
        from: SMTP_SERVER_USERNAME,
        to: SITE_MAIL_RECIEVER,
        subject: "Villa Originals Contact Form",
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions)
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { error: { error } };
    }
};

export default sendMessage;