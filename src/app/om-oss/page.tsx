"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function OmOss() {
  const verdier = [
    {
      icon: "🌲",
      title: "Natur",
      desc: "Vi bruker naturen som lekeplass og læringsarena",
    },
    {
      icon: "🤝",
      title: "Fellesskap",
      desc: "Sammen skaper vi minner og vennskap for livet",
    },
    {
      icon: "💪",
      title: "Mestring",
      desc: "Vi utfordrer oss selv og vokser som mennesker",
    },
    {
      icon: "🌍",
      title: "Ansvar",
      desc: "Vi tar vare på hverandre og miljøet rundt oss",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-vandrer font-bold uppercase tracking-widest text-sm mb-4 block">
              Hvem er vi?
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide leading-tight">
              Om 1. Bekkelaget
              <br />
              <span className="gradient-text">Speidergruppe</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              1. Bekkelaget speidergruppe ble stiftet 5. mai 1915 og er en del
              av Norges Speiderforbund. Vi holder til i bydel Nordstrand i Oslo.
              Med over 110 års historie brenner vi fortsatt for friluftsliv!
            </p>
            <Button href="/bli-med" variant="primary">
              Bli med på eventyret →
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/tropp.jpg"
              alt="Speidere på tur"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-smaspeider text-black px-6 py-4 rounded-xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm uppercase tracking-wider">
                Aktive speidere
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section bg="white">
        <div className="text-center mb-16">
          <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
            Det vi tror på
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wide">
            Våre verdier
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verdier.map((verdi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-grey rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{verdi.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2 uppercase">
                {verdi.title}
              </h3>
              <p className="text-gray-600 text-sm">{verdi.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What is Scouting */}
      <Section bg="grey" slopeTop slopeAngle="left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-stifinner font-bold uppercase tracking-widest text-sm mb-4 block">
              Speiding
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Hva er speiding?
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Speiding handler om å utvikle seg selv gjennom opplevelser i
                naturen og samarbeid med andre. Vi lærer å klare oss selv, ta
                ansvar og vise omsorg for naturen og menneskene rundt oss.
              </p>
              <p>
                I speideren får du venner for livet, opplever mestringsfølelse
                og blir del av et verdensomspennende fellesskap med over 50
                millioner speidere!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6 uppercase">
              Vårt motto
            </h3>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed border-l-4 border-smaspeider pl-6">
              "Alltid beredt."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img
                src="/logo-speiderne.png"
                alt="Norges Speiderforbund"
                className="h-10 opacity-70"
              />
              <span className="text-sm text-gray-500">
                Norges Speiderforbund
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* History Section */}
      <Section bg="white" slopeTop slopeAngle="right">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-rover font-bold uppercase tracking-widest text-sm mb-4 block">
            Historie
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
            Vår historie
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            1. Bekkelaget speidergruppe har lange tradisjoner i området. Vi har
            alltid hatt fokus på friluftsliv og å bruke de flotte områdene rundt
            Ekeberg og fjorden. Gjennom generasjoner har vi skapt uforglemmelige
            opplevelser for barn og unge i Nordstrand.
          </p>
        </div>
      </Section>

      {/* Safety Section */}
      <Section bg="vandrer" slopeTop slopeAngle="left">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
            Trygghet først
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
            Sikkerhet og ledelse
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Alle våre ledere må fremvise politiattest og gjennomgå lederkurs i
            regi av Norges Speiderforbund. Sikkerhet på tur er vår høyeste
            prioritet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "✅", text: "Alle ledere har politiattest" },
              { icon: "📚", text: "Sertifiserte lederkurs" },
              { icon: "🛡️", text: "Forsikring for alle medlemmer" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-white font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
