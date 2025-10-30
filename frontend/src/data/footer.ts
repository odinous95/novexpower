import { IMenuItem, ISocials } from "@/components/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Empowering businesses with cutting-edge battery technology.",
  quickLinks: [
    //{
    //  text: "Features",
    //  url: "#features",
    //},
    //{
     // text: "Pricing",
     // url: "#pricing",
    //},
    {
      text: "The Team",
      url: "#testimonials",
    },
  ],
  email: "info@novexpower",
  telephone: "+46 764143259",
  socials: {
    //twitter: "https://twitter.com/Twitter",
    //facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com/company/novexpower",
    // threads: 'https://www.threads.net',
    //instagram: "https://www.instagram.com",
  },
};
