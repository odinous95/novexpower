"use server";

import { contact } from "../instance";

export async function sendTicket(prevState: any, payload: FormData) {
  const name = ((payload.get("name") as string) || "").trim();
  const email = ((payload.get("email") as string) || "").trim();
  const companyValue = ((payload.get("company") as string) || "").trim();
  const phoneValue = ((payload.get("phone") as string) || "").trim();
  const message = ((payload.get("message") as string) || "").trim();
  const company = companyValue.length > 0 ? companyValue : undefined;
  const phone = phoneValue.length > 0 ? phoneValue : undefined;
  const services = payload.getAll("services") as string[];

  const response = await contact.service.create({
    name,
    email,
    company,
    phone,
    message,
    services,
  });

  // console.log("Response from contact service:", response);

  if (response.success) {
    return {
      success: true,
      message: response.message,
    };
  } else {
    return {
      success: false,
      message: response.message,
      errors: response.errors as {
        name?: string;
        email?: string;
        company?: string;
        message?: string;
      },
    };
  }
}
