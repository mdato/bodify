import Head from 'next/head'
import Header from '../components/Header'
import Tracks from '../components/Tracks'
import { useState } from 'react'

export default function Home() {

  const [selHowl, setSelHowl] = useState(null)
  const [playing, setPlaying] = useState(false)
  return (
    <div>
      <Head>
        <title>Spooty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        playing={playing}
        setPlaying={setPlaying}
        selHowl={selHowl}
      />
      <Tracks playing={playing} setPlaying={setPlaying} selHowl={selHowl} setSelHowl={setSelHowl} />

    </div>
  )
}
