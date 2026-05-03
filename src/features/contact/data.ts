import { ContactData } from "./types";

export const defaultContactData: ContactData = {
  frontmatter: {
    enable: true,
    title: "Contact Us",
    description:
      "Tell us what you need and our team will get back to you quickly with next steps.",
    inputs: [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
    ],
    checkboxes: [],
    textareas: [{ name: "message", label: "Your Message", rows: 5 }],
    submit: {
      label: "Send Message",
    },
    successMessage: "Thanks! Your message was sent successfully.",
    errorMessage: "Something went wrong while sending your message.",
  },
  content: "",
};
