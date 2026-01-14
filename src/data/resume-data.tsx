import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adriana Eka Prayudha",
  initials: "AEP",
  location: "Jakarta, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/sV57Te2gtvwFDWsx9",
  about: `Enthusiastic developer with a passion for creating engaging digital, love to creating a usable web and mobile applications to solve the business problems.`,
  summary: `Skilled fullstack engineer with focus on developing and maintaining web and mobile applications. Led the implementation of new system which resulted in website performance improvement and user satisfaction.`,
  avatarUrl:
    "https://res.cloudinary.com/dvoj90vcy/image/upload/v1727768323/closeup_ogukcv.jpg",
  personalWebsiteUrl: "https://radenadri.xyz",
  contact: {
    email: "radenadriep@gmail.com",
    tel: "-",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/radenadri",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/radenadri",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [],
  work: [
    {
      company: "Self-employed",
      link: "",
      badges: ["Freelance"],
      title: "Freelance Fullstack Engineer",
      // logo: ParabolLogo,
      start: "2025",
      end: "now",
      description: `
      Develop websites and applications with responsive designs and enhance features using the latest technologies. Design and optimize database schemas, including query tuning, to improve application performance. Implement full-stack solutions using Laravel and React for application development needs.
      `,
    },
    {
      company: "Pentacode",
      link: "https://pentacode.id",
      badges: ["Hybrid"],
      title: "Fullstack PHP Developer",
      // logo: ParabolLogo,
      start: "2022",
      end: "2025",
      description: `Build and develop responsive web interfaces using Wordpress, Laravel and React including features for e-commerce, HR, inventory, and payment dashboards. Build a backend and also build a web services (REST API) to be integrated with the frontend, also collaborate with backend developers for API integration, feature enhancements, and ensuring performance and cross-device compatibility. Writing code documentation, building application schema diagram and also ERD or any application flow that needed. Write clean, structured, and maintainable code using modern practices. Use Git for version control, debugging, and ensuring an optimal user experience through responsive design and frontend optimization.`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "Python",
  ],
  projects: [
    {
      title: "POS Properti Payment Gateway",
      techStack: ["PHP", "Laravel", "PostgreSQL", "NodeJS", "TypeScript"],
      description:
        "INTERNAL USE ONLY - A payment gateway portal for POS Properti.",
      link: {
        label: "View study case",
        href: "https://radenadri.xyz/work/pos-properti-payment-gateway",
      },
    },
    {
      title: "Passport",
      techStack: ["Dart", "Flutter", "Android", "iOS"],
      description:
        "INTERNAL USE ONLY - Mobile app for attendance solution for employees and HR teams. Applied in my previous company, Pentacode. ",
      link: {
        label: "View study case",
        href: "https://radenadri.xyz/work/passport",
      },
    },
  ],
} as const;
