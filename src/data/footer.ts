import { IMenuItem, ISocials } from "@/components/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Empowering businesses with cutting-edge battery technology.",
  quickLinks: [
    {
      text: "The Team",
      url: "#team",
    },
  ],
  email: "info@novexpower",
  telephone: "",
  socials: {
    linkedin: "https://www.linkedin.com/company/novexpower",
  },
};
