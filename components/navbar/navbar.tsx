import Link from 'next/link'
import useResponsive from '@/hooks/useResponsive'
import { LargeSuitcase, GitHub, LinkedIn, Twitter } from 'iconoir-react'

export default function Navbar() {
  const { isDesktop, isMobile, isTablet } = useResponsive()

  return (
    <div className='flex flex-row justify-center md:justify-between items-center px-4 py-1 gap-5 text-slate-800 text-sm'>
      <Link href='mailto: allysonnomuraga@gmail.com' className='group'>
        <p className='flex flex-row gap-2 group-hover:scale-110 transition'>
          <LargeSuitcase className='group-hover:scale-125 transition' />
          allysonnomuraga@gmail.com
        </p>
      </Link>

      {isDesktop && (
        <div className='flex flex-row gap-x-5'>
          <LinkIcon link='https://github.com/TaliAly'>
            <GitHub />
            <p>github</p>
          </LinkIcon>

          <LinkIcon link='https://twitter.com/Allynomus'>
            <Twitter />
            <p>twitter</p>
          </LinkIcon>
          <LinkIcon link='#'>
            <LinkedIn />
            <p>linkedin</p>
          </LinkIcon>
        </div>
      )}
    </div>
  )
}

interface linkProps {
  children: React.ReactNode
  link: string
}
const LinkIcon = ({ children, link }: linkProps) => {
  return (
    <Link
      href={link}
      className='flex flex-row gap-2 hover:bg-slate-200 hover:rounded-md transition p-2'
    >
      {children}
    </Link>
  )
}
