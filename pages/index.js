import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Belajar Next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Link href={'/'}>
            <a>Halaman Utama</a>
          </Link>

          <br></br>

          <Link href={'/about'}>
            <a>About</a>
          </Link>

          <br></br>

          <Link href={'/blogs'}>
            <a>Blogs</a>
          </Link>
      </main>
    </>
  )
}
