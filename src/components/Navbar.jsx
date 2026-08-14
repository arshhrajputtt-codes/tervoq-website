import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="flex items-center gap-2.5">
          <img src="/logo-mark.png" alt="TERVOQ" className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight">TERVOQ</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-mist transition-colors hover:bg-white/5 hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-ivory px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Start a Project
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </a>

        <button
          className="glass rounded-full p-2.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-6 mt-3 overflow-hidden rounded-2xl glass md:hidden"
          >
            <div className="flex flex-col p-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-mist hover:bg-white/5 hover:text-ivory"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-ivory px-3 py-3 text-center text-sm font-semibold text-ink"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
