import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Roverlag() {
  const aktiviteter = [
    { icon: "🏔️", title: "Fjellturer" },
    { icon: "🍕", title: "Sosiale kvelder" },
    { icon: "🌍", title: "Internasjonalt" },
    { icon: "👥", title: "Lederskap" },
    { icon: "🎉", title: "Arrangementer" },
    { icon: "🤝", title: "Prosjekter" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rover/20 mb-6">
              <span className="text-2xl">🎒</span>
              <span className="text-sm font-bold text-rover uppercase tracking-wider">
                16–25 år
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Roverlag
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hovedsakelig turer og arrangementer – for unge voksne som vil mer!
            </p>
            <Button
              href="/kontakt"
              variant="rover"
              className="text-lg px-8 py-4"
            >
              Ta kontakt →
            </Button>
          </div>
          <div className="relative">
            <img
              src="/rover.jpg"
              alt="Roverlag aktivitet"
              className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-rover text-white px-6 py-4 rounded-xl shadow-xl hidden md:block">
              <div className="text-2xl font-bold">Fleksibelt</div>
              <div className="text-sm uppercase tracking-wider">
                Turer & arrangementer
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Aktiviteter */}
      <Section bg="white">
        <div className="text-center mb-12">
          <span className="text-rover font-bold uppercase tracking-widest text-sm mb-4 block">
            Hva vi gjør
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
            Aktiviteter i Roverlaget
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {aktiviteter.map((item, i) => (
            <div
              key={i}
              className="bg-grey hover:bg-rover/10 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Info Section */}
      <Section bg="grey" slopeTop slopeAngle="left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-rover font-bold uppercase tracking-widest text-sm mb-4 block">
              Om roverlaget
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Frihet og fellesskap
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Roverlaget bestemmer selv hva de vil gjøre. Det kan være alt fra
                krevende fjellturer til sosiale kvelder med pizza og film.
              </p>
              <p>
                Mange rovere er også ledere i flokk eller tropp, og bidrar til å
                forme neste generasjon speidere. Det er et fellesskap som varer
                livet ut!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6 uppercase">
              Praktisk info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rover/20 flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Møtetid</h4>
                  <p className="text-gray-600">
                    Hovedsakelig turer og arrangementer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rover/20 flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Leder</h4>
                  <p className="text-gray-600">Lucas Bateson</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rover/20 flex items-center justify-center text-xl">
                  🎯
                </div>
                <div>
                  <h4 className="font-bold text-foreground">For hvem?</h4>
                  <p className="text-gray-600">Unge voksne 16–25 år</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button href="/kontakt" variant="rover" className="w-full">
                Kontakt oss for å bli med
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
