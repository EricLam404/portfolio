import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ProfilePic from '../../public/images/profile/developer-pic-2.jpg'

const about = () => {
  return (
    <>
        <Head>
            <title>About Page</title>
            <meta name='description' content='about page for portfolio'/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose! " className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            Hi, I'm Eric Lam, a passionate full-stack software engineer and a 
                            Daedalus Scholar at Hunter College with passion for creating 
                            beautiful and functional software that is centered around user 
                            needs and experiences.
                        </p>
                        <p className='my-4 font-medium'>
                            I believe that successful digital products are not just about 
                            lines of code but they require a deep understanding of users' 
                            desires and behaviors. As a result, I strive to create 
                            intuitive and visually appealing applications that offer 
                            seamless and enjoyable interactions.
                        </p>
                        <p className='font-medium'>
                            Whether I'm working on a personal project, collaborating with 
                            other engineers, or working with a team, I bring my commitment 
                            to excellence and unwavering dedication. My goal is to deliver 
                            top-notch solutions that not only meet the technical requirements 
                            but also exceed expectations in terms of user experience and functionality. 
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={ProfilePic} alt="Eric" className="w-full h-auto rounded-2xl"/>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default about