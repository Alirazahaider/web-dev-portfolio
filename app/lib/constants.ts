import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiMail,
    FiCode,
    FiLayers,
    FiSmartphone,
    FiDatabase,
    FiCpu
} from 'react-icons/fi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql } from 'react-icons/si'

export const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
];

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/alirazahaider', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alirazaweb/', icon: FiLinkedin },
    { name: 'Email', url: 'mailto:alicodespace@gmail.com', icon: FiMail },
]

export const skills = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'GraphQL', icon: SiGraphql },
]

export const projects = [
    {
        name: 'Stock Portfolio Calculator', 
        image: '/images/stock-portfolio-calculator-by-ali_raza.png',
        description: 'Easily track your investment performance by calculating profit, loss, and net returns.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        githubUrl: 'https://github.com/Alirazahaider/stock-portfolio-calculator',
        liveUrl: 'https://stockfolio-calculator.vercel.app/'
    },
    {
        name: 'Personal Budget Calculator',
        image: '/images/personal-budget-calculator-by-ali_raza.png',
        description: 'Track income and expenses to manage your finances effortlessly.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'recharts', 'jsPDF', 'Vercel'],
        githubUrl: 'https://github.com/Alirazahaider/personal-budget-calculator',
        liveUrl: 'https://personal-budget-calculator.vercel.app/'
    },
    {
        name: 'Loan Repayment Tracker',
        image: '/images/loan-repayment-tracker-by-ali_raza.png',
        description: 'Plan your payments with a clear breakdown of principal, interest, and balance. Export to PDF with one click.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'react-to-pdf', 'Vercel'],
        githubUrl: 'https://github.com/Alirazahaider/loan-repayment-calculator',
        liveUrl: 'https://loan-repayment-tracker.vercel.app/'
    }
]

export const testimonials = [
    {
        name: 'Jane Smith',
        role: 'CEO at TechCorp',
        quote: 'Ali delivered our project ahead of schedule with exceptional quality. Highly recommended!'
    },
    {
        name: 'Mike Johnson',
        role: 'Product Manager',
        quote: 'Working with Ali was a pleasure. His attention to detail and problem-solving skills are top-notch.'
    },
    {
        name: 'Sarah Williams',
        role: 'Marketing Director',
        quote: 'Our website performance improved dramatically after Ali optimized it. Great work!'
    }
]

export const services = [
    {
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies for optimal performance.',
        icon: FiCode
    },
    {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.',
        icon: FiLayers
    },
    {
        title: 'Mobile Development',
        description: 'Cross-platform mobile apps that work seamlessly on iOS and Android devices.',
        icon: FiSmartphone
    },
    {
        title: 'Backend Development',
        description: 'Robust server-side solutions with scalable architecture and secure APIs.',
        icon: FiDatabase
    },
    {
        title: 'DevOps',
        description: 'CI/CD pipelines, cloud infrastructure, and deployment automation for your projects.',
        icon: FiCpu
    }
]