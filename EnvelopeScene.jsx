import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import content from '../data/content.js'

export default function EnvelopeScene({ onOpen, onNext }) {
  const [stage, setStage] = useState('closed') // 'closed' | 'opening' | 'letter'

  const handleEnvelopeClick = () => {
    if (stage !== 'closed') return
    setStage('opening')
    onOpen() // mulai putar musik tepat saat interaksi (gesture) terjadi
    setTimeout(() => setStage('letter'), 900)
  }

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden px-6">
      {/* latar bintang lembut */}
      <div className="absolute inset-0 bg-stars opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night to-night-deep" style={{ zIndex: -1 }} />

      <AnimatePresence mode="wait">
        {stage !== 'letter' ? (
          <motion.div
            key="envelope"
            className="relative flex flex-col items-center gap-6"
            animate={
              stage === 'opening'
                ? { scale: 1.15, opacity: 0, filter: 'blur(6px)' }
                : { scale: 1, opacity: 1, filter: 'blur(0px)' }
            }
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              onClick={handleEnvelopeClick}
              aria-label="Buka amplop"
              className="relative w-[260px] h-[180px] xs:w-[280px] xs:h-[190px] focus:outline-none"
              animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              whileTap={{ scale: 0.96 }}
            >
              {/* badan amplop */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[#2c2036] to-[#1f1729] shadow-2xl shadow-black/50 border border-gold/20" />
              {/* flap segitiga atas */}
              <div
                className="absolute top-0 left-0 right-0 h-[95px] bg-gradient-to-b from-[#352840] to-[#241a2e] border-b border-gold/20"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 88%)' }}
              />
              {/* garis lipatan bawah */}
              <div
                className="absolute inset-0"
                style={{ clipPath: 'polygon(0 100%, 50% 40%, 100% 100%)' }}
              >
                <div className="absolute inset-0 bg-black/10" />
              </div>
              {/* segel lilin */}
              <div className="absolute left-1/2 top-[68px] -translate-x-1/2 h-11 w-11 rounded-full bg-gradient-to-br from-gold-soft to-gold shadow-lg grid place-items-center border-2 border-[#1B1523]/30">
                <span className="font-display text-night text-lg leading-none select-none">♡</span>
              </div>
            </motion.button>

            <div className="text-center">
              <p className="font-script text-2xl text-gold-soft">{content.amplop.label}</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-mute mt-2 animate-pulse">
                {content.amplop.instruksi}
              </p>
            </div>
          </motion.div>
        ) : (
          <LetterCard key="letter" onNext={onNext} />
        )}
      </AnimatePresence>
    </div>
  )
}

function LetterCard({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md h-[86vh] xs:h-[80vh] rounded-2xl bg-[#231a2c]/90 backdrop-blur-sm border border-gold/15 shadow-2xl shadow-black/60 flex flex-col overflow-hidden"
    >
      <div className="px-7 pt-8 pb-4 border-b border-gold/10">
        <h1 className="font-display text-2xl xs:text-3xl text-cream leading-snug">
          {content.surat.judul}
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto scroll-elegant px-7 py-6 space-y-5">
        {content.surat.paragraf.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            className="font-script text-xl xs:text-2xl leading-relaxed text-cream/90"
          >
            {p}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + content.surat.paragraf.length * 0.15 + 0.2 }}
          className="font-script text-xl text-gold-soft text-right pt-2"
        >
          — {content.namaPengirim}
        </motion.p>
      </div>

      <div className="px-7 py-5 border-t border-gold/10">
        <button
          onClick={onNext}
          className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-soft text-night font-body font-medium text-sm tracking-wide active:scale-[0.97] transition-transform"
        >
          {content.surat.tombolLanjut}
        </button>
      </div>
    </motion.div>
  )
}
