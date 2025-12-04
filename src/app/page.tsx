import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import CleanImage from "@/components/CleanImage";

export default function Home() {
  const avdelinger = [
    {
      title: "Flokk",
      subtitle: "3.–4. trinn",
      description:
        "For de yngste speiderne. Vi leker, lærer enkle speiderferdigheter og drar på korte turer i nærmiljøet.",
      image: "/flokk.jpg",
      href: "/avdelinger/flokk",
      color: "smaspeider" as const,
    },
    {
      title: "Tropp",
      subtitle: "5.–10. trinn",
      description:
        "Større utfordringer, lengre turer, patruljearbeid og leir. Her lærer man ledelse og selvstendighet.",
      image: "/tropp.jpg",
      href: "/avdelinger/tropp",
      color: "stifinner" as const,
    },
    {
      title: "Roverlag",
      subtitle: "16–25 år",
      description:
        "Hovedsakelig turer og arrangementer. Et sterkt fellesskap for unge voksne.",
      image: "/rover.jpg",
      href: "/avdelinger/roverlag",
      color: "rover" as const,
    },
  ];

  const aktiviteter = [
    { icon: "🏕️", title: "Leir & Overnatting", desc: "Sov under stjernene" },
    { icon: "🔥", title: "Bål & Matlaging", desc: "Ekte friluftskjøkken" },
    { icon: "🧭", title: "Orientering", desc: "Finn veien i naturen" },
    { icon: "🛶", title: "Kano & Kajak", desc: "Padling på fjorden" },
    { icon: "⛷️", title: "Skiturer", desc: "Vinter i marka" },
    { icon: "🎭", title: "Fellesskap", desc: "Venner for livet" },
  ];

  return (
    <div>
      <Hero
        title="Alltid beredt."
        subtitle="Bli med 1. Bekkelaget Speidergruppe på eventyr i skog og mark."
        ctaText="Bli speider"
        ctaLink="/bli-med"
      />

      {/* About Section with floating elements */}
      <Section bg="grey" className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <CleanImage
              src="/tropp.jpg"
              alt="Speidere på tur"
              className="h-[500px] w-full shadow-2xl rounded-2xl"
              delay={0.2}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-smaspeider text-black px-6 py-4 rounded-xl shadow-xl animate-float hidden md:block">
              <div className="text-3xl font-bold">110+</div>
              <div className="text-sm uppercase tracking-wider">
                År med eventyr
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
              Velkommen til oss
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 uppercase tracking-wide leading-tight">
              Ut på tur,
              <br />
              <span className="gradient-text">aldri sur!</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Vi er en aktiv speidergruppe som holder til på Speiderhytta på
              Ballsletta i området Ekeberg, Bekkelaget og Nordstrand. Hos oss
              får barn og unge oppleve friluftsliv, lære samarbeid og utvikle
              seg selv i trygge rammer.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Naturen er vår lekeplass, og vi bruker den året rundt – fra
              skiturer i marka til kanopadling på fjorden.
            </p>
            <Button href="/om-oss" variant="primary">
              Les mer om oss →
            </Button>
          </div>
        </div>
      </Section>

      {/* Activities Grid */}
      <Section bg="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-vandrer font-bold uppercase tracking-widest text-sm mb-4 block">
            Hva vi gjør
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Eventyr hele året
          </h2>
          <p className="text-lg text-gray-600">
            Fra orientering i skogen til padling på fjorden – speiding er action
            og fellesskap i ett.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {aktiviteter.map((item, i) => (
            <div
              key={i}
              className="group bg-grey hover:bg-smaspeider/10 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Avdelinger Section */}
      <Section bg="grey" slopeTop slopeAngle="left">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-stifinner font-bold uppercase tracking-widest text-sm mb-4 block">
            For alle aldre
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Våre avdelinger
          </h2>
          <p className="text-lg text-gray-600">
            Speiding er for alle, uansett alder. Finn gruppen som passer for
            deg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {avdelinger.map((avd, i) => (
            <FeatureCard key={i} {...avd} index={i} />
          ))}
        </div>
      </Section>

      {/* Testimonial/Quote Section */}
      <Section bg="white" slopeTop slopeAngle="right">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6 opacity-20">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 italic mb-8 leading-relaxed">
            Friluftsliv er ikke komfort – det er frihet.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-smaspeider to-vandrer rounded-full flex items-center justify-center text-xl">
              🔥
            </div>
            <div className="text-left">
              <div className="font-bold text-foreground">Speidervisdom</div>
              <div className="text-sm text-gray-500">
                1. Bekkelaget Speidergruppe
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="vandrer" className="text-center" slopeTop slopeAngle="right">
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 left-10 text-6xl opacity-20 animate-float">
            🌲
          </div>
          <div
            className="absolute -bottom-5 right-10 text-5xl opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            ⛺
          </div>

          <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
            Bli en av oss
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wide">
            Klar for nye eventyr?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Vi har plass til flere! Ta kontakt eller meld deg inn via Spond for
            å bli med på neste møte.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/bli-med"
              variant="flokk"
              className="shadow-2xl shadow-smaspeider/30 text-lg px-10 py-5"
            >
              Bli medlem i dag 🎒
            </Button>
            <Button
              href="/kontakt"
              variant="outline"
              className="border-white/50 text-white hover:bg-white hover:text-primary glass text-lg px-10 py-5"
            >
              Kontakt oss
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
