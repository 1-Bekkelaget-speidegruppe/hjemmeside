import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Pakkeliste() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-vandrer font-bold uppercase tracking-widest text-sm mb-4 block">
            Forbered deg
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Pakkeliste
          </h1>
          <p className="text-xl text-gray-600">
            Pakkeliste for turer og leir kommer snart!
          </p>
        </div>
      </Section>

      {/* Coming Soon */}
      <Section bg="white">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">🎒</div>
          <h2 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
            Kommer snart
          </h2>
          <p className="text-gray-600 mb-8">
            Vi jobber med å lage en god pakkeliste. I mellomtiden kan du
            kontakte lederne hvis du lurer på hva du skal ha med på tur.
          </p>
          <Button href="/kontakt" variant="primary">
            Kontakt oss →
          </Button>
        </div>
      </Section>
    </div>
  );
}
