import { Resend } from "resend";
import { ticketSchema } from "@/zod/validations-schema";
import { escapeHtml } from "@/utils/escapeHtml";

type ResponseData = {
  success: boolean;
  message: string;
};

export async function POST(req: Request): Promise<Response> {
  try {
    const rawPayload = await req.json();
    const parsedTicket = ticketSchema.safeParse(rawPayload);

    if (!parsedTicket.success) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid input",
        } as ResponseData),
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.CONTACT_FROM_EMAIL?.trim() || "";
    const to = process.env.CONTACT_TO_EMAIL?.trim() || from;

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email service is not configured: missing RESEND_API_KEY.",
        } as ResponseData),
        { status: 500 },
      );
    }

    if (!to) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email service is not configured: missing CONTACT_TO_EMAIL.",
        } as ResponseData),
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const { name, email, message } = parsedTicket.data;
    const submittedAt = new Date().toISOString();

    const resendResult = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New contact form submission: ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <hr />
        <p><strong>Message</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
      text: [
        "New contact form submission",
        `Name: ${name}`,
        `Email: ${email}`,
        `Submitted: ${submittedAt}`,
        "Message:",
        message,
      ].join("\n"),
    });

    if (resendResult.error) {
      return new Response(
        JSON.stringify({
          success: false,
          message: resendResult.error.message || "Resend failed to send email.",
        } as ResponseData),
        { status: 400 },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Ticket submitted successfully!",
      } as ResponseData),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      } as ResponseData),
      { status: 500 },
    );
  }
}
