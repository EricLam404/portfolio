import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='!py-8 flex justify-center lg:!py-6 md:!py-5 sm:!py-4 sm:text-xs'>
            <span>{new Date().getFullYear()} &copy; All rights Reserved.</span>
        </Layout>
    </footer>
  )
}

export default Footer