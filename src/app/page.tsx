import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";
import CleanImage from "@/components/CleanImage";

export default function Home() {
  return (
    <div>
      <Hero 
        title="Naturopplevelser. Mestring. Fellesskap."
        subtitle="Bli med 1. Bekkelaget Speidergruppe på eventyr i skog og mark."
        ctaText="Bli speider"
        ctaLink="/bli-med"
      />

      <Section bg="grey" className="py-20" slopeTop slopeAngle="right">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <CleanImage src="/tropp.jpg" alt="Speidere på tur" className="h-96 w-full shadow-lg" delay={0.2} />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">Velkommen ut</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Vi er en aktiv speidergruppe som holder til i området Ekeberg, Bekkelaget og Nordstrand. 
              Hos oss får barn og unge oppleve friluftsliv, lære samarbeid og utvikle seg selv i trygge rammer.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Naturen er vår lekeplass, og vi bruker den året rundt – fra skiturer i marka til kanopadling på fjorden.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="white" slopeTop slopeAngle="left">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">Våre avdelinger</h2>
          <p className="text-lg text-gray-600">
            Speiding er for alle, uansett alder. Finn gruppen som passer for deg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 relative">
               <img src="/flokk.jpg" alt="Flokk" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20"></div>
               <div className="absolute bottom-2 left-4 text-white font-bold text-xl drop-shadow-md">FLOKK</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 uppercase">Flokk (3.–4. trinn)</h3>
              <p className="text-gray-600 mb-6 text-sm">
                For de yngste speiderne. Vi leker, lærer enkle speiderferdigheter og drar på korte turer i nærmiljøet.
              </p>
              <Link href="/avdelinger/flokk" className="text-primary font-bold uppercase text-sm hover:underline tracking-wider">Les mer →</Link>
            </div>
          </div>
          
          <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 relative">
               <img src="/tropp.jpg" alt="Tropp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20"></div>
               <div className="absolute bottom-2 left-4 text-white font-bold text-xl drop-shadow-md">TROPP</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 uppercase">Tropp (5.–10. trinn)</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Større utfordringer, lengre turer, patruljearbeid og leir. Her lærer man ledelse og selvstendighet.
              </p>
              <Link href="/avdelinger/tropp" className="text-primary font-bold uppercase text-sm hover:underline tracking-wider">Les mer →</Link>
            </div>
          </div>
          
          <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 relative">
               <img src="/rover.jpg" alt="Rover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/20"></div>
               <div className="absolute bottom-2 left-4 text-white font-bold text-xl drop-shadow-md">ROVER</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 uppercase">Roverlag (16–25 år)</h3>
              <p className="text-gray-600 mb-6 text-sm">
                For de eldste. Egne prosjekter, sosiale turer og lederansvar. Et sterkt fellesskap for unge voksne.
              </p>
              <Link href="/avdelinger/roverlag" className="text-primary font-bold uppercase text-sm hover:underline tracking-wider">Les mer →</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="vandrer" className="text-center" slopeTop slopeAngle="right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">Klar for nye eventyr?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-normal">
            Vi har plass til flere! Ta kontakt eller meld deg inn via Spond for å bli med på neste møte.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/bli-med" variant="flokk" className="shadow-lg">Bli medlem</Button>
            <Button href="/kontakt" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Kontakt oss</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
