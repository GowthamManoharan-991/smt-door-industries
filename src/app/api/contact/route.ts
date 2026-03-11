import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gowtham991@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Category:</strong> ${body.category}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false });
  }
}