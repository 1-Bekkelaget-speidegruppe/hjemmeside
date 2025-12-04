import Section from "@/components/Section";
import Link from "next/link";
import Button from "@/components/Button";

export default function Avdelinger() {
  const avdelinger = [
    {
      name: "Flokk",
      age: "3.–4. trinn",
      desc: "For de yngste speiderne. Vi leker, lærer enkle speiderferdigheter og drar på korte turer i nærmiljøet.",
      href: "/avdelinger/flokk",
      color: "smaspeider",
      bgColor: "bg-smaspeider",
      textColor: "text-black",
      image: "/flokk.jpg",
      icon: "🌟",
    },
    {
      name: "Tropp",
      age: "5.–10. trinn",
      desc: "Større utfordringer, lengre turer, patruljearbeid og leir. Her lærer man ledelse og selvstendighet.",
      href: "/avdelinger/tropp",
      color: "stifinner",
      bgColor: "bg-stifinner",
      textColor: "text-white",
      image: "/tropp.jpg",
      icon: "🏕️",
    },
    {
      name: "Roverlag",
      age: "16–25 år",
      desc: "Hovedsakelig turer og arrangementer. Et sterkt fellesskap for unge voksne.",
      href: "/avdelinger/roverlag",
      color: "rover",
      bgColor: "bg-rover",
      textColor: "text-white",
      image: "/rover.jpg",
      icon: "🎒",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-vandrer font-bold uppercase tracking-widest text-sm mb-4 block">
            For alle aldre
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Våre avdelinger
          </h1>
          <p className="text-xl text-gray-600">
            Speiding er for alle, uansett alder. Finn gruppen som passer for
            deg!
          </p>
        </div>
      </Section>

      {/* Avdelinger Grid */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {avdelinger.map((avd, i) => (
            <Link key={i} href={avd.href} className="group block">
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={avd.image}
                    alt={avd.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div
                    className={`absolute top-4 right-4 px-3 py-1.5 rounded-full ${avd.bgColor} ${avd.textColor} text-xs font-bold uppercase tracking-wider shadow-lg`}
                  >
                    {avd.age}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl mr-2">{avd.icon}</span>
                    <h2 className="text-2xl font-bold text-white uppercase inline">
                      {avd.name}
                    </h2>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{avd.desc}</p>
                  <div className="flex items-center text-primary font-bold uppercase text-sm tracking-wider">
                    <span>Les mer</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="vandrer" slopeTop slopeAngle="left">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
            Bli en av oss
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
            Klar for eventyr?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Det er enkelt å bli med – meld deg inn via Spond!
          </p>
          <Button
            href="/bli-med"
            variant="flokk"
            className="text-lg px-10 py-5"
          >
            Bli speider i dag 🎒
          </Button>
        </div>
      </Section>
    </div>
  );
}
