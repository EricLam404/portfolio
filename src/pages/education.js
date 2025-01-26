import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import Education from '@/components/Education';

const Page = () => {
    return (
        <>
            <Head>
                <title>Projects Page</title>
                <meta name="description" content="Projects page" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default Page;
