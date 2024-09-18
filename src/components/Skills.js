import React from 'react';
import { JSIcon, PythonIcon, CppIcon, HTMLIcon, CSSIcon, SQLIcon, GoIcon, DartIcon} from './Icons';
import { TailwindCSSIcon, ReactIcon, NextIcon, FlutterIcon } from './Icons';
import { NodeIcon, ExpressIcon, PthreadsIcon, OpenMPIIcon, RestAPIIcon, GraphQLIcon } from './Icons';
import { MongoDBIcon, FirebaseIcon, PostgreSQLIcon, PrismaIcon, SupabaseIcon, Neo4jIcon } from './Icons';
import { JestIcon, DoctestIcon } from './Icons';
import { GitIcon, GithubIcon, MakefileIcon, NPMIcon, WebpackIcon, DockerIcon, GCPIcon } from './Icons';

const size = "!w-[64px] !h-[64px] sm:!w-[48px] sm:!h-[48px] xs:!w-[40px] xs:!h-[40px]";
const languages = [
    {name: "JavaScript/Typescript", icon: <JSIcon className={`${size}`} />},
    {name: "Python", icon: <PythonIcon className={`${size}`} />},
    {name: "C/C++", icon: <CppIcon className={`${size}`} />},
    {name: "HTML", icon: <HTMLIcon className={`${size}`} />},
    {name: "CSS", icon: <CSSIcon className={`${size}`} />},
    {name: "SQL", icon: <SQLIcon className={`${size}`} />},
    {name: "Go", icon: <GoIcon className={`${size}`} />},
    {name: "Dart", icon: <DartIcon className={`${size}`} />},
]

const frontend = [
    {name: "TailwindCSS", icon: <TailwindCSSIcon className={`${size}`} />},
    {name: "React.js", icon: <ReactIcon className={`${size}`} />},
    {name: "Next.js", icon: <NextIcon className={`${size}`} />},
    {name: "Flutter", icon: <FlutterIcon className={`${size}`} />},
]

const backend = [
    {name: "Node.js", icon: <NodeIcon className={`${size}`} />},
    {name: "Express.js", icon: <ExpressIcon className={`${size}`} />},
    {name: "Go", icon: <GoIcon className={`${size}`} />},
    {name: "Pthreads", icon: <PthreadsIcon className={`${size}`} />},
    {name: "OpenMPI", icon: <OpenMPIIcon className={`${size}`} />},
    {name: "REST APIs", icon: <RestAPIIcon className={`${size}`} />},
    {name: "Graphql", icon: <GraphQLIcon className={`${size}`} />},
]

const database = [
    {name: "MongoDB", icon: <MongoDBIcon className={`${size}`} />},
    {name: "Firebase", icon: <FirebaseIcon className={`${size}`} />},
    {name: "PostgreSQL", icon: <PostgreSQLIcon className={`${size}`} />},
    {name: "Prisma", icon: <PrismaIcon className={`${size} dark:bg-dark rounded-2xl p-2`} />},
    {name: "Supabase", icon: <SupabaseIcon className={`${size}`} />},
    {name: "Neo4j", icon: <Neo4jIcon className={`${size}`} />},
]

const testing = [
    {name: "Jest", icon: <JestIcon className={`${size}`} />},
    {name: "Doctest", icon: <DoctestIcon className={`${size}`} />},
]

const miscellaneous = [
    {name: "Git", icon: <GitIcon className={`${size}`} />},
    {name: "Github", icon: <GithubIcon className={`${size} border border-solid rounded-full dark:bg-dark`} />},
    {name: "Makefile", icon: <MakefileIcon className={`${size}`} />},
    {name: "Webpack", icon: <WebpackIcon className={`${size}`} />},
    {name: "Docker", icon: <DockerIcon className={`${size}`} />},
    {name: "Google Cloud Platform", icon: <GCPIcon className={`${size}`} />},
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
    <div className="w-full bg-gray-100 p-8 mt-12 flex flex-col items-center dark:bg-dark dark:text-light">
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

