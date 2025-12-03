import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // If env vars are not set, log it and return success for demo
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('New lesson notification request:', { email });
            return NextResponse.json({ success: true, message: 'Notification request received (Mock)' });
        }

        // Send notification to admin
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'pingananth@gmail.com',
            subject: 'New Lesson Notification Request - SpeakHindiFast',
            text: `
New user wants to be notified about lesson updates:

Email: ${email}
Date: ${new Date().toLocaleString()}
            `,
            html: `
<h3>New Lesson Notification Request</h3>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing notification request:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
