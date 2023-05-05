import Head from 'next/head'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

interface Props {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: Props) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/cuteAvatar.svg' />
      </Head>
      {children}
    </div>
  )
}
