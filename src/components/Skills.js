import React from 'react';
import { JSIcon, PythonIcon, CppIcon } from './Icons';
import { HTMLIcon, CSSIcon, TailwindCSSIcon, ReactIcon, NextIcon } from './Icons';
import { NodeIcon, ExpressIcon, PrismaIcon } from './Icons';
import { MongoDBIcon, FirebaseIcon, SQLIcon, PostgreSQLIcon } from './Icons';
import { JestIcon, DoctestIcon } from './Icons';
import { GitIcon, GithubIcon, MakefileIcon } from './Icons';

const languages = [
    {name: "JavaScript", icon: <JSIcon className="w-[64px] h-[64px]" />},
    {name: "Python", icon: <PythonIcon className="w-[64px] h-[64px]" />},
    {name: "C/C++", icon: <CppIcon className="w-[64px] h-[64px]" />},
]

const frontend = [
    {name: "HTML", icon: <HTMLIcon className="w-[64px] h-[64px]" />},
    {name: "CSS", icon: <CSSIcon className="w-[64px] h-[64px]" />},
    {name: "TailwindCSS", icon: <TailwindCSSIcon className="w-[64px] h-[64px]" />},
    {name: "React.js", icon: <ReactIcon className="w-[64px] h-[64px]" />},
    {name: "Next.js", icon: <NextIcon className="w-[64px] h-[64px]" />},
]

const backend = [
    {name: "Node.js", icon: <NodeIcon className="w-[64px] h-[64px]" />},
    {name: "Express.js", icon: <ExpressIcon className="w-[64px] h-[64px]" />},
    {name: "Prisma", icon: <PrismaIcon className="w-[64px] h-[64px]" />},
]

const database = [
    {name: "MongoDB", icon: <MongoDBIcon className="w-[64px] h-[64px]" />},
    {name: "Firebase", icon: <FirebaseIcon className="w-[64px] h-[64px]" />},
    {name: "SQL", icon: <SQLIcon className="w-[64px] h-[64px]" />},
    {name: "PostgreSQL", icon: <PostgreSQLIcon className="w-[64px] h-[64px]" />},
]

const testing = [
    {name: "Jest", icon: <JestIcon className="w-[64px] h-[64px]" />},
    {name: "Doctest", icon: <DoctestIcon className="w-[64px] h-[64px]" />},
]

const other = [
    {name: "Git", icon: <GitIcon className="w-[64px] h-[64px]" />},
    {name: "Github", icon: <GithubIcon className="w-[64px] h-[64px]" />},
    {name: "Makefile", icon: <MakefileIcon className="w-[64px] h-[64px]" />},
]


const Card = ({type, skills}) => {
    return (
        <article className='w-full col-span-4 flex flex-col items-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4 lg:col-span-6 md:col-span-12'>
                
            <div className='w-full flex flex-col items-center dark:bg-dark'>
                <div className='text-dark font-bold text-3xl mb-5 dark:text-light lg:text-2xl md:text-xl'>{type}</div>
                <ul className='flex flex-col items-center gap-5'>
                {skills.map((skill) => 
                    <li key={skill.name} className='flex flex-col justify-center items-center'>
                        {skill.icon}
                        <div>{skill.name}</div>
                    </li>
                )}
            </ul>
            </div>
        </article>
    )
}

const Skills = () => {
return (
    <div className="w-full bg-gray-100 p-8 pt-12 flex flex-col items-center dark:bg-dark dark:text-light">
        <h2 className="pb-6 text-7xl font-bold my-6 lg:!text-7xl sm:!text-6xl xs:!text-4xl">Skills</h2>
        <div className="w-full grid grid-cols-12 gap-16 gap-y-16">
            <Card type="Languages" skills={languages} />
            <Card type="Frontend" skills={frontend} />
            <Card type="Backend" skills={backend} />
            <Card type="Databases" skills={database} />
            <Card type="Testing" skills={testing} />
            <Card type="Other" skills={other} />
        </div>
    </div>
    );
};

export default Skills

