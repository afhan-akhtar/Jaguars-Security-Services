import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  botcheck?: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return NextResponse.json(
        { error: "Contact form is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const body: ContactBody = await request.json();

    if (body.botcheck) {
      return NextResponse.json({ success: true });
    }

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

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: body.name.trim(),
        email: body.email.trim(),
        phone: body.phone?.trim() || "Not provided",
        service: body.service?.trim() || "Not specified",
        message: body.message.trim(),
        subject: `New Enquiry from ${body.name.trim()} - Jaguar Security Services`,
        from_name: "Jaguar Security Services Website",
      }),
    });

    const result = await res.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
      return NextResponse.json(
        { error: result.message || "Failed to send message. Please try again later." },
        { status: 500 }
      );
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
