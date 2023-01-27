import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import UIProvider from '@/components/context/UIProvider'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <script key="google-tag-manager" dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P5RG2LD');
`}} />
    </Head>
    <noscript dangerouslySetInnerHTML={{
      __html: `
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5RG2LD"
    height="0" width="0" style="display:none;visibility:hidden" />
    `}} />
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  </>
}

export default MyApp