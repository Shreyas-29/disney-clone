import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import Head from 'next/head'

export default function Home({ user }) {
  return (
    <>
      <Head>
        <title>Disney</title>
        <meta name="description" content="App made by shreyas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dianey.svg" />
      </Head>
      {!user ? <Hero /> : (
        <main className='text-white py-20'>
          <Slider />
          <Brands />
        </main>
      )}
    </>
  )
}
