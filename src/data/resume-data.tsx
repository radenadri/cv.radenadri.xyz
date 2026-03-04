import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adriana Eka Prayudha",
  initials: "AEP",
  location: "Bandung, Indonesia, GMT+7",
  locationLink: "https://maps.app.goo.gl/sV57Te2gtvwFDWsx9",
  about: `Building modern web and mobile applications with a focus on functionality and aesthetics.`,
  summary: `Skilled fullstack developer with focus on developing and maintaining web and mobile applications. Led the implementation of new system which resulted in website performance improvement and user satisfaction.`,
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
      title: "Freelance Fullstack Developer",
      // logo: ParabolLogo,
      start: "Oct 2025",
      end: "now",
      description: `
      Develop solutions and helping people reach their goals in technology needs. Design and optimize database schemas, including query tuning, to improve application performance. Implement full-stack solutions using Laravel and React for web applications and Flutter / React Native for mobile apps.
      `,
    },
    {
      company: "Pentacode",
      link: "https://pentacode.id",
      badges: ["Hybrid"],
      title: "Fullstack Developer",
      // logo: ParabolLogo,
      start: "Aug 2022",
      end: "Sep 2025",
      description: `Build and develop web apps using Laravel and React including features for e-commerce, HR, inventory, and payment dashboards. Build and develop cross platform mobile application (Android & iOS) using Flutter and React Native. Write clean, structured, and maintainable code using modern practices. Use Git for version control and debugging.`,
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Bun",
    "React",
    "React Native",
    "PHP",
    "Laravel",
    "WordPress",
    "Git",
    "PostgreSQL",
    "Redis",
    "Dart",
    "Flutter",
    "Firebase",
  ],
  projects: [
    {
      title: "AITI Coding.bn Mentor",
      techStack: ["HTML", "CSS", "Javascript", "React"],
      description: `Coding.bn is a learning programme to train youth jobseekers with the necessary in-demand programming skills so they are more employable and industry-ready. It also aims to tackle the issue on unemployment in Brunei Darussalam. I had the opportunity to join and participate as a Frontend Developer mentor in this program. The material I focus on is basic web programming from HTML, CSS, Javascript and React.js`,
    },
    {
      title: "PT Pos Properti Indonesia",
      techStack: ["Typescript", "Node.js", "Express"],
      description: `I work on several internal projects from Pos Properti Indonesia, including creating a web service for payment integration with local banks in Indonesia, used in internal POS applications in several business lines, namely PointArena and PointLab. Then I also helped develop a web app for e-signing documents. The technology I used for developing the services is Node.js with Express.`,
    },
    {
      title: "Sound of Justice",
      techStack: ["Dart", "Flutter"],
      description: `Sound of Justice Radio is a live radio application that hosted by Kejaksaan Tinggi RI to be one of their program to be the channel for education and also entertainment. Built with Flutter because we needed a cross-platform framework. I also taking parts in publishing the apps in Play Store and App Store.`,
    },
    {
      title: "Passport",
      techStack: ["Dart", "Flutter"],
      description: `My team and I received input from management to develop our own HRIS System because there are still many manual recap operations and attendance systems that have not yet been assessed as data integrated. Our team finally developed an HRIS application which is used for daily operations in our office including daily attendance, timeoff requests, business trips, and others. I took the initiative to fill the empty mobile developer position to develop a mobile app using Flutter because we needed a cross-platform framework. I also taking parts in publishing the apps in Play Store and App Store.`,
    },
    {
      title: "CekBPOM",
      techStack: ["PHP", "Laravel", "PostgreSQL"],
      description: `Cek BPOM is a website created by BPOM as a place to check the validity and registration numbers of products circulating on the Indonesian market. I successfully migrated the codebase to Laravel 11 and also migrated the database from SQL Server to PostgreSQL.`,
    },
    {
      title: "PT. KAI Indonesia",
      techStack: ["PHP", "Laravel", "PostgreSQL"],
      description: `My first challenging project which gave me quite a pleasant experience, I was given an assignment to develop an initial version of a web-based application in the form of displaying train arrival and departure schedules posted at train stations under KAI. Currently it is installed on many shows on stations under DAOP 1 and DAOP 2. The initial version was built with PHP and Laravel with PostgreSQL database.`,
    },
  ],
} as const;
