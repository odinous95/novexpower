// import { EmailMessage } from "cloudflare:email";

// export default {
//   async email(message, env, ctx) {
//     const sender = "support@novexpower.com";
//     const recipient = message.from;
//     const subject = "Email Routing Auto-reply";
//     const originalMessageId = message.headers.get("Message-ID"); // Get the original Message-ID
//     const messageId = `<${Date.now()}-${Math.random()
//       .toString(36)
//       .substring(7)}@novexpower.com>`;

//     const emailBody = `Hello,

// Thank you for reaching out to Novexpower! We have received your message and will get back to you shortly.

// Best regards,
// The Novexpower Team`;

//     const rawMessage = [
//       `From: ${sender}`,
//       `To: ${recipient}`,
//       `Subject: ${subject}`,
//       `Message-ID: ${messageId}`,
//       `In-Reply-To: ${originalMessageId}`, // Reference the original email
//       `References: ${originalMessageId}`, // Helps with email threading
//       `MIME-Version: 1.0`,
//       `Content-Type: text/plain; charset=UTF-8`,
//       "",
//       emailBody,
//     ].join("\r\n");

//     const replyMessage = new EmailMessage(sender, recipient, rawMessage);

//     try {
//       await message.reply(replyMessage);
//     } catch (e) {
//       console.error("Error sending email:", e);
//     }
//   },
// };
