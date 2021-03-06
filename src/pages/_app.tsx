import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/dedos_cruzados.png" />
        <link rel="apple-touch-icon" href="/img/dedos_cruzados.png" />
        <meta name="theme-color" content="#06092B" />

        <title>Apartamento à venda em Botafogo com 2 quartos - Campainha</title>
        <meta name="description" content="Em 1931, Winston Churchill previu que um dia o homem escaparia do absurdo de criar uma galinha inteira para comer somente o peito ou a asa, produzindo essas partes separadamente em um meio adequado." />
        <meta name="keywords" content="inovação tecnologia e sustentabilidade em pescado" />
        <meta property="og:title" content="Sustineri Piscis" />
        <meta property="og:description" content="Em 1931, Winston Churchill previu que um dia o homem escaparia do absurdo de criar uma galinha inteira para comer somente o peito ou a asa, produzindo essas partes separadamente em um meio adequado." />
        <meta property="og:image" content="https://sustineripiscis.com/img/backgrounds/fundo_print_small.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://sustineripiscis.com/" />


      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
