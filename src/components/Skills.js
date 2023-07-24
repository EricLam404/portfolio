import React from 'react'

//temp skills section
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "C/C++",
    "Python",
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Tailwind CSS",
];

const Skills = () => {
return (
    <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="list-disc ml-8">
            {skills.map((skill) => (
            <li key={skill} className="my-2">
                {skill}
            </li>
            ))}
        </ul>
    </div>
    );
};

export default Skills