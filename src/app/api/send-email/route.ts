import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      console.error(
        "Resend is not initialized. Check your RESEND_API_KEY environment variable.",
      );
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const { name, company, email, message } = await request.json();

    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // Replace with your verified sender email
      to: "info@novexpower.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, data: result.data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
