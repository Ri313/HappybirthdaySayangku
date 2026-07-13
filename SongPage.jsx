import { motion } from 'framer-motion'
import content from '../data/content.js'

export default function SongPage({ isPlaying, onToggle, onNext }) {
  const { judul, penyanyi, deskripsiHalamanLagu } = content.lagu

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-night via-[#1d1526] to-night-deep">
      <div className="absolute inset-0 bg-stars opacity-40" />

      <div className="relative flex items-center w-full max-w-md">
        {/* setengah piringan hitam, "terpotong" keluar dari tepi kiri layar */}
        <motion.div
          className="relative -ml-24 xs:-ml-20 h-52 w-52 xs:h-60 xs:w-60 shrink-0"
          animate={isPlaying ? { rotate: 360 } : {}}
          transition={isPlaying ? { repeat: Infinity, duration: 3.5, ease: 'linear' } : {}}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,#0d0910_0%,#0d0910_15%,#2a2032_16%,#2a2032_20%,#0d0910_21%,#0d0910_30%,#2a2032_31%,#2a2032_34%,#0d0910_35%,#0d0910_46%,#2a2032_47%,#2a2032_50%,#0d0910_51%,#0d0910_100%)] shadow-2xl shadow-black/60 border border-gold/20" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gold-soft to-gold grid place-items-center border-4 border-night-deep">
              <div className="h-2.5 w-2.5 rounded-full bg-night-deep" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pl-5 flex-1"
        >
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold-soft mb-1">
            Sedang diputar
          </p>
          <h2 className="font-display text-2xl xs:text-3xl text-cream leading-tight">{judul}</h2>
          <p className="font-script text-xl text-mute mt-1">{penyanyi}</p>

          <button
            onClick={onToggle}
            className="mt-5 flex items-center gap-2 rounded-full bg-gold/15 hover:bg-gold/25 transition-colors px-4 py-2"
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="4" width="5" height="16" rx="1.5" fill="#D4A574" />
                <rect x="14" y="4" width="5" height="16" rx="1.5" fill="#D4A574" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6 4L20 12L6 20V4Z" fill="#D4A574" />
              </svg>
            )}
            <span className="font-body text-xs text-gold-soft">{isPlaying ? 'Jeda' : 'Putar'}</span>
          </button>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="font-script text-xl text-center text-cream/80 max-w-xs mt-10"
      >
        {deskripsiHalamanLagu}
      </motion.p>

      <button
        onClick={onNext}
        className="fixed bottom-6 right-6 z-40 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-gold-soft text-night font-body font-medium text-sm tracking-wide shadow-glow active:scale-[0.97] transition-transform"
      >
        Last →
      </button>
    </div>
  )
}
