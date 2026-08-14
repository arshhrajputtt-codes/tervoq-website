import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Cinematic first-impression sequence: particles -> logo forms from depth -> settles -> reveals hero.
// Runs once per session (skips on repeat visits within the tab) and respects reduced-motion.
export default function LogoReveal({ onComplete }) {
  const [visible, setVisible] = useState(true)
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false)
      onComplete?.()
      return
    }
    const t = setTimeout(() => {
      setVisible(false)
      onComplete?.()
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  const particles = Array.from({ length: 24 })

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* ambient particles forming at ~1s */}
          {particles.map((_, i) => {
            const angle = (i / particles.length) * Math.PI * 2
            const radius = 120 + (i % 4) * 30
            return (
              <motion.span
                key={i}
                className="absolute h-[3px] w-[3px] rounded-full bg-blue-soft"
                initial={{
                  x: Math.cos(angle) * radius * 2.4,
                  y: Math.sin(angle) * radius * 2.4,
                  opacity: 0,
                }}
                animate={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  opacity: [0, 0.9, 0.5],
                }}
                transition={{ duration: 1.4, delay: 0.15, ease: 'easeOut' }}
              />
            )
          })}

          {/* logo enters from depth with slight 3D perspective + rotation */}
          <motion.div
            className="relative flex flex-col items-center"
            style={{ perspective: 800 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotateY: -35, z: -200, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo-mark.png"
                alt="TERVOQ"
                className="h-12 w-12 drop-shadow-[0_0_40px_rgba(47,107,255,0.45)]"
              />
              <span className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-ivory">
                TERVOQ
              </span>
            </motion.div>

            {/* soft glow settling beneath */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 0.6, scaleX: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-4 h-px w-40 bg-gradient-to-r from-transparent via-blue-soft to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
