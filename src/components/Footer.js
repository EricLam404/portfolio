import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex justify-center'>
            <span>{new Date().getFullYear()} &copy; All rights Reserved.</span>
        </Layout>
    </footer>
  )
}

export default Footer