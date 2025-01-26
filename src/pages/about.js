import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import About from "@/components/About";

const Page = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="about page for portfolio" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <About />
                </Layout>
            </main>
        </>
    );
};

export default Page;
