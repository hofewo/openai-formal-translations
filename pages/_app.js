import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import UIProvider from '@/components/context/UIProvider'

function MyApp({ Component, pageProps }) {
  return <>
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  </>
}

export default MyApp