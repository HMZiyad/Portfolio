import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo = {
    name: "HMZiyad",
    role: "AI Developer & Full Stack Engineer",
    bio: "I am a Software Engineer and AI Specialist dedicated to building intelligent, scalable systems. My expertise ranges from low-level system programming in C++ to developing modern, full-stack web applications using Next.js and TypeScript. Currently deep diving into Generative AI and RAG Pipelines.",
    socials: [
        { name: "GitHub", icon: Github, href: "https://github.com/HMZiyad" },
        { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/hm-ziyad-09154b234/" },
        { name: "Email", icon: Mail, href: "mailto:ziyadhm399@gmail.com" },
    ],
};

export const skills = [
    { name: "TypeScript", level: "Expert", color: "#3178C6" },
    { name: "Python", level: "Advanced", color: "#3776AB" },
    { name: "Next.js", level: "Expert", color: "#000000" },
    { name: "React", level: "Expert", color: "#61DAFB" },
    { name: "Java", level: "Intermediate", color: "#007396" },
    { name: "C++", level: "Advanced", color: "#00599C" },
    { name: "Tailwind CSS", level: "Expert", color: "#06B6D4" },
    { name: "Generative AI", level: "Advanced", color: "#FF0080" },
];

export const experience = [
    {
        company: "Spark Tech Agency",
        role: "AI Developer",
        period: "Present",
        description: "Sister Concern of Betopia Groups. Working on AI-powered EdTech solutions and RAG pipelines.",
        type: "Full-time",
    },
    {
        company: "AUST Satellite Lab",
        role: "Undergraduate Research Assistant",
        period: "Jun 2025 - Present", // Adjust date if needed, assumed from context or generic
        description: "Engineered radio communication systems for satellite projects.",
        type: "Research",
    },
];

export const education = [
    {
        institution: "Ahsanullah University of Science and Technology",
        degree: "BSc (CSE)",
        period: "2025",
    },
    {
        institution: "Saint Joseph Higher Secondary School",
        degree: "XII (HSC)",
        period: "2020",
    },
];

export const leadership = [
    {
        organization: "AUST Programming and Informatics Club",
        role: "President",
        period: "Jun 1, 2025 – Present",
        description: "Organized IUPC (Inter University Programming Contest) & conducted sessions for 300+ University students on AI/ML, GitHub, CNCF etc. Organized She-Stem National Job Fair.",
    },
    {
        organization: "AUSTSAT (Embeded System and Programming)",
        role: "Head",
        period: "July 11, 2025 – Present",
        description: "Designed Satellite Circuits, Embedded programming, Onboard Sensors Integration and Developed an Image encoding and decoding technique for Long range radio transmission.",
    },
    {
        organization: "CSE Carnival 5.0, AUST",
        role: "Organizer",
        period: "Feb 1, 2025 - Apr 13, 2025",
        description: "Legacy event of CSE department. Organized IAPC (Intra AUST Programming Contest), Code Refactoring Contest, Software Exhibition and more.",
    },
    {
        organization: "Josephite Math Club, SJHSS",
        role: "Executive Committee",
        period: "2019-2020",
        description: "Organized a nation-wide Math Olympiad in Saint Joseph Higher Secondary School.",
    },
    {
        organization: "Scintilla Science Club, SJHSS",
        role: "Executive Committee",
        period: "2018-2019",
        description: "Active member of the executive committee organizing science festivals and events.",
    },
];

export const achievements = [
    {
        title: "Ranked Top 15 - Solvio AI Hackathon 2025",
        description: "AI hackathon presented by Sheba Platform.",
    },
    {
        title: "Top 10 Ranking - SUST Inter-University Hackathon 2023",
        description: "Achieved top 10 out of 100 teams competing nationwide.",
    },
    {
        title: "1st Runners Up - Intra AUST Programming Contest",
        description: "Junior Category, Fall-2021.",
    },
    {
        title: "2nd Runners Up - Intra AUST Programming Contest",
        description: "Senior Category, Spring-2022.",
    },
    {
        title: "2nd Position - ACM Lab Selection Contest",
        description: "Competitive programming selection contest.",
    },
];

export const projects = [
    {
        title: "Calm-Mind",
        description: "An intelligent, AI-powered meditation application designing personalized sessions based on mood and needs.",
        tech: ["TypeScript", "AI", "React"],
        link: "https://github.com/HMZiyad/Calm-Mind",
        github: "https://github.com/HMZiyad/Calm-Mind",
    },
    {
        title: "Medhabi.AI",
        description: "A RAG pipeline tutor for physics (class 9-10) tailored to the NCTB Bangla version curriculum.",
        tech: ["Python", "RAG", "LLM"],
        link: "https://github.com/HMZiyad/Medhabi.AI",
        github: "https://github.com/HMZiyad/Medhabi.AI",
    },
    {
        title: "Voice-Assistant",
        description: "Voice assistant leveraging 11labs and LLMs for natural conversational interactions.",
        tech: ["JavaScript", "11Labs", "OpenAI"],
        link: "https://github.com/HMZiyad/Voice-Assistant",
        github: "https://github.com/HMZiyad/Voice-Assistant",
    },
    {
        title: "JWT-Playground",
        description: "A fun and educational environment for kids (and adults!) to learn about JSON Web Tokens.",
        tech: ["Java", "Security", "Web"],
        link: "https://github.com/HMZiyad/JWT-Playground",
        github: "https://github.com/HMZiyad/JWT-Playground",
    },
    {
        title: "Shonali-Desh",
        description: "A web project contributing to the digital ecosystem.",
        tech: ["TypeScript", "Next.js"],
        link: "https://github.com/HMZiyad/Shonali-Desh",
        github: "https://github.com/HMZiyad/Shonali-Desh",
    },
];
