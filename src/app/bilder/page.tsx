import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Bilder() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-vandrer font-bold uppercase tracking-widest text-sm mb-4 block">
            Minner
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Bilder fra eventyrene
          </h1>
          <p className="text-xl text-gray-600">
            Her legger vi ut bilder fra turer, leir og aktiviteter. Bli med på
            eventyret!
          </p>
        </div>
      </Section>

      {/* Empty Gallery State */}
      <Section bg="white">
        <div className="text-center max-w-2xl mx-auto py-12">
          <div className="text-6xl mb-6">📷</div>
          <h2 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
            Bildegalleriet kommer snart
          </h2>
          <p className="text-gray-600 mb-8">
            Vi jobber med å samle bilder fra våre turer og aktiviteter. Kom
            tilbake snart for å se hva vi har vært opp til!
          </p>
          <div className="inline-flex items-center gap-3 bg-grey rounded-full px-6 py-3">
            <span className="text-2xl">🏕️</span>
            <p className="text-gray-600">Følg med på nye eventyr!</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="vandrer" slopeTop slopeAngle="left">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
            Bli en del av historien
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
            Vil du være med på neste eventyr?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Skap dine egne minner med 1. Bekkelaget Speidergruppe!
          </p>
          <Button
            href="/bli-med"
            variant="flokk"
            className="text-lg px-10 py-5"
          >
            Bli med →
          </Button>
        </div>
      </Section>
    </div>
  );
}
