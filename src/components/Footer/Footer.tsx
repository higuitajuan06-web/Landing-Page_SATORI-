import { FOOTER_COLUMNS } from '@/constants'

export function Footer() {
  return (
    <footer className="bg-ink w-full overflow-hidden">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Centered container with proper max width */}
        <div className="max-w-7xl mx-auto">
          {/* 4-Column Grid Layout - Perfect Symmetry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12">
            {/* Column 1: SATORI Brand */}
            <div className="flex flex-col">
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white mb-4">
                SATORI
              </h3>
              <p className="text-[13px] text-white/40 leading-relaxed">
                Automatización con IA para negocios que quieren crecer sin límites operativos.
              </p>
            </div>

            {/* Columns 2-4: Footer Link Sections */}
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading} className="flex flex-col">
                <h4 className="text-[13px] font-bold text-white/70 uppercase tracking-widest mb-5 md:mb-6">
                  {column.heading}
                </h4>
                <ul className="space-y-3 md:space-y-4 flex flex-col">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-white/40 hover:text-white/80 transition-colors duration-300 no-underline"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="border-t border-white/10 mb-8 md:mb-10" />

          {/* Bottom Section: Copyright + Social Icons */}
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
            {/* Copyright Text */}
            <p className="text-[12px] text-white/25 text-center md:text-left">
              © 2026 SATORI · Agencia de IA y Automatizaciones · Todos los derechos reservados.
            </p>

            {/* Social Icons - Clean & Accessible */}
            <div className="flex gap-3 justify-center md:justify-end">
              {[
                {
                  href: 'https://facebook.com',
                  label: 'Facebook',
                  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                },
                {
                  href: 'https://instagram.com',
                  label: 'Instagram',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                },
                {
                  href: 'https://tiktok.com',
                  label: 'TikTok',
                  path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.24 8.24 0 004.83 1.56V6.81a4.85 4.85 0 01-1.06-.12z',
                },
              ].map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[32px] h-[32px] rounded flex items-center justify-center bg-white/[0.06] hover:bg-brand-600/40 transition-all duration-300 hover:scale-110 overflow-hidden"
                  aria-label={label}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white/40 hover:fill-white/80 transition-colors">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
