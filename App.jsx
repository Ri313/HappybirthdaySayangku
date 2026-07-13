import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import EnvelopeScene from './components/EnvelopeScene.jsx'
import Flashback from './components/Flashback.jsx'
import SongPage from './components/SongPage.jsx'
import ClosingPage from './components/ClosingPage.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import content from './data/content.js'

// Variasi animasi transisi antar halaman.
// 'fade'      -> dipakai saat pindah dari Surat ke Kilas Balik
// 'slide'     -> dipakai saat pindah dari Kilas Balik ke Halaman Lagu
// 'fadeSlow'  -> dipakai saat masuk ke Halaman Penutup (fade in perlahan)
const variantsMap = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  },
  fadeSlow: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
}

const durationMap = { fade: 0.6, slide: 0.55, fadeSlow: 1.6 }

export default function App() {
  const [page, setPage] = useState('envelope') // envelope | flashback | song | closing
  const [transitionType, setTransitionType] = useState('fade')
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const goTo = (nextPage, type) => {
    setTransitionType(type)
    setPage(nextPage)
  }

  const handleOpenEnvelope = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0
    audio
      .play()
      .then(() => {
        setIsPlaying(true)
        let v = 0
        const fade = setInterval(() => {
          v += 0.06
          if (v >= 0.7) {
            v = 0.7
            clearInterval(fade)
          }
          audio.volume = v
        }, 60)
      })
      .catch(() => {
        // Beberapa browser memblokir autoplay; pengguna tetap bisa
        // menekan tombol play manual di widget musik.
        setIsPlaying(false)
      })
  }

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }
  }

  const showMiniPlayer = page === 'envelope' || page === 'flashback'

  return (
    <div className="h-[100dvh] w-full bg-night-deep flex items-center justify-center">
      {/* Bingkai ala aplikasi mobile — di layar besar akan terlihat seperti "kartu ponsel",
          di HP akan mengisi penuh layar secara natural. */}
      <div className="relative h-[100dvh] w-full max-w-[480px] sm:h-[92vh] sm:max-h-[880px] sm:rounded-[2rem] overflow-hidden sm:border sm:border-gold/10 sm:shadow-2xl sm:shadow-black/70 bg-night">
        <audio ref={audioRef} src={content.lagu.src} loop preload="auto" />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={variantsMap[transitionType]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: durationMap[transitionType], ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {page === 'envelope' && (
              <EnvelopeScene
                onOpen={handleOpenEnvelope}
                onNext={() => goTo('flashback', 'fade')}
              />
            )}
            {page === 'flashback' && <Flashback onNext={() => goTo('song', 'slide')} />}
            {page === 'song' && (
              <SongPage
                isPlaying={isPlaying}
                onToggle={toggleAudio}
                onNext={() => goTo('closing', 'fadeSlow')}
              />
            )}
            {page === 'closing' && <ClosingPage />}
          </motion.div>
        </AnimatePresence>

        {showMiniPlayer && (
          <MusicPlayer
            isPlaying={isPlaying}
            onToggle={toggleAudio}
            judul={content.lagu.judul}
            penyanyi={content.lagu.penyanyi}
          />
        )}
      </div>
    </div>
  )
}
