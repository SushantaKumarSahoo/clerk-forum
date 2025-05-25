import React from 'react';
import { SparklesPreview } from "@/app/(pages)/forums/sparkles";
import { ThreeDCardDemo } from "@/app/(pages)/forums/card"; // Assuming this is your card component

const topics = [
    {
        id: 1,
        text: "Python",
        slug: "python-new", // Added slug
        img: "https://img.freepik.com/premium-photo/blue-snake-with-yellow-tail-is-black-background-with-text-blue-snake_1348187-22919.jpg?w=1380",
        description: "Discuss Python development, frameworks (Django, Flask), data science, and scripting. Share tips, ask questions, and explore new libraries."
    },
    {
        id: 2,
        text: "JavaScript",
        slug: "javascript-new", // Added slug
        img: "https://img.freepik.com/premium-vector/isometric-file-script-code-with-js-sign-vector_744112-548.jpg?w=1380",
        description: "A hub for all things JavaScript: front-end (React, Vue, Angular), Node.js, Web APIs, and language features. Get help with your JS projects."
    },
    {
        id: 3,
        text: "React",
        slug: "react-new", // Added slug
        img: "https://img.freepik.com/free-vector/atom-science-education-icon-vector-neon-digital-graphic_53876-114080.jpg?t=st=1748171911~exp=1748175511~hmac=ba8295ee9b37a89abcb8711701898b3c7e29c582361cf8825de9ad9d6714090d&w=1380",
        description: "Dive into React.js component architecture, state management, hooks, and best practices. Find solutions for your UI challenges and share insights."
    },
    {
        id: 4,
        text: "Artificial Intelligence",
        slug: "artificial-intelligence-new", // Added slug
        img: "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?t=st=1748171957~exp=1748175557~hmac=8546401aa6697d760dc49cd06552d31ab7f71debeb84a43c393bf3314604b00d&w=1380",
        description: "Explore AI, Machine Learning, Deep Learning, and Neural Networks. Discuss algorithms, applications, and the future of intelligent systems."
    },
    {
        id: 5,
        text: "Cybersecurity",
        slug: "cybersecurity-new", // Added slug
        img: "https://img.freepik.com/premium-vector/cyber-security-logo-with-keyhole-symbol-keyhole_602671-1674.jpg?w=1380",
        description: "Talk about network security, ethical hacking, data privacy, and digital forensics. Stay updated on threats and share defense strategies."
    }
];

const Page = () => {

    return (
        <div className='bg-black h-screen w-screen text-white'>
            <SparklesPreview />

            <ul className=' card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-1 justify-center bg-black'>
            {topics.map((topic) => (


                    <ThreeDCardDemo
                        key={topic.id}
                        slug={topic.slug}
                        title={topic.text}
                        imageSrc={topic.img}
                        description={topic.description}
                    />
            ))}
            </ul>
        </div>
    );
};

export default Page;