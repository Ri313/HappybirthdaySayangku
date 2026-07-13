import { motion } from 'framer-motion'
import content from '../data/content.js'

export default function Flashback({ onNext }) {
  const { judul, subjudul, foto, tombolLagu } = content.kilasBalik

  return (
    <div className="relative h-full w-full overflow-y-auto scroll-elegant px-5 pt-10 pb-28 bg-gradient-to-b from-night to-night-deep">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold-soft mb-1">01 — 09</p>
        <h2 className="font-display text-3xl text-cream">{judul}</h2>
        <p className="font-script text-xl text-mute mt-1">{subjudul}</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3.5 max-w-md mx-auto">
        {foto.map((item, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-xl overflow-hidden border border-gold/15 bg-night-panel ${
              i % 5 === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-[3/4]'
            }`}
          >
            <img
              src={item.src}
              alt={item.deskripsi}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-deep/90 via-night-deep/10 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-3">
              <span className="font-script text-base text-cream leading-tight block">
                {item.deskripsi}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mt-10"
      >
        <button
          onClick={onNext}
          className="group relative px-7 py-3.5 rounded-full border border-gold/40 text-gold-soft font-body text-sm tracking-wide overflow-hidden active:scale-[0.97] transition-transform"
        >
          <span className="relative z-10">{tombolLagu} ♪</span>
        </button>
      </motion.div>
    </div>
  )
}
