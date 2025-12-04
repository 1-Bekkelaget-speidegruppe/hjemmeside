import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-[#0d2a24] text-white overflow-hidden">
      {/* Decorative elements - static */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-smaspeider/30 to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-vandrer/10 blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-smaspeider/10 blur-3xl opacity-15" />

      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo-speiderne.png"
                alt="Logo"
                className="h-14 w-auto transition-transform group-hover:rotate-3"
              />
            </Link>
            <h3 className="font-bold text-xl mb-3">
              1. Bekkelaget
              <br />
              Speidergruppe
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Naturopplevelser, mestring og fellesskap for barn og unge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-smaspeider mb-6">
              Snarveier
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Om oss", href: "/om-oss" },
                { name: "Avdelinger", href: "/avdelinger" },
                { name: "Bli med", href: "/bli-med" },
                { name: "Pakkeliste", href: "/pakkeliste" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-smaspeider transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-smaspeider mb-6">
              Eksterne lenker
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: "Spond",
                  href: "https://spond.com/invite/XVWSM",
                  icon: "📱",
                },
                {
                  name: "Norges Speiderforbund",
                  href: "https://speiding.no",
                  icon: "🏕️",
                },
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/groups/174321642900841/",
                  icon: "👥",
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                    <svg
                      className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-smaspeider mb-6">
              Kontakt
            </h4>
            <div className="space-y-4 text-white/60">
              <p className="flex items-start gap-3">
                <span className="text-lg">📧</span>
                <a
                  href="mailto:oystlars64@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  oystlars64@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>Ekebergveien 243, 1166 Oslo</span>
              </p>
            </div>
            {/* CTA in footer */}
            <Link
              href="/bli-med"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-smaspeider text-black font-bold text-sm uppercase rounded-lg hover:bg-smaspeider/90 transition-all hover:shadow-lg hover:shadow-smaspeider/20"
            >
              Bli speider
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} 1. Bekkelaget Speidergruppe. Alle rettigheter
              reservert.
            </p>
            <p className="text-sm text-white/40 flex items-center gap-2">
              Laget med <span className="text-red-400">❤️</span> i Oslo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
