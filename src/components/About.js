import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpeg";
import Skills from "@/components/Skills";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

const About = () => {
    return (
        <>
            <AnimatedText
                text="Passionately exploring the fusion of technology and innovation. "
                className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        Biography
                    </h2>
                    <p className="font-medium">
                        Hi, I'm Eric Lam, a passionate full-stack software
                        engineer and a Daedalus Scholar at Hunter College with
                        passion for creating beautiful and functional software
                        that is centered around user needs and experiences.
                    </p>
                    <p className="my-4 font-medium">
                        I believe that successful digital products are not just
                        about lines of code but they require a deep
                        understanding of users' desires and behaviors. As a
                        result, I strive to create intuitive and visually
                        appealing applications that offer seamless and enjoyable
                        interactions.
                    </p>
                    <p className="font-medium">
                        Whether I'm working on a personal project, collaborating
                        with other engineers, or working with a team, I bring my
                        commitment to excellence and unwavering dedication. My
                        goal is to deliver top-notch solutions that not only
                        meet the technical requirements but also exceed
                        expectations in terms of user experience and
                        functionality.
                    </p>
                    <div className="flex items-center self-start mt-6 lg:self-center">
                        <Link
                            href="/Eric_Lam_Resume.pdf"
                            target="_blank"
                            className="flex items-center bg-dark text-light p-2.5 px-6
                                        rounded-lg text-lg font-semibold
                                        border-2 border-solid border-transparent
                                        hover:bg-light hover:text-dark hover:border-dark
                                        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                                        md:p-2 md:px-4 md:text-base
                                    "
                            download={true}
                        >
                            Resume <LinkArrow className={"w-6 m-1"} />
                        </Link>
                        <Link
                            href="/contact"
                            className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                        >
                            {" "}
                            Contact Me
                        </Link>
                    </div>
                </div>
                <div className="col-span-3 col-start-5 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                    <Image
                        src={ProfilePic}
                        alt="Eric"
                        className="w-full h-auto rounded-2xl"
                        priority
                        sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw, 
                              33vw"
                    />
                </div>
            </div>
            <Skills />
        </>
    );
};

export default About;
