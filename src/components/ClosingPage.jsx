import { motion } from 'framer-motion'
import content from '../data/content.js'

export default function ClosingPage() {
  const { teks, foto } = content.penutup

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center px-7 overflow-hidden bg-gradient-to-b from-[#241a2e] via-night to-night-deep">
      <div className="absolute inset-0 bg-stars opacity-60" />
      <motion.div
        className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-blush/20 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
        animate={{ opacity: [0.5, 0.25, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="relative font-script text-3xl xs:text-4xl text-center leading-relaxed text-cream max-w-sm"
      >
        {teks}
      </motion.p>

      <div className="relative flex gap-4 mt-10">
        {foto.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 1 + i * 0.6, ease: 'easeOut' }}
            className={`h-40 w-28 xs:h-48 xs:w-32 rounded-lg overflow-hidden border border-gold/20 shadow-glow ${
              i === 0 ? '-rotate-3' : 'rotate-3 mt-4'
            }`}
          >
            <img src={src} alt={`Kenangan ${i + 1}`} className="h-full w-full object-cover" />
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 2.4 }}
        className="relative font-body text-xs tracking-[0.3em] uppercase text-gold-soft mt-10"
      >
        {content.namaPengirim} ♡ {content.namaPanggilan}
      </motion.p>
    </div>
  )
}
