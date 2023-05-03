import React from 'react'
import { motion } from 'framer-motion'

export interface CardProps {
  children: React.ReactNode
  title?: string
  Icon?: React.ReactNode
}

export default function Card({ children, Icon, title }: CardProps) {
  return (
    <motion.div
      className='rounded-[10px] border-2 border-black p-1 max-w-xl transition'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
    >
      <div className='flex justify-center items-center gap-2 px-10 relative'>
        <p
          className='static top-0 text-xl bg-orange-200 rounded-full p-1
        sm:absolute sm:top-[50%] sm:left-0 sm:translate-y-[-50%]'
        >
          {Icon}
        </p>
        <p className='text-2xl'>{title}</p>
      </div>

      <div className='p-2'>{children}</div>
    </motion.div>
  )
}
