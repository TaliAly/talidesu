import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='My own portfolio for me! Allyson, otherwise known as Talialy'
        />
        <meta property='og:title' content='Talidesi | Portfolio' />
        <meta property='og:site_name' content='Talidesi | Portfolio' />
        <meta property='og:type' content='Portfolio' />
        <meta
          property='og:description'
          content='My own portfolio for me! Allyson, otherwise known as Talialy'
        />
        <meta property='og:locale' content='en_US' />
        <meta
          property='og:image'
          content='https://static.vecteezy.com/system/resources/previews/008/470/315/original/coffee-mug-anime-cute-character-cartoon-model-emotion-illustration-clipart-drawing-kawaii-manga-design-idea-art-free-png.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
