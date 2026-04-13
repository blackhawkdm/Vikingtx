import { NextResponse } from "next/server";

interface ContactPayload {
  firstName: string;
  lastName: string;
  phone: string;
  interest?: string;
  message?: string;
}

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { firstName, lastName, phone } = data;

  if (!firstName?.trim() || !lastName?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { error: "First name, last name, and phone are required." },
      { status: 400 }
    );
  }

  // --- Email delivery ---
  // Configure one of the following options:
  //
  // Option A: Resend (https://resend.com)
  //   1. npm install resend
  //   2. Add RESEND_API_KEY to .env.local
  //   3. Uncomment the block below
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Viking Website <noreply@vikingtx.com>",
  //   to: "jmartin@vikingtx.com",
  //   subject: `New quote request from ${firstName} ${lastName}`,
  //   text: [
  //     `Name: ${firstName} ${lastName}`,
  //     `Phone: ${phone}`,
  //     `Interest: ${data.interest ?? "Not specified"}`,
  //     `Message: ${data.message ?? ""}`,
  //   ].join("\n"),
  // });
  //
  // Option B: Nodemailer / SMTP
  //   1. npm install nodemailer @types/nodemailer
  //   2. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to .env.local
  //   3. Wire up transporter here

  // Log submission server-side until email is configured
  console.log("Contact form submission:", {
    name: `${firstName} ${lastName}`,
    phone,
    interest: data.interest,
    message: data.message,
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
