import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  try {
    const { name, email, category, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send to support team
    await resend.emails.send({
      from: "Festivities Contact <noreply@festivities.io>",
      to: "support@festivities.io",
      replyTo: email,
      subject: `[${category ?? "General"}] Contact from ${name}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Category:</strong> ${category ?? "General"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: "Festivities Support <support@festivities.io>",
      to: email,
      subject: "We received your message — Festivities Support",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! We received your message and will get back to you within 4 hours during business days.</p>
        <p><strong>Your message:</strong></p>
        <blockquote style="border-left: 3px solid #C4521A; padding-left: 12px; margin: 12px 0; color: #6B6560;">${message.replace(/\n/g, "<br>")}</blockquote>
        <p>If you have anything to add, just reply to this email.</p>
        <p>— The Festivities Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
