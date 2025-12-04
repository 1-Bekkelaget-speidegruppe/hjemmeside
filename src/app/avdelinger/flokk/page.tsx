import Section from "@/components/Section";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flokk - Speiding for 3.-4. trinn",
  description:
    "Flokk er for de yngste speiderne i 3.-4. trinn. Lek, enkle speiderferdigheter og korte turer i Oslo. Møter torsdager 18:00-19:30 på Ekebergveien 243.",
  keywords: [
    "flokk",
    "småspeider",
    "speider barn",
    "speiding 3 trinn",
    "speiding 4 trinn",
    "aktiviteter barn oslo",
    "friluftsliv barn",
  ],
  openGraph: {
    title: "Flokk | 1. Bekkelaget Speidergruppe",
    description: "Speiding for de yngste! Flokk for 3.-4. trinn i Oslo.",
  },
};

export default function Flokk() {
  const aktiviteter = [
    { icon: "🎮", title: "Lek & spill" },
    { icon: "🪢", title: "Knuter" },
    { icon: "🔥", title: "Bålbygging" },
    { icon: "🩹", title: "Førstehjelp" },
    { icon: "🏃", title: "Uteleker" },
    { icon: "🎨", title: "Kreativitet" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-smaspeider/20 mb-6">
              <span className="text-2xl">🌟</span>
              <span className="text-sm font-bold text-smaspeider uppercase tracking-wider">
                3.–4. trinn
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Flokk
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Småspeidere som oppdager naturen gjennom lek og moro!
            </p>
            <Button
              href="/bli-med"
              variant="flokk"
              className="text-lg px-8 py-4"
            >
              Bli med i Flokken →
            </Button>
          </div>
          <div className="relative">
            <img
              src="/flokk.jpg"
              alt="Flokk aktivitet"
              className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-smaspeider text-black px-6 py-4 rounded-xl shadow-xl hidden md:block">
              <div className="text-2xl font-bold">Torsdager</div>
              <div className="text-sm uppercase tracking-wider">
                18:00 – 19:30
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Aktiviteter */}
      <Section bg="white">
        <div className="text-center mb-12">
          <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
            Hva vi gjør
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
            Aktiviteter i Flokken
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {aktiviteter.map((item, i) => (
            <div
              key={i}
              className="bg-grey hover:bg-smaspeider/10 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
            <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
              Om flokken
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Lek og læring
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                I flokken er vi mye ute og leker. Vi lærer enkle
                speiderferdigheter som knuter, bålbygging og førstehjelp, men
                det viktigste er å ha det gøy sammen.
              </p>
              <p>
                Flokken er det perfekte stedet for barn å starte sin
                speiderreise – med trygge rammer, masse lek og gode opplevelser
                i naturen.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6 uppercase">
              Praktisk info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-smaspeider/20 flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Møtetid</h4>
                  <p className="text-gray-600">Torsdager kl. 18:00 – 19:30</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-smaspeider/20 flex items-center justify-center text-xl">
                  👥
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Leder</h4>
                  <p className="text-gray-600">Lucas Bateson</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-smaspeider/20 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Møtested</h4>
                  <p className="text-gray-600">Ekebergveien 243, 1166 Oslo</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button href="/bli-med" variant="flokk" className="w-full">
                Bli med i Flokken
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
