import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import React, { useState } from 'react'

const contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailSubject = encodeURIComponent('Contact Form Submission');
        const emailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        );
        const mailtoUrl = `mailto:recipient@example.com?subject=${emailSubject}&body=${emailBody}`;

        window.location.href = mailtoUrl;
    };
  
    return (
    <>
        <Head>
            <title>Contact Me</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <TransitionEffect />
        <div className='flex justify-center w-full min-h-screen pt-6'>
        <form
          onSubmit={handleSubmit}
          className="py-4 mt-4 flex flex-col gap-5 w-1/2"
        >
          <div className='flex flex-col'>
            <label htmlFor="name" className='p-2 dark:text-light'>Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="fullname"
              placeholder="John Doe"
              className='w-full p-2 rounded-xl'
            />
          </div>
  
          <div className='flex flex-col'>
            <label htmlFor="email" className='p-2 dark:text-light'>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              id="email"
              placeholder="johndoe@gmail.com"
              className='w-full p-2 rounded-xl'
            />
          </div>
  
          <div className='flex flex-col'>
            <label htmlFor="message" className='p-2 dark:text-light'>Your Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="h-32 w-full p-2 rounded-xl"
              id="message"
              placeholder="Type your message here..."
            ></textarea>
          </div>
  
          <button className="bg-green-600 hover:bg-green-700 p-3 text-white font-bold rounded-2xl" type="submit">
            Send
          </button>
        </form>
        </div>
    </>
    );
}

export default contact