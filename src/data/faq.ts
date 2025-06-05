import { IFAQ } from "@/components/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Why ${siteDetails.siteName} ?`,
    answer:
      "We build modular battery packs that fit any form or shape, ditching the generic boxy designs that dominate now. Our immersion-cooled architecture enables faster charging and discharging while acting as a built-in fire suppressant; if a cell fails, heat will not spread to its neighbors, boosting safety. Customers can order online, from a single to 100s of units, by sketching the space and electrical requirements. Our AI-powered design-engine instantly configures, optimizes, and prices a bespoke pack with lead-time.",
  },
  {
    question: `What makes ${siteDetails.siteName} battery pack unique?`,
    answer:
      "We meet our customer’s need for battery packs that fit their design requirements: to deliver a pack that fits the 			space they have available and not just a generic box. Our innovative production concept also allows rapid delivery, safety and high-performance, while still keeping costs under control. Partnering with an Asian supplier early in the electrification journey is hard. This allows us to build a long-term supplier relationship as their trusted battery pack supplier. The pack must fit the customer's technical requirements, budget, and schedule over their entire product development process.",
  },
  {
    question: "How does Novex build it’s battery packs?",
    answer: `It is a secret!`,
  },
];

