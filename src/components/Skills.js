import React from 'react';
import { JSIcon, PythonIcon, CppIcon } from './Icons';
import { HTMLIcon, CSSIcon, TailwindCSSIcon, ReactIcon, NextIcon } from './Icons';
import { NodeIcon, ExpressIcon, PrismaIcon } from './Icons';
import { MongoDBIcon, FirebaseIcon, SQLIcon, PostgreSQLIcon } from './Icons';
import { JestIcon, DoctestIcon } from './Icons';
import { GitIcon, GithubIcon, MakefileIcon, NPMIcon, WebpackIcon } from './Icons';

const size = "!w-[64px] !h-[64px] sm:!w-[48px] sm:!h-[48px] xs:!w-[40px] xs:!h-[40px]";
const languages = [
    {name: "JavaScript", icon: <JSIcon className={`${size}`} />},
    {name: "Python", icon: <PythonIcon className={`${size}`} />},
    {name: "C/C++", icon: <CppIcon className={`${size}`} />},
]

const frontend = [
    {name: "HTML", icon: <HTMLIcon className={`${size}`} />},
    {name: "CSS", icon: <CSSIcon className={`${size}`} />},
    {name: "TailwindCSS", icon: <TailwindCSSIcon className={`${size}`} />},
    {name: "React.js", icon: <ReactIcon className={`${size}`} />},
    {name: "Next.js", icon: <NextIcon className={`${size}`} />},
]

const backend = [
    {name: "Node.js", icon: <NodeIcon className={`${size}`} />},
    {name: "Express.js", icon: <ExpressIcon className={`${size}`} />},
    {name: "Prisma", icon: <PrismaIcon className={`${size} dark:bg-dark rounded-2xl p-2`} />},
]

const database = [
    {name: "MongoDB", icon: <MongoDBIcon className={`${size}`} />},
    {name: "Firebase", icon: <FirebaseIcon className={`${size}`} />},
    {name: "SQL", icon: <SQLIcon className={`${size}`} />},
    {name: "PostgreSQL", icon: <PostgreSQLIcon className={`${size}`} />},
]

const testing = [
    {name: "Jest", icon: <JestIcon className={`${size}`} />},
    {name: "Doctest", icon: <DoctestIcon className={`${size}`} />},
]

const miscellaneous = [
    {name: "Git", icon: <GitIcon className={`${size}`} />},
    {name: "Github", icon: <GithubIcon className={`${size} border border-solid rounded-full dark:bg-dark`} />},
    {name: "Makefile", icon: <MakefileIcon className={`${size}`} />},
    {name: "NPM", icon: <NPMIcon className={`${size} pt-5`} />},
    {name: "Webpack", icon: <WebpackIcon className={`${size}`} />},
]


const Card = ({type, skills}) => {
    return (
        <article className='w-full col-span-4 flex flex-col items-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-3 sm:p-4 lg:col-span-6 md:col-span-12'>
            <div className='w-full flex flex-col items-center dark:bg-dark'>
                <div className='text-dark font-bold text-3xl mb-5 dark:text-light lg:text-2xl md:text-xl sm:text-lg xs:text-base'>{type}</div>
                <ul className='flex flex-col items-center gap-5'>
                    {skills.map((skill) => 
                        <li key={skill.name} className='flex flex-col justify-center items-center'>
                            <div className='p-2 bg-light rounded-2xl flex items-center justify-center'>{skill.icon}</div>
                            <div className='pt-3'>{skill.name}</div>
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
        <h2 className="pb-6 text-7xl font-bold my-6 lg:!text-6xl sm:!text-5xl xs:!text-3xl">Skills</h2>
        <div className="w-full grid grid-cols-12 gap-16 gap-y-16 lg:gap-10 sm:gap-8 xs:gap-6">
            <Card type="Languages" skills={languages} />
            <Card type="Frontend" skills={frontend} />
            <Card type="Backend" skills={backend} />
            <Card type="Databases" skills={database} />
            <Card type="Testing" skills={testing} />
            <Card type="Miscellaneous" skills={miscellaneous} />
        </div>
    </div>
    );
};

export default Skills

