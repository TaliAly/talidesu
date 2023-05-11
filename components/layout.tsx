import Head from 'next/head'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ weight: '400', subsets: ['latin'] })

interface Props {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: Props) {
  return (
    <div className={dmSans.className}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/cuteAvatar.svg' />
      </Head>
      {children}
    </div>
  )
}
