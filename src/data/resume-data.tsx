import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adriana Eka Prayudha",
  initials: "AEP",
  location: "Jakarta, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/sV57Te2gtvwFDWsx9",
  about: `Enthusiastic developer with a passion for creating engaging digital, love to creating a usable web
applications to solve the business problems.`,
  summary: `Skilled frontend developer with focus on developing and
maintaining front-end web applications. Led the implementation of new front-end development system which
resulted in website performance improvement and user satisfaction. Adept in collaborating with cross-
functional teams and delivering projects on-time and on-budget.`,
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
      company: "Pentacode",
      link: "https://pentacode.id",
      badges: ["Hybrid"],
      title: "Frontend Developer",
      // logo: ParabolLogo,
      start: "2022",
      end: "2025",
      description: `Collaborating with designers and product managers to translate UI/UX designs into functional apps. Writing clean, maintainable, and efficient code.
        Implementing responsive designs to ensure seamless user experiences across various devices. Built a UI for inventory management, e-commerce, HR apps, payment gateway dashboard and custom tailored apps by request, mostly using React`,
    },
    {
      company: "Self-employed",
      link: "",
      badges: ["Freelance"],
      title: "Freelance Web Developer",
      // logo: ParabolLogo,
      start: "2019",
      end: "2022",
      description: `
      Creating website with Wordpress and Laravel. Improving existing web apps with latest technology. Making database schema. Improving applications performance by tuning the query.
      `,
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
