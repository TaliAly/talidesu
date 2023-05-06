import { ArrowTr } from 'iconoir-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
      <motion.div
        className='flex flex-col items-center justify-center gap-4'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -40 },
        }}
      >
        <p className='text-3xl'>About Me</p>
        <img src='/cuteAvatar.svg' alt='cute avatar tali' />
      </motion.div>

      <motion.div
        className='flex flex-col justify-center p-1 gap-4 md:max-w-[50%]'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <p className='text-3xl'>
          {`I'm a frontend developer! Just ask me and you will have your website or mobile app.`}
        </p>
        <div className='flex gap-4'>
          <Link
            href='/'
            className='flex gap-2 rounded-md border border-neutral-950 px-4 py-2 hover:bg-neutral-900 transition hover:text-white'
          >
            <ArrowTr strokeWidth={2} /> Works on
          </Link>
          <Link
            href='https://discord.gg/fazt-community-466723723853037589'
            target='_blank'
            className='flex gap-2 rounded-md border border-neutral-950 px-4 py-2 hover:bg-neutral-900 transition hover:text-white'
          >
            <ArrowTr strokeWidth={2} /> I like to talk in
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
