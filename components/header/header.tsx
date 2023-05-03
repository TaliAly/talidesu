import style from './header.module.scss'
import Image from 'next/image'

export default function Header() {
  const Images = [
    '/StyledComponents.svg',
    '/ExpressJS-Dark.svg',
    '/TailwindCSS-Dark.svg',
    '/NextJS-Dark.svg',
    '/TypeScript.svg',
    '/Figma-Dark.svg',
    '/Vite-dark.svg',
    '/Sass.svg',
  ]
  return (
    <div
      className={`h-screen flex md:justify-start py-[40%] md:py-[10%] items-center flex-col ${style.header} relative`}
    >
      <div className={`${style.icons}`}>
        {Images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt='images code'
            className='absolute opacity-70 aspect-square'
            width={100}
            height={100}
          />
        ))}
      </div>

      <div className='z-10 flex flex-col items-center gap-4'>
        <h1 className='text-white font-bold text-4xl md:text-[5vw]'>{`Hi I'm Talialy`}</h1>
        <p className='text-white text-xl md:text-[1.5vw]'>I can make your website</p>
      </div>
    </div>
  )
}
