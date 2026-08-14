const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="section flex flex-col gap-10 !py-16 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo-mark.png" alt="TERVOQ" className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-tight">TERVOQ</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Building Digital Solutions For Modern Businesses.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mist transition-colors hover:text-ivory">
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-mist">Email</p>
          <a href="mailto:hello@tervoq.tech" className="mt-2 block text-sm font-medium text-ivory">
            hello@tervoq.tech
          </a>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-mist">
        © {new Date().getFullYear()} TERVOQ. All rights reserved.
      </div>
    </footer>
  )
}
