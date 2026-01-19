import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL || !process.env.CONTACT_EMAIL) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,       // your verified domain email
      to: [process.env.CONTACT_EMAIL],    // your inbox
      reply_to: email,                     // user email for replying
      subject: `New Contact Form: ${subject}`,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Message from: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
