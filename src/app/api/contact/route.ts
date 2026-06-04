import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, doorCategory, windowCategory, hardwareCategory } = body;

    // Helper fallback strings to display if a user leaves a section blank
    const doorSelected = doorCategory || "None";
    const windowSelected = windowCategory || "None";
    const hardwareSelected = hardwareCategory || "None";
    const summaryCategoryText = `Doors: ${doorSelected} | Windows: ${windowSelected} | Hardware: ${hardwareSelected}`;

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
      <p><b>Door Category:</b> ${doorCategory}</p>
      <p><b>Window Category:</b> ${windowCategory}</p>
      <p><b>Hardware Category:</b> ${hardwareCategory}</p>
      `,
    });

    /* =========================
       2️⃣ Auto Reply to Customer
    ========================== */
    await resend.emails.send({
      from: "onboarding@resend.dev", // Once domain is verified change to "info@smtdoorindustries.com"
      to: [email],
      subject: "Thank you for contacting SMT Door Industries",
      html: `
      <h2>Thank you ${name} 🙏</h2>
      <p>We have successfully received your enquiry regarding our custom building solutions.</p>
      <p><b>Your Recorded Selections:</b></p>
      <ul>
        <li><b>Doors:</b> ${doorSelected}</li>
        <li><b>Windows:</b> ${windowSelected}</li>
        <li><b>Hardware:</b> ${hardwareSelected}</li>
      </ul>
      <p>Our engineering team will look into your custom specs and contact you shortly.</p>
      <br/>
      <p>Best Regards,</p>
      <p><b>SMT Door Industries</b></p>
      <p>📞 +91 87544 70389</p>
      <p>📍 Coimbatore, Tamil Nadu</p>
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
                { type: "text", parameter_name: "category", text: summaryCategoryText }
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