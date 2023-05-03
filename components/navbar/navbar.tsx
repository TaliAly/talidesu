import Link from 'next/link'
import { LargeSuitcase, GitHub, LinkedIn, Twitter } from 'iconoir-react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-center md:justify-between items-center p-4 gap-5'>
      <Link href='mailto: allysonnomuraga@gmail.com' className='flex flex-row gap-2'>
        <LargeSuitcase /> allysonnomuraga@gmail.com
      </Link>

      <div className='hidden md:flex flex-row gap-5'>
        <div className='flex flex-row gap-2'>
          <GitHub />
          <Link href=''>github</Link>
        </div>

        <div className='flex flex-row gap-2'>
          <Twitter />
          <Link href=''>twitter</Link>
        </div>
        <div className='flex flex-row gap-2'>
          <LinkedIn />
          <Link href=''>linkedin</Link>
        </div>
      </div>
    </div>
  )
}
