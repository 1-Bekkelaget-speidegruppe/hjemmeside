import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Tropp() {
  const aktiviteter = [
    { icon: "🏕️", title: "Leir" },
    { icon: "🧭", title: "Orientering" },
    { icon: "🔥", title: "Bål & mat" },
    { icon: "🪢", title: "Pionering" },
    { icon: "⛺", title: "Teltliv" },
    { icon: "🎿", title: "Vintertur" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stifinner/20 mb-6">
              <span className="text-2xl">🏕️</span>
              <span className="text-sm font-bold text-stifinner uppercase tracking-wider">
                5.–10. trinn
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Tropp
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Patruljer, leir og ekte friluftsliv – her skjer eventyret!
            </p>
            <Button
              href="/bli-med"
              variant="tropp"
              className="text-lg px-8 py-4"
            >
              Bli med i Troppen →
            </Button>
          </div>
          <div className="relative">
            <img
              src="/tropp.jpg"
              alt="Tropp aktivitet"
              className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-stifinner text-white px-6 py-4 rounded-xl shadow-xl hidden md:block">
              <div className="text-2xl font-bold">Torsdager</div>
              <div className="text-sm uppercase tracking-wider">
                19:00 – 20:30
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Aktiviteter */}
      <Section bg="white">
        <div className="text-center mb-12">
          <span className="text-stifinner font-bold uppercase tracking-widest text-sm mb-4 block">
            Hva vi gjør
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
            Aktiviteter i Troppen
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {aktiviteter.map((item, i) => (
            <div
              key={i}
              className="bg-grey hover:bg-stifinner/10 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
            <span className="text-stifinner font-bold uppercase tracking-widest text-sm mb-4 block">
              Om troppen
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Patruljeliv og eventyr
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                I troppen er speiderne delt inn i patruljer som ledes av en
                patruljefører. Vi drar på lengre turer, sover i telt eller under
                åpen himmel, og lærer å klare oss selv.
              </p>
              <p>
                Her utvikler man lederferdigheter, samarbeid og selvstendighet.
                Troppen er ryggraden i speidergruppen!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6 uppercase">
              Praktisk info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stifinner/20 flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Møtetid</h4>
                  <p className="text-gray-600">Torsdager kl. 19:00 – 20:30</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stifinner/20 flex items-center justify-center text-xl">
                  👥
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Leder</h4>
                  <p className="text-gray-600">Jonas Larsen</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stifinner/20 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Møtested</h4>
                  <p className="text-gray-600">Ekebergveien 243, 1166 Oslo</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button href="/bli-med" variant="tropp" className="w-full">
                Bli med i Troppen
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
