import { NextResponse } from "next/server";
import { Resend } from "resend";

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
       3️⃣ WhatsApp Notification (Meta API)
    ========================== */

    await fetch(`https://graph.facebook.com/v18.0/${process.env.META_PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.META_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: process.env.MY_WHATSAPP_NUMBER,
        type: "template",
        template: {
          name: "smt_door_new_lead", // your approved template name
          language: { code: "en" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", parameter_name: "customer_name", text: name },
                { type: "text", parameter_name: "customer_email", text: email },
                { type: "text", parameter_name: "customer_phone", text: phone },
                { type: "text", parameter_name: "category", text: category }
              ]
            }
          ]
        }
      })
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false });
  }
}