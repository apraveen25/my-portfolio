import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 xl: items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }
                }
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration:1.5
                }}
                className='flex flex-row items-center'>
                <p className='uppercase font-mono hidden md:inline-flex text-black text-2xl'>Praveen Kumar Aenugu</p>
            </motion.div>
            <motion.div 
            initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon url="https://www.linkedin.com/in/praveen-kumar-aenugu/" fgColor='gray' bgColor='transparent' target="_blank" />
                <SocialIcon url="mailto:praveen.aenugu@gmail.com" className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
            </motion.div>
        </header>
    )
}