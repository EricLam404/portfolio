import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import Projects from '@/components/Projects'

const projects = () => {
  return (
    <>
        <Head>
            <title>Projects Page</title>
            <meta name="description" content="Projects page" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <Projects />
            </Layout>
        </main>
    </>
  )
}

export default projects