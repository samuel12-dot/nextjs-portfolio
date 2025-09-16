
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
        title: "Frontend Development",
        desc: "Responsive, accessible interfaces.",
    },
    {
        id: "02",
        title: "Backend Development",
        desc: "APIs and server-side logic.",
    },
    {
        id: "03",
        title: "Full-Stack Solutions",
        desc: "End-to-end web applications.",
    },
    {
        id: "04",
        title: "Version Control & Deployment",
        desc: "Collaboration and production apps.",
    }
]

const workData = [
    {
        name: "Character Counter App",
        year: "2025",
        description: "Count characters, words, and sentences in text with live updates and optional copy/export feature.",
        fullDescription: "A lightweight and efficient tool designed to help users analyze text in real time. The Character Counter App provides instant insights into characters, words, and sentences, making it ideal for writers, editors, and developers.",
        category: "React/Next.js",
        type: "String Manipulation & State",
        image: "character counter",
        liveDemoLink: "https://character-counter-blond.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/character-counter.git",
        overview: "The Character Counter App delivers real-time analysis of any text input. Beyond simple character counting, it breaks down words and sentences with live updates, enhancing productivity for users who need accuracy and speed.",
        overviewDescription: [
            "Live count of characters, words, and sentences",
            "Responsive interface built with React and Next.js",
            "Optional copy and export feature for convenience"
        ]
    },
    {
        name: "Currency Converter",
        year: "2025",
        description: "Convert amounts between currencies using live exchange rates with support for swapping currencies.",
        fullDescription: "The Currency Converter is a practical and efficient web application built with React. It fetches live exchange rates through APIs and provides seamless conversion between different currencies. Designed with usability in mind, the app allows users to quickly input values, select currencies, and swap them instantly.",
        category: "React/Next.js",
        type: "Async & API",
        image: "currency converter",
        liveDemoLink: "https://currency-converter-seven-peach.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/currency-converter.git",
        overview: "This tool simplifies currency conversion by delivering accurate, real-time results through API integration. With its responsive and intuitive interface, the app is ideal for travelers, businesses, and anyone managing cross-currency transactions.",
        overviewDescription: [
            "Convert amounts between multiple currencies using live exchange rates",
            "Swap selected currencies instantly for quick recalculations",
            "Responsive and user-friendly interface built with React"
        ]
    },
    {
        name: "Palindrome Checker",
        year: "2025",
        description: "Check whether a word or phrase is a palindrome, ignoring spaces, punctuation, and case. Includes clear true/false messages with optional live validation.",
        fullDescription: "The Palindrome Checker is a lightweight JavaScript application that determines whether a given word or phrase reads the same backward and forward. It intelligently ignores spaces, punctuation, and letter casing to provide accurate results. With an intuitive interface, users get clear true/false feedback, and optional live validation enhances the interactive experience.",
        category: "JavaScript",
        type: "String Manipulation & Conditionals",
        image: "palindrome checker",
        liveDemoLink: "https://palindrome-checker-phi-eight.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/palindrome-checker.git",
        overview: "A simple yet effective tool that validates palindromes in real-time. Designed to improve logical thinking and string manipulation skills, it serves as a great utility for learners, developers, and enthusiasts.",
        overviewDescription: [
            "Checks words and phrases while ignoring spaces, punctuation, and case",
            "Provides clear true/false results instantly",
            "Optional live validation for interactive feedback"
        ]
    },
    {
        name: "Tip Calculator (Extended)",
        year: "2025",
        description: "Split bill among people, choose preset or custom tip percentages, and calculate per-person tip and total.",
        fullDescription: "The Tip Calculator (Extended) is a practical tool that helps users quickly and accurately split bills. It allows for preset or custom tip percentages, making it flexible for different scenarios. With a clean and responsive design, users can input the bill amount, number of people, and tip preference to instantly see per-person totals.",
        category: "React/Next.js",
        type: "Events & Arithmetic",
        image: "tip calculator",
        liveDemoLink: "https://tip-calculator-beige-one.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/tip-calculator.git",
        overview: "An intuitive bill-splitting application designed to simplify group dining experiences. The app ensures fair calculations by dividing tips and totals evenly, while also supporting custom inputs for flexibility.",
        overviewDescription: [
            "Split bills between multiple people with ease",
            "Choose from preset or enter custom tip percentages",
            "Instant calculation of per-person tip and total"
        ]
    },
    {
        name: "Random Quote Generator",
        year: "2025",
        description: "Display and generate random quotes with simple styling.",
        fullDescription: "The Random Quote Generator is a lightweight JavaScript app that displays a new quote each time the user interacts with it. With a clean and minimal interface, it’s designed to inspire users and demonstrate the use of DOM manipulation and logic in a fun way.",
        category: "JavaScript",
        type: "DOM & Logic",
        image: "random quote generator",
        liveDemoLink: "https://random-quote-generator-gamma-liard.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/random-quote-generator.git",
        overview: "A simple and interactive app that generates random quotes at the click of a button. It’s ideal for practicing DOM manipulation, randomization logic, and clean UI presentation.",
        overviewDescription: [
            "Generates and displays random quotes instantly",
            "Interactive button to refresh and get new quotes",
            "Minimal, clean design for distraction-free use"
        ]
    },
    {
        name: "Memory Game (Matching Pairs)",
        year: "2025",
        description: "Flip cards to match pairs with attempt tracking.",
        fullDescription: "The Memory Game (Matching Pairs) is a fun and interactive JavaScript game where players flip cards to find matching pairs. It challenges focus, memory, and speed while keeping track of attempts. Designed with a clean grid layout and smooth flip animations, the game offers both entertainment and practice in DOM manipulation, event handling, and state management.",
        category: "JavaScript",
        type: "Games & Utilities",
        image: "memory game (matching pairs)",
        liveDemoLink: "https://memory-matching-game-roan.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/memory-matching-game.git",
        overview: "An engaging browser game that combines logic and memory skills. Players flip two cards at a time to uncover matching pairs while tracking moves until all pairs are found.",
        overviewDescription: [
            "Flip and match pairs of cards with smooth animations",
            "Tracks player attempts to measure performance",
            "Built with vanilla JavaScript for interactivity"
        ]
    },
    {
        name: "Quiz App",
        year: "2025",
        description: "Multiple-choice quiz with scoring and retake option.",
        fullDescription: "The Quiz App is an interactive React/Next.js application that presents users with multiple-choice questions and provides instant scoring upon completion. It offers a fun way to test knowledge across topics while demonstrating concepts like state management, conditional rendering, and API-driven data handling. With a responsive design, it delivers a seamless experience on both desktop and mobile.",
        category: "React/Next.js",
        type: "APIs & Data",
        image: "quiz app",
        liveDemoLink: "https://quiz-app-alpha-azure.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/quiz-app.git",
        overview: "An engaging multiple-choice quiz application built with React and Next.js. Users can answer questions, track their score, and retake quizzes for practice.",
        overviewDescription: [
            "Presents multiple-choice questions with instant scoring",
            "Tracks and displays user performance after each attempt",
            "Includes retake option for continuous practice"
        ]
    },
    {
        name: "Roman Numeral Converter",
        year: "2025",
        description: "Convert numbers to Roman numerals and Roman numerals back to numbers, with validation for invalid inputs.",
        fullDescription: "The Roman Numeral Converter is a JavaScript application that allows users to seamlessly convert numbers to Roman numerals and vice versa. It includes input validation to ensure only valid numbers or Roman numerals are processed, making it both educational and practical. This project demonstrates proficiency in loops, conditionals, and mapping techniques to handle complex conversion logic.",
        category: "JavaScript",
        type: "Loops & Mapping",
        image: "roman numeral converter",
        liveDemoLink: "https://roman-numeral-converter-five.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/roman-numeral-converter.git",
        overview: "An interactive converter tool that transforms numbers into Roman numerals and Roman numerals back to numbers with input validation.",
        overviewDescription: [
            "Converts standard numbers into Roman numerals instantly",
            "Supports Roman numeral to number conversion",
            "Handles invalid inputs with error validation"
        ]
    },
    {
        name: "BMI Calculator",
        year: "2025",
        description: "Compute BMI from height and weight inputs and display the corresponding category with validation.",
        fullDescription: "The BMI Calculator is a JavaScript application that enables users to calculate their Body Mass Index (BMI) by entering height and weight. It determines the BMI value and categorizes the result (e.g., underweight, normal, overweight, obese). The project demonstrates knowledge of functions, state management, and controlled inputs, while also including basic validation for user-friendly and reliable results.",
        category: "JavaScript",
        type: "Functions & State",
        image: "bmi calculator",
        liveDemoLink: "https://bmi-calculator-five-chi.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/bmi-calculator.git",
        overview: "An interactive tool that computes BMI from user inputs and shows the corresponding health category.",
        overviewDescription: [
            "Takes height and weight as controlled inputs",
            "Calculates BMI and displays the category",
            "Includes basic validation for input accuracy"
        ]
    },
    {
        name: "Simple Calculator",
        year: "2025",
        description: "Perform basic arithmetic operations with digits, operators, clear, and backspace functionality.",
        fullDescription: "The Simple Calculator is a JavaScript application designed to handle fundamental arithmetic operations such as addition, subtraction, multiplication, and division. It provides users with digit and operator buttons, supports clear and backspace functionality, and allows chained operations for a smooth calculation experience. The project highlights the use of functions, conditionals, and event handling in JavaScript.",
        category: "JavaScript",
        type: "Functions & Event Handling",
        image: "simple calculator",
        liveDemoLink: "https://calculator-classwork.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/calculator_classwork.git",
        overview: "A basic calculator app that performs arithmetic operations with user-friendly controls.",
        overviewDescription: [
            "Includes digit and operator buttons",
            "Supports clear and backspace functionality",
            "Allows chained operations for multiple calculations"
        ]
    },
    {
        name: "Random Password Generator",
        year: "2025",
        description: "Generate secure passwords with customizable options.",
        fullDescription: "The Random Password Generator is a React application that lets users generate secure passwords based on selected criteria such as length, uppercase letters, numbers, and symbols. It provides instant password generation with the option to copy results to the clipboard, making it practical for everyday use while demonstrating state management, conditionals, and clipboard API handling.",
        category: "React",
        type: "Utilities",
        image: "random password generator",
        liveDemoLink: "https://random-password-generator-five-eta.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/random-password-generator.git",
        overview: "A password generator built with React that allows customization and instant copy-to-clipboard functionality.",
        overviewDescription: [
            "Generate passwords with user-selected criteria",
            "Supports length, uppercase, lowercase, numbers, and symbols",
            "Copy generated password to clipboard with one click"
        ]
    },
    {
        name: "Color Picker",
        year: "2025",
        description: "Pick colors and view HEX/RGB values instantly.",
        fullDescription: "The Color Picker is a React application that enables users to select colors and view their HEX and RGB values. It provides a simple yet effective way to explore color values while practicing controlled inputs, state handling, and DOM API interaction. Copy-to-clipboard functionality ensures quick access to chosen color values.",
        category: "React",
        type: "UI Tools",
        image: "color picker",
        liveDemoLink: "https://color-picker-fawn-chi.vercel.app/",
        repoLink: "https://github.com/samuel12-dot/color-picker.git",
        overview: "A React-based tool for selecting and copying color values in HEX and RGB formats.",
        overviewDescription: [
            "Interactive color input with real-time updates",
            "Displays HEX and RGB values for chosen colors",
            "One-click copy-to-clipboard functionality"
        ]
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
        title: "Frontend Development Trainee",
        company: "Univelcity",
        startDate: "July 2024",
        endDate: "Sept 2024"
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
        title: "Capstone Project Excellence",
        year: "2025",
        name: "Behance",
    },
    {
        title: "Hackathon Participation",
        year: "2025",
        name: "Univelcity"
    },
    {
        title: "Open-Source Contributions",
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
        text: "Months Experience",
    },
    {
        endCountNum: 10,
        endCountText: "+",
        text: "Projects Completed",
    },
    {
        endCountNum: 5,
        endCountText: "+",
        text: "Awards & Recognitions",
    },
    {
        endCountNum: 100,
        endCountText: "%",
        text: "Client Satisfaction",
    },
];


const mobileLinks = [
    {
        name: "about",
        href: "/about"
    },
    {
        name: "projects",
        href: "/works"
    },
    {
        name: "contact",
        href: "/contact"
    }
]

export { footerData, servicesInfo, workData, experiences, skills, awards, statsData, mobileLinks }