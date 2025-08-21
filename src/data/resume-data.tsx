import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adriana Eka Prayudha",
  initials: "AEP",
  location: "Bandung, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/sV57Te2gtvwFDWsx9",
  about: `Enthusiastic developer with a passion for creating engaging digital, love to creating a usable web
applications to solve the business problems.`,
  summary: `Skilled frontend developer with focus on developing and
maintaining front-end web applications. Led the implementation of new front-end development system which
resulted in website performance improvement and user satisfaction. Adept in collaborating with cross-
functional teams and delivering projects on-time and on-budget.`,
  avatarUrl:
    "https://res.cloudinary.com/dvoj90vcy/image/upload/v1727768323/closeup_ogukcv.jpg",
  personalWebsiteUrl: "https://pinkary.com/@radenadri",
  contact: {
    email: "radenadriep@gmail.com",
    tel: "-",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/radenadri",
        icon: GitHubIcon,
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
      start: "2020",
      end: "2022",
      description: `
      Creating website with Wordpress and Laravel. Improving existing web apps with latest technology. Making database schema. Improving applications performance by tuning the query.
      `,
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Vue.js",
    "PHP",
    "Laravel",
    "Wordpress",
    "MySQL",
    "MariaDB",
    "SQLite",
    "Redis",
    "Flutter",
    "Firebase",
    "Sentry",
    "Dart",
    "Flutter",
    "Android",
  ],
  projects: [
    {
      title: "Biofarma Mediverse RME",
      techStack: ["React", "Redux", "TypeScript", "Tailwind CSS"],
      description:
        "INTERNAL USE ONLY - ERP system for Biofarma Mediverse RME. Backed with Frappe Framework and Python. Frontend with React and Redux.",
      link: {
        label: "#",
        href: "#",
      },
    },
    {
      title: "POS Properti Payment Gateway",
      techStack: ["PHP", "Laravel", "PostgreSQL", "NodeJS", "TypeScript"],
      description:
        "INTERNAL USE ONLY - A payment gateway portal for POS Properti.",
      link: {
        label: "#",
        href: "#",
      },
    },
    {
      title: "Smart DP10 - Delivery Platform",
      techStack: ["React", "React Query", "TypeScript"],
      description: `INTERNAL USE ONLY - Building the admin panel for handle the service delivery to user MSISDN.`,
      link: {
        label: "#",
        href: "#",
      },
    },
    {
      title: "StarBP",
      techStack: ["Dart", "Flutter", "Android"],
      description:
        "INTERNAL USE ONLY - A mobile app for StarBP sales intelligence.",
      link: {
        label: "PlayStore",
        href: "https://play.google.com/store/apps/details?id=id.pentacode.bintang&hl=id",
      },
    },
    {
      title: "Face Recognition service with DeepFace",
      techStack: ["Python", "DeepFace", "FastAPI", "MySQL", "Docker"],
      description: "A face recognition service for attendance system.",
      link: {
        label: "github.com/radenadri/face-recognition",
        href: "https://github.com/radenadri/face-recognition",
      },
    },
    {
      title: "Friends Entertainment",
      techStack: ["PHP", "Laravel", "Bootstrap"],
      description: "A company profile website for Friends Entertainment.",
      link: {
        label: "friends.co.id",
        href: "https://friends.co.id",
      },
    },
  ],
} as const;
