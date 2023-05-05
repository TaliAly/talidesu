import Layout from '@/components/layout'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header/header'
import Content from '@/components/content/content'

export default function Home() {
  return (
    <Layout title='Talialy | Portfolio'>
      <Navbar />
      <Header />
      <Content />
    </Layout>
  )
}
