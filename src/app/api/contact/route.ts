import { NextResponse } from "next/server";
import { Resend } from "resend";
import axios from "axios";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, category } = body;

    /* =========================
       1️⃣ Email to You
    ========================== */

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["gow99tham991@gmail.com"],
      subject: "New Website Lead 🚀",
      html: `
      <h2>New Contact Request</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Category:</b> ${category}</p>
      `,
    });

    /* =========================
       2️⃣ Auto Reply to Customer
    ========================== */

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Thank you for contacting SMT Door Industries",
      html: `
      <h2>Thank you ${name} 🙏</h2>
      <p>We received your enquiry for <b>${category}</b>.</p>
      <p>Our team will contact you shortly.</p>

      <br/>

      <p><b>SMT Door Industries</b></p>
      <p>📞 +91 87544 70389</p>
      <p>📍 Coimbatore</p>
      `,
    });

    /* =========================
       3️⃣ WhatsApp Notification
    ========================== */

    const message = `🚨 New Website Lead

Name: ${name}
Phone: ${phone}
Email: ${email}
Category: ${category}`;

    await axios.get(
      `https://api.callmebot.com/whatsapp.php?phone=918778671907&text=${encodeURIComponent(
        message
      )}&apikey=${process.env.WHATSAPP_API_KEY}`
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false });
  }
}