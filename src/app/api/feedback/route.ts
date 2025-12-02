import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { email, message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Create a transporter
        // Note: In a real production app, you should use environment variables
        // for these credentials.
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your preferred service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // If env vars are not set, we can't actually send the email.
        // For demonstration purposes, we'll log it and return success if envs are missing
        // so the UI flow works.
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('Feedback received (Email not configured):', { email, message });
            return NextResponse.json({ success: true, message: 'Feedback received (Mock)' });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'pingananth@gmail.com',
            subject: 'New Feedback from SpeakHindiFast',
            text: `
You have received new feedback:

Message:
${message}

From: ${email || 'Anonymous'}
            `,
            html: `
<h3>New Feedback Received</h3>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
<p><strong>From:</strong> ${email || 'Anonymous'}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending feedback:', error);
        return NextResponse.json(
            { error: 'Failed to send feedback' },
            { status: 500 }
        );
    }
}
