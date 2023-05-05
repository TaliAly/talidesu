import Head from 'next/head'

interface Props {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/cuteAvatar.svg' />
      </Head>
      {children}
    </div>
  )
}
