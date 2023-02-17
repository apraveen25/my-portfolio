import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3],
        opacity:[0.1,0.2,0.3,0.4,0.5,0.6],
        borderRadius:["10%","20%","30%","40%","50%"],
    }}
    transition={{
        duration:3.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#F3F1E0] rounded-full h-[200px] w-[200px] mt-52' />
        <div className='absolute border border-[#a39a18] rounded-full h-[300px] w-[300px] mt-52' />
        <div className='absolute border border-[#F3F1E0] rounded-full h-[500px] w-[500px] mt-52' />
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse' />
        <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52' />
    </motion.div>
  )
}