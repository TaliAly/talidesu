import Link from 'next/link'

interface Props {
  img: string
  link: string
}

const Images = [
  {
    img: '/nextjs.svg',
    link: 'https://nextjs.org/',
  },
  {
    img: '/react.svg',
    link: 'https://reactjs.org/',
  },
  {
    img: '/figma.svg',
    link: 'https://www.figma.com/',
  },
  {
    img: 'typescript.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    img: 'tailwindcss.svg',
    link: 'https://tailwindcss.com/',
  },
]

export default function Languages() {
  return (
    <div className='flex flex-row justify-center gap-5 my-8'>
      {Images.map(({ img, link }: Props) => {
        return (
          <Link href={link} key={link}>
            <img src={img} alt='icon' height={100} width={100} className='rounded h-full w-full' />
          </Link>
        )
      })}
    </div>
  )
}
