import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
                className='w-32 h-32 rounded-full xl:w-[200px] object-cover object-center'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Principal Engineer</h4>
                <p className='font-bold text-2xl mt-1'>Optum</p>
                <div className='flex space-x-2 my-2'>
                    <Image height={10} width={10} className='h-10 w-10 rounded-full' src="/images/profile_pic.jpg" alt="JS" />
                    <Image height={10} width={10} className='h-10 w-10 rounded-full' src="/images/profile_pic.jpg" alt="JS" />
                    <Image height={10} width={10} className='h-10 w-10 rounded-full' src="/images/profile_pic.jpg" alt="JS"/>
                </div>
                <p className='uppercase py-5 text-gray-300'>Started word..Ended..</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary point.Summary point.Summary point.Summary point.Summary point.</li>
                    <li>SummarySummary point.Summary point.Summary point.Summary point.Summary point.</li>
                    <li>SummarySummary point.Summary point.Summary point.Summary point.Summary point.</li>
                    <li>SummarySummary point.Summary point.Summary point.Summary point.Summary point.</li>
                    <li>Summary Summary point.Summary point.Summary point.Summary point. </li>
                </ul>
            </div>
        </article>
    )
}