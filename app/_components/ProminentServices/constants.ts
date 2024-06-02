import { ProminentServiceItem } from "./models";

const prominentServiceDarkBg = "dark:bg-dark-700";

export const prominentServices: ProminentServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    iconClass: "fas fa-laptop-code",
    cardBgClass: `bg-light ${prominentServiceDarkBg}`,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Having a mobile-optimized site is more important than ever. Our mobile development team makes your business relevant to customers on-the-go.",
    iconClass: "fas fa-mobile-alt",
    cardBgClass: `bg-light ${prominentServiceDarkBg}`,
  },
  {
    id: 3,
    title: "QA & Testing",
    description:
      "Our QA team performs rigorous quality assurance testing throughout the entire development process to ensure that your app runs across all devices flawlessly.",
    iconClass: "fas fa-vial",
    cardBgClass: `bg-light ${prominentServiceDarkBg}`,
  },
];
