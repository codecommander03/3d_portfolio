import { web, cf, web3, k8s } from "../assets/images";
import {
    contact,
    linkedin,
    discord,
    amazon,
    chat,
    coin,
    html,
    css,
    javascript,
    typescript,
    react,
    redux,
    nextjs,
    tailwindcss,
    nodejs,
    express,
    django,
    mongodb,
    postman,
    firebase,
    gcp,
    git,
    github,
    flask,
    selenium,
    docker,
    k8,
    solidity,
    c,
    cpp,
    python,
    vite,
    threejs,
    pricewise
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
    },
    {
        imageUrl: cpp,
        name: "C++",
    },
    {
        imageUrl: python,
        name: "Python",
    },
    {
        imageUrl: html,
        name: "HTML",
    },
    {
        imageUrl: css,
        name: "CSS",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
    },
    {
        imageUrl: react,
        name: "React",
    },
    {
        imageUrl: redux,
        name: "Redux",
    },
    {
        imageUrl: vite,
        name: "Vite",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
    },
    {
        imageUrl: express,
        name: "Express.js",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
    },
    {
        imageUrl: postman,
        name: "Postman",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
    },
    {
        imageUrl: gcp,
        name: "GCP",
    },
    {
        imageUrl: git,
        name: "Git",
    },
    {
        imageUrl: github,
        name: "GitHub",
    },
    {
        imageUrl: docker,
        name: "Docker",
    },
    {
        imageUrl: k8,
        name: "Kubernetes",
    },
    {
        imageUrl: flask,
        name: "Flask",
    },
    {
        imageUrl: selenium,
        name: "Selenium",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
    }
];

export const experiences = [
    {
        title: "Full stack Developer",
        name: "-",
        icon: web,
        iconBg: "#a2d2ff",
        points: [
            "Developed web applications from scratch, in team and contributed to open source also",
            "Mainly work in React.js, Next.js and Tilwind CSS for frontend",
            "Worked with Node.js, Express.js and MongoDB for backend and currently trying Django",

        ]
    },
    {
        title: "Competitive Programmer",
        name: "-",
        icon: cf,
        iconBg: "#FAF9F6",
        points: [
            "Participated in various coding contests on Codeforces and CodeChef.",
            "Solved hundereds of problems over Codeforces, CodeChef, AtCoder, LeetCode, HackerRank, HackerEarth, etc.",
        ]
    },
    {
        title: "Microservices Engineer",
        name: "-",
        icon: k8s,
        iconBg: "#a2d2ff",
        points: [
            "Knows how to use Docker and K8s for containerization and orchestration.",
            "Basic knowledge of Flask",
            "Used GCP before and currently learning AWS/Azure.",
        ]
    },
    {
        title: "Blockchain Developer",
        name: "-",
        icon: web3,
        iconBg: "#d3d3d3",
        points: [
            "Complete Beginner and in the Learning Phase.",
            "Currently learning Solidity and Smart Contracts.",
        ]
    },
    // {
    //     title: "Machine Learning Enthusiast",
    //     company_name: "-",
    //     icon: ml,
    //     iconBg: "#FFFF80",
    //     date: "-",
    //     points: [
    //         "Having witnessed the power of Machine Learning, I am currently learning it.",
    //         "Currently just with the theoretical understanding of the concepts.",
    //     ]
    // }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'tel:+918847651329',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/codecommander03',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/aditya-gupta-54b38322a/',
    },
    {
        name: 'Discord',
        iconUrl: discord,
        link: 'https://discordapp.com/users/678973465344344074',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-Commerce',
        description: 'Built a web application with user and admin functionality. User can browse and buy products uploaded by admin.',
        link: 'https://github.com/codecommander03/E-Commerce'
    },
    {
        iconUrl: coin,
        theme: 'btn-back-yellow',
        name: 'Expensor',
        description: 'Created a webapp that helps users keep track of your expenses. You can manage your expenses by month/ week or by category.',
        link: 'https://github.com/codecommander03/Expensor'
    },
    {
        iconUrl: chat,
        theme: 'btn-back-green',
        name: 'Talk-A-Tive',
        description: 'A real time chat application with one on one and as well as group functionalty.',
        link: 'https://github.com/codecommander03/Talk-A-Tive'
    },
    {
        iconUrl: amazon,
        theme: 'btn-back-black',
        name: 'Amazon Product Details',
        description: 'Currently working on the frontend. Just enter an Amazon product url and all the similar product details (name, cost, ratings, etc.) will be outputted',
        link: 'https://github.com/codecommander03/Selenium'
    },
];