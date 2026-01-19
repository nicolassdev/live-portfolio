import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: ["anthonydaen25@gmail.com", email],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
