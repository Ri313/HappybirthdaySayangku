import { motion } from 'framer-motion'

/**
 * Widget piringan hitam mini di pojok layar.
 * Berputar saat lagu sedang play, berhenti saat pause.
 */
export default function MusicPlayer({ isPlaying, onToggle, judul, penyanyi }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 rounded-full bg-night-panel/80 backdrop-blur-md border border-gold/20 pl-2 pr-4 py-2 shadow-glow"
    >
      <button
        onClick={onToggle}
        aria-label={isPlaying ? 'Jeda lagu' : 'Putar lagu'}
        className="relative h-11 w-11 shrink-0 rounded-full bg-[radial-gradient(circle_at_center,#0d0910_0%,#0d0910_18%,#2a2032_19%,#2a2032_22%,#0d0910_23%,#0d0910_34%,#2a2032_35%,#2a2032_38%,#0d0910_39%,#0d0910_100%)] border border-gold/40 grid place-items-center"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { repeat: Infinity, duration: 3.2, ease: 'linear' } : { duration: 0.3 }}
        >
          <div className="absolute inset-0 rounded-full" />
        </motion.div>
        <span className="relative z-10 h-3 w-3 rounded-full bg-gold" />
        <span className="absolute z-20">
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-0">
              <rect x="6" y="4" width="4" height="16" fill="#1B1523" />
              <rect x="14" y="4" width="4" height="16" fill="#1B1523" />
            </svg>
          ) : null}
        </span>
      </button>

      <div className="flex flex-col leading-tight overflow-hidden max-w-[120px]">
        <span className="font-body text-[11px] text-mute truncate">
          {isPlaying ? 'Sedang diputar' : 'Dijeda'}
        </span>
        <span className="font-display text-sm text-cream truncate">{judul}</span>
        <span className="font-body text-[11px] text-gold-soft truncate">{penyanyi}</span>
      </div>

      <button
        onClick={onToggle}
        aria-label={isPlaying ? 'Jeda' : 'Putar'}
        className="ml-1 shrink-0 h-8 w-8 grid place-items-center rounded-full bg-gold/15 hover:bg-gold/25 transition-colors"
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
      </button>
    </motion.div>
  )
}
