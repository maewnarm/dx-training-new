import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <main className="home-main">
        <h1>In main</h1>
      </main>
      <section>
        <h1>In section</h1>
      </section>

      <footer>

      </footer>
    </div>
  )
}

export default Home
