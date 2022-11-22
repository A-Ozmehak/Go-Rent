import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import StartPage from './startPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Go:Rent</title>
        <meta name="description" content="Go:Rent Uthyrning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <StartPage />
    </div>
  )
}
