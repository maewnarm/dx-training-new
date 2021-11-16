import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Welcome to Temp-app</title>
        <link href="/css/all.css" rel="stylesheet"/> 
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

