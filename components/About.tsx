import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="/images/profile.jpg"
                className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a{" "} <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>

                <h5>What’s your story?</h5>
                <p>
                    I’ve been professionally building Windows, Web, Mobile Aplications and Microsoft Office Add-Ins since 2007, and have worked various companies in India and UAE (Dubai and Abu Dhabi). Over the years, I’ve worked on everything from small windows utilities, e-commerce web sites, enterprise mobile applications in Finance, Healthcare, and Payment Gateway.
                </p>
                <h6>How did you learn all this?</h6>
                <p>
                    I learn something new every day. I’ve always believed the best way to learn something is to fully immerse yourself in that subject. I’m always reading technology blogs, and try to attend a few web conferences every year. So far, that’s kept me on top of things.
                </p>
                <h6>What are you into?</h6>
                <p>
                    When I’m not wearing down the letters on my keyboard, I’m usually out taking photos, driving, watching interesting YouTube videos, playing with children or enjoying a nice single malt whisky.
                </p>
            </div>
        </motion.div>
    )
}