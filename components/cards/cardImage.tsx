import { CardProps } from './card'

interface Props extends Omit<CardProps, 'children'> {
  img: string
  about: string
}

export default function CardImage({ img, title, about }: Props) {
  return (
    <div className='flex flex-col items-center border-2 border-black p-4 rounded aspect-[397/362] max-w-[350px] relative'>
      <img
        src={img}
        alt={title}
        className='absolute rounded-lg top-[-40px] aspect-[347/230] object-cover w-[85%] border-2 border-black'
      />
      <div className='pt-[50%] flex flex-col items-center gap-1'>
        <h3 className='text-center text-4xl mt-2'>{title}</h3>
        <p className='text-center text-sm mt-1'>{about}</p>
      </div>
    </div>
  )
}
