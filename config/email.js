// config/email.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Your email
    pass: process.env.EMAIL_PASS   // App Password from Google
  }
});

export default transporter;
