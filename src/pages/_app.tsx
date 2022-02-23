import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <link rel="shortcut icon" href="/img/dedos_cruzados.png" />
        <link rel="apple-touch-icon" href="/img/dedos_cruzados.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />


        <title>Apartamento à venda em Botafogo com 2 quartos - Campainha</title>
        <meta name="description" content="Apartamento à venda em Botafogo, Rio de Janeiro com 2 quartos, preço R$ 1.225.000 e a segurança da imobiliária Ligiero Imóveis para comprar seu imóvel" />
        <meta name="keywords" content="apartamento à venda em botafogo, rio de janeiro" />
        <meta property="og:title" content="Apartamento à venda em Botafogo com 2 quartos - Campainha" />
        <meta property="og:description" content="Apartamento à venda em Botafogo, Rio de Janeiro com 2 quartos, preço R$ 1.225.000 e a segurança da imobiliária Ligiero Imóveis para comprar seu imóvel" />
        <meta property="og:image" content="https://cdn-images.campainha.com.br/dyhbiLqv7dKwRjQC_F2hebet6fY=/fit-in/285x189/filters:fill(black):format(jpeg):quality(80)/https://joseligiero.com.br/upload/imoveis/893840269290.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://www.campainha.com.br/imoveis/venda-de-apartamento-com-2-quartos-78-m2-com-garagem-botafogo-rio-de-janeiro-rj-5e5e56fd-2a5c-427b-9072-28eb669bd1fd" />

        <script data-ad-client="ca-pub-8722023550436773" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
