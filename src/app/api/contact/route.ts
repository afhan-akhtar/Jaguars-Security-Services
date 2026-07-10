import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const contactEmail =
      process.env.CONTACT_EMAIL || "info@jaguarsecurityservices.co.uk";

    const emailContent = `
New enquiry from Jaguar Security Services website

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}
Service: ${body.service || "Not specified"}

Message:
${body.message}
    `.trim();

    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "onboarding@resend.dev",
          to: contactEmail,
          reply_to: body.email,
          subject: `New Enquiry from ${body.name} - Jaguar Security Services`,
          text: emailContent,
        }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("Resend API error:", error);
        return NextResponse.json(
          { error: "Failed to send message. Please try again later." },
          { status: 500 }
        );
      }
    } else if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: contactEmail,
        replyTo: body.email,
        subject: `New Enquiry from ${body.name} - Jaguar Security Services`,
        text: emailContent,
      });
    } else {
      console.log("=== CONTACT FORM SUBMISSION (no email provider configured) ===");
      console.log(emailContent);
      console.log("==============================================================");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
