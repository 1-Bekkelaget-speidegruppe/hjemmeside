import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-bold text-lg mb-4">1. Bekkelaget Speidergruppe</h3>
          <p className="text-gray-300 text-sm">
            Naturopplevelser, mestring og fellesskap for barn og unge i Ekeberg, Bekkelaget og Nordstrand.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Snarveier</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/om-oss" className="hover:text-white">Om oss</Link></li>
            <li><Link href="/bli-med" className="hover:text-white">Bli med</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
            <li><a href="https://spond.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Spond</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Kontakt</h3>
          <p className="text-gray-300 text-sm">
            E-post: kontakt@bekkelagetspeider.no<br />
            Adresse: Ekebergveien, Oslo
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} 1. Bekkelaget Speidergruppe.
      </div>
    </footer>
  );
}
