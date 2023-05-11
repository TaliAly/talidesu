import style from './cardImage.module.scss'
import { CardProps } from './card'
import Link from 'next/link'

interface Props extends Omit<CardProps, 'children'> {
  img: string
  about: string
}

export default function CardImage({ img, title, about }: Props) {
  return (
    <Link
      href='#'
      className='flex flex-col items-center p-4 rounded aspect-[347/230] w-full max-w-[350px] relative'
    >
      <img
        src={img}
        alt={title}
        className={` ${style.cardImage} absolute rounded-lg aspect-[347/230] object-cover w-full border-2 border-black`}
      />

      <div className='flex flex-col  justify-center items-center gap-1 absolute text-white w-full h-full'>
        <h3 className='text-center text-4xl mt-2'>{title}</h3>
        <p className='text-center text-sm mt-1'>{about}</p>
      </div>
    </Link>
  )
}
