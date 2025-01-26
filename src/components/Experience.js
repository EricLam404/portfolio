import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-2xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        @ {company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="mb-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:4xl md:mb-16">
                Experience
            </h2>
            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
            >
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-4">
                    <Details
                        position="Software Engineer Intern"
                        company="Auristor Inc."
                        time="July 2024 - August 2024"
                        address="New York City, New York"
                        work="At AuriStor, I developed a React-based dashboard to simplify CLI operations, making a complex file system more accessible to non-technical users. I also created client documentation for deployments and revived a legacy Apache module to enable secure AFS web logins."
                    />
                    <Details
                        position="Backend Software Engineer Intern"
                        company="Pulp Technology"
                        time="June 2023 - August 2023"
                        address="New York City, New York"
                        work="As a backend intern, I led a team to design an MVP for a text analysis tool, building a scalable GraphQL API and optimizing data pipelines. I also engineered a Neo4j schema for sub-100ms queries and integrated ML models with OpenAI."
                    />
                    <Details
                        position="Coding and Robotics Instructor"
                        company="Kwatt.io Tech Center"
                        time="July 2022 - Present"
                        address="New York City, New York"
                        work="I taught web development and robotics to over 100 students, creating hands-on projects to boost engagement and problem-solving skills. My mentorship helped students enhance their programming abilities using robotic sensors and creative coding challenges."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
