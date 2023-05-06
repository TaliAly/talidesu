import { icons, iconsProps } from './iconsInfo'
import useResponsive from '@/hooks/useResponsive'
import Link from 'next/link'
import moveItOut from './moveItOut'

interface Props {
  Class: string
}

export default function HeaderIcons({ Class }: Props) {
  const { isDesktop } = useResponsive()

  return (
    <div className={`${Class} opacity-0 md:opacity-100 transition-opacity`}>
      {icons.map(({ title, left, top, link, deg }: iconsProps, index) => {
        return (
          <Link
            key={index}
            href={link}
            className={`absolute aspect-square opacity-70`}
            style={{
              top: moveItOut({ left, top }).top,
              left: moveItOut({ left, top }).left,
            }}
          >
            <img
              src={title}
              alt='images code'
              className='aspect-square min-w-[50px] min-h-[50px] w-[4vw] h-[4vw] object-contain'
            />
          </Link>
        )
      })}
    </div>
  )
}
