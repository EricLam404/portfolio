import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import project1 from 'public/images/projects/etch-a-sketch.png'
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({
    type,
    title,
    summary,
    technology,
    img,
    link,
    github,
}) => {
    return (
        <article
            className="w-full flex items-center justify-between rounded-3xl 
        border border-solid border-dark bg-light shadow-2xl p-12 
        relative rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        "
        >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            {/*<Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duartion:0.02}}
                priority
                sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw, 
                      50vw' 
                />
            </Link>*/}

            <div className="flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="font-medium text-xl xs:text-base flex gap-2">
                    {" "}
                    <div className="text-primary dark:text-primaryDark">
                        {type}
                    </div>{" "}
                    |{" "}
                    <div className="text-black dark:text-white">
                        {technology}
                    </div>
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ type, title, technology, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] " />
            {/*
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duartion:0.02}}
                priority
                sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw, 
                      50vw' 
                />
            </Link>
            */}

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="font-medium text-xl lg:text-lg md:text-base flex gap-2">
                    {" "}
                    <div className="text-primary dark:text-primaryDark">
                        {type}
                    </div>{" "}
                    <div className="text-black dark:text-white">
                        {technology}
                    </div>
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
                        {title}
                    </h2>
                </Link>
                <div className="w-full flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <AnimatedText
                text="Transforming ideas into elegant solutions, one line of code at a time."
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            />
            <AnimatedText
                text="Updated links and images are coming soon!"
                className="mb-8 text-xl lg:!text-2xl"
            />
            <div className="grid grid-cols-12 gap-32 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 mb-24">
                <div className="col-span-12">
                    <FeaturedProject
                        title="LingoVoyage"
                        summary="LingoVoyage is a web application that helps users learn new languages through both traditional studying techniques and AI powered features."
                        // img={project1}
                        technology={
                            "Next.js, Express.js, Supabase, Supabase Auth, OpenAI API, GraphQL"
                        }
                        link="#"
                        type="Featured Project"
                        github="#"
                    />
                </div>
                <div className="col-span-12">
                    <FeaturedProject
                        title="Student Achievement Tracker"
                        summary="KwattAchieve is a comprehensive platform designed to enhance student engagement and motivation in robotics, coding, and electronics classes."
                        // img={project1}
                        technology={
                            "React.js, Express.js, MongoDB, Auth0, OpenAPI/REST API"
                        }
                        link="#"
                        type="Featured Project"
                        github="https://github.com/EricLam404/achievement-tracker"
                    />
                </div>
                <div className="col-span-12">
                    <FeaturedProject
                        title="TypeRush"
                        summary="TypeRush is a full stack web application that helps users improve their typing speed and accuracy through a variety of typing tests. It is based off of MonkeyType."
                        link="#"
                        technology={
                            "Dart, Flutter, Firebase, Firestore, Firebase Auth"
                        }
                        type="Featured Project"
                        github="#"
                    />
                </div>
                <div className="col-span-12">
                    <FeaturedProject
                        title="Exploreo"
                        summary="Exploreo is a full stack mobile application that allows users to plan trips and explore new places."
                        link="#"
                        technology={
                            "Dart, Flutter, Firebase, Firebase Auth, Cloud SQL, Cloud Run, Postgres"
                        }
                        type="Featured Project"
                        github="#"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Potluck Planner"
                        // img={project1}
                        link="#"
                        type="Project"
                        github="#"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Etch-a-sketch"
                        // img={project1}
                        link="https://ericlam404.github.io/etch-a-sketch/"
                        type="Project"
                        github="https://github.com/EricLam404/etch-a-sketch"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Crow Gang Discord Bot"
                        // img={project1}
                        link="/"
                        type="Project"
                        github="https://github.com/EricLam404/crow-gang"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Calculator"
                        // img={project1}
                        link="https://ericlam404.github.io/calculator/"
                        type="Project"
                        github="https://github.com/EricLam404/calculator"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Weather App"
                        // img={project1}
                        link="https://ericlam404.github.io/weather-app/"
                        type="Project"
                        github="https://github.com/EricLam404/weather-app"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Library"
                        // img={project1}
                        link="https://ericlam404.github.io/library/"
                        type="Project"
                        github="https://github.com/EricLam404/library"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="To-Do List"
                        // img={project1}
                        link="https://ericlam404.github.io/todo-list/"
                        type="Project"
                        github="https://github.com/EricLam404/todo-list"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Where's Waldo"
                        // img={project1}
                        link="https://wheres-waldo-b6824.web.app/"
                        type="Project"
                        github="https://github.com/EricLam404/wheres-waldo"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project
                        title="Fortnite Shopping Cart"
                        // img={project1}
                        link="https://ericlam404.github.io/shopping-cart/"
                        type="Project"
                        github="https://github.com/EricLam404/shopping-cart"
                    />
                </div>
            </div>
        </>
    );
};

export default Projects;
