import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const footerData = [
    {
        title: "Sitemap",
        links: [
            {
                name: "home",
                path: "/"
            },
            {
                name: "works",
                path: "/works"
            },
            {
                name: "about",
                path: "/about"
            },
            {
                name: "blog",
                path: "/blog"
            }
        ]
    },
    {
        title: "Resources",
        links: [
            {
                name: "resources",
                path: "/styleguide"
            },
            {
                name: "changelog",
                path: "/styleguide"
            },
            {
                name: "licenses",
                path: "/licenses"
            },
            {
                name: "404",
                path: "/not-found"
            }
        ]
    },
    {
        title: "Social",
        links: [
            {
                name: "Github",
                path: "https://github.com/samuel12-dot"
            },
            {
                name: "twitter",
                path: "/twitter"
            },
            {
                name: "instagram",
                path: "/instagram"
            },
            {
                name: "linkedin",
                path: "https://www.linkedin.com/in/samuel-ayodeji-3a0433246/"
            }
        ]
    }
]




const servicesInfo = [

    {
        id: "01",
        title: "Research & Planning",
        desc: "User research, audits and plan.",
    },
    {
        id: "02",
        title: "Branding",
        desc: "User research, audits and plan.",
    },
    {
        id: "03",
        title: "UI/UX Design",
        desc: "User research, audits and plan.",
    },
    {
        id: "04",
        title: "Coding",
        desc: "User research, audits and plan.",
    }

]

const workData = [

    {
        name: "Weather App",
        year: "2025",
        description: "Fetch and display real-time weather for any city.",
        category: "React/Next.js",
        type: "APIs & Data",
        image: "weather app"
    },
    {
        name: "Image Carousel",
        year: "2025",
        description: "Cycle through images with auto-slide and controls.",
        category: "React/Next.js",
        type: "UI & State",
        image: "image carousel"
    },
    {
        name: "Color Picker",
        year: "2025",
        description: "Select and copy HEX/RGB color values.",
        category: "React/Next.js",
        type: "UI & State",
        image: "color picker"
    },
    {
        name: "Tic tac toe game",
        year: "2025",
        description: "Two-player tic-tac-toe with win/draw detection.",
        category: "React/Next.js",
        type: "UI & State",
        image: "tic tac toe game"
    },
    {
        name: "Quiz app",
        year: "2025",
        description: "Multiple-choice quiz with scoring and retake option.",
        category: "React/Next.js",
        type: "APIs & Data",
        image: "quiz app"
    },
    {
        name: "Countdown timer",
        year: "2025",
        description: "Count down to a target date/time with alerts.",
        category: "JavaScript",
        type: "Games & Utilities",
        image: "countdown timer"
    },
    {
        name: "Random Quote Generator",
        year: "2025",
        description: "Display and generate random quotes with simple styling.",
        category: "JavaScript",
        type: "DOM & Logic",
        image: "thumbnail1"
    },
    {
        name: "Memory Game (Matching Pairs)",
        year: "2025",
        description: "Flip cards to match pairs with attempt tracking.",
        category: "JavaScript",
        type: "Games & Utilities",
        image: "thumbnail2"
    },
    {
        name: "Quiz app",
        year: "2025",
        description: "Multiple-choice quiz with scoring and retake option.",
        category: "React/Next.js",
        type: "APIs & Data",
        image: "thumbnail3"
    },
    {
        name: "Quiz app",
        year: "2025",
        description: "Multiple-choice quiz with scoring and retake option.",
        category: "React/Next.js",
        type: "APIs & Data",
        image: "thumbnail3"
    }
]

const experiences = [

    {
        title: "Software Engineering Intern",
        company: "Volts by Univelcity",
        startDate: "July 7th",
        endDate: "Present",
    },
    {
        title: "Product Design Trainee",
        company: "Univelcity",
        startDate: "July 2023",
        endDate: "Sept 2023"
    },
    {
        title: "Product Design Trainee",
        company: "Univelcity",
        startDate: "July 2023",
        endDate: "Sept 2023"
    },
    {
        title: "Product Design Trainee",
        company: "Univelcity",
        startDate: "July 2023",
        endDate: "Sept 2023"
    }

]

const skills = [

    {
        name: "HTML",
        src: "/images/skills/html.png"
    },
    {
        name: "CSS",
        src: "/images/skills/css.png"
    },
    {
        name: "JAVASCRIPT",
        src: "/images/skills/javascript.png"
    },
    {
        name: "TAILWIND CSS",
        src: "/images/skills/tailwindcss.png"
    },
    {
        name: "REACT",
        src: "/images/skills/react.png"
    },
    {
        name: "NEXT.JS",
        src: "/images/skills/nextjs.png"
    },
]

const awards = [
    {
        title: "Software Engineering Intern",
        year: "2025",
        name: "Behance",
    },
    {
        title: "Product Design Trainee",
        year: "2025",
        name: "Univelcity"
    },
    {
        title: "Product Design Trainee",
        year: "2025",
        name: "Univelcity"
    },
    {
        title: "Product Design Trainee",
        year: "2025",
        name: "Volts by Univelcity"
    }

]

const statsData = [

    {
        endCountNum: 3,
        endCountText: "+",
        text: "Month Experience"
    },
    {
        endCountNum: 10,
        endCountText: "+",
        text: "Project's Complete"
    },
    {
        endCountNum: 16,
        endCountText: "+",
        text: "Winning Awards"
    },
    {
        endCountNum: 16,
        endCountText: "+",
        text: "Winning Awards"
    }

]

const socials = [
    {
        icon: <FaGithub />,
        href: "https://github.com/samuel12-dot"
    },
    {
        icon: <FaLinkedin />,
        href: "https://github.com/samuel12-dot"
    },
    {
        icon: <FaFacebook />,
        href: ""
    }
]

export { footerData, servicesInfo, workData, experiences, skills, awards, statsData, socials }