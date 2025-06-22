import { useState, useRef } from 'react'
import '@/styles/globals.css'
import 'animate.css'

export default function App({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((e) => {
        console.error('播放失败:', e)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <Component {...pageProps} audio={audioRef.current} />
      <img src="/image/rabbit.png" alt="" className={`rabbit ${isPlaying ? 'shaking' : ''}`} onClick={toggleMusic} />
      <audio ref={audioRef} loop>
        <source src="/music/myperson.flac" type="audio/flac" />
      </audio>
    </>
  )
}
