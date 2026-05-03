import { ERRORS, SERVICE_METHODS, Ticket } from "./types";
import { ticketSchema } from "@/zod/validations-schema";

function resolveSubmitEndpoint() {
  const fallbackEndpoint = "http://localhost:3000/api/send-email";
  const configuredOrigin =
    process.env.SITE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  if (!configuredOrigin) {
    return fallbackEndpoint;
  }

  const preferredLocalProtocol = /^(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i;
  const normalizedOrigin = /^https?:\/\//i.test(configuredOrigin)
    ? configuredOrigin
    : `${preferredLocalProtocol.test(configuredOrigin) ? "http" : "https"}://${configuredOrigin}`;

  try {
    const endpoint = new URL("/api/send-email", normalizedOrigin);

    if (endpoint.protocol !== "http:" && endpoint.protocol !== "https:") {
      return fallbackEndpoint;
    }

    return endpoint.toString();
  } catch {
    return fallbackEndpoint;
  }
}

export function createService(): SERVICE_METHODS {
  async function create(ticket: Ticket) {
    const parsedTicket = ticketSchema.safeParse(ticket);

    if (!parsedTicket.success) {
      const flattenedErrors = parsedTicket.error.flatten().fieldErrors;
      const errors: ERRORS = {
        name: flattenedErrors.name?.[0],
        email: flattenedErrors.email?.[0],
        message: flattenedErrors.message?.[0],
      };

      return {
        success: false,
        message: "Validation failed. Please check your input.",
        errors,
      };
    }

    try {
      const submitEndpoint = resolveSubmitEndpoint();

      const response = await fetch(submitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedTicket.data),
      });

      let data: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        data = (await response.json()) as {
          success?: boolean;
          message?: string;
        };
      } catch {
        data = {};
      }

      if (!response.ok || !data.success) {
        return {
          success: false,
          message:
            data.message ||
            `Could not send your message (status ${response.status}).`,
        };
      }

      return {
        success: true,
        message: data.message || "Ticket submitted successfully!",
      };
    } catch (error) {
      console.error("Error while creating contact ticket:", error);

      const errorMessage =
        error instanceof Error
          ? `An unexpected error occurred while submitting the ticket: ${error.message}`
          : "An unexpected error occurred while submitting the ticket.";

      return {
        success: false,
        message: errorMessage,
      };
    }
  }

  return {
    create,
  };
}
