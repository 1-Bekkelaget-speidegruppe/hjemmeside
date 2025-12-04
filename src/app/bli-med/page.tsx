"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function BliMed() {
  const steps = [
    {
      step: "01",
      title: "Last ned Spond",
      desc: "Last ned Spond-appen eller gå til spond.com",
      icon: "📱",
    },
    {
      step: "02",
      title: "Bruk gruppekoden",
      desc: "Finn din aldersgruppe og skriv inn koden",
      icon: "🔑",
    },
    {
      step: "03",
      title: "Registrer deg",
      desc: "Fyll inn info om barnet og foresatte",
      icon: "✍️",
    },
    {
      step: "04",
      title: "Møt opp!",
      desc: "Bli med på neste speidermøte",
      icon: "🎉",
    },
  ];

  const grupper = [
    {
      navn: "Flokk",
      alder: "3.–4. trinn",
      kode: "XVWSM",
      color: "bg-smaspeider",
      textColor: "text-black",
    },
    {
      navn: "Tropp",
      alder: "5.–10. trinn",
      kode: "XVWSM",
      color: "bg-stifinner",
      textColor: "text-white",
    },
    {
      navn: "Roverlag",
      alder: "16–25 år",
      kode: "XVWSM",
      color: "bg-rover",
      textColor: "text-white",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section bg="grey">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-vandrer font-bold uppercase tracking-widest text-sm mb-4 block">
              Velkommen
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Bli med i<br />
              <span className="gradient-text">speideren!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Har du lyst til å begynne i speideren? Så gøy! 🎉
              <br />
              Vi tar gjerne imot nye medlemmer i alle aldre.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Steps Section */}
      <Section bg="white">
        <div className="text-center mb-16">
          <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
            Kom i gang
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
            Slik melder du deg inn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-grey rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xs font-bold text-smaspeider mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-smaspeider/30"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            href="https://spond.com/invite/XVWSM"
            variant="primary"
            className="text-lg px-10 py-5"
          >
            Gå til Spond →
          </Button>
        </motion.div>
      </Section>

      {/* Group Codes Section */}
      <Section bg="grey" slopeTop slopeAngle="left">
        <div className="text-center mb-12">
          <span className="text-stifinner font-bold uppercase tracking-widest text-sm mb-4 block">
            Finn din gruppe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-4">
            Gruppekoder for Spond
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Velg aldersgruppen som passer for deg og bruk koden for å melde deg
            inn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {grupper.map((gruppe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`${gruppe.color} ${gruppe.textColor} p-6 text-center`}
              >
                <h3 className="text-2xl font-bold uppercase">{gruppe.navn}</h3>
                <p className="text-sm opacity-80">{gruppe.alder}</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Spond-kode:</p>
                <div className="font-mono text-2xl font-bold text-foreground bg-grey px-4 py-3 rounded-lg">
                  {gruppe.kode}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="white" slopeTop slopeAngle="right">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-rover font-bold uppercase tracking-widest text-sm mb-4 block">
              Spørsmål?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Ofte stilte spørsmål
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Hva koster det å være speider?",
                a: "Kontingenten varierer, men er rundt 1500-2000 kr per år. Dette inkluderer forsikring og medlemskap i Norges Speiderforbund.",
              },
              {
                q: "Trenger jeg utstyr?",
                a: "I starten holder det med vanlige turklær. Etter hvert vil vi anbefale en pakkeliste for turer og leir.",
              },
              {
                q: "Når er møtene?",
                a: "Flokk og Tropp møtes ukentlig, vanligvis på ettermiddagen. Roverlag møtes etter avtale.",
              },
              {
                q: "Kan jeg prøve først?",
                a: "Absolutt! Du er velkommen på et par prøvemøter før du bestemmer deg.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-grey rounded-xl p-6 hover:bg-smaspeider/5 transition-colors"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Flere spørsmål? Vi svarer gjerne!
            </p>
            <Button href="/kontakt" variant="outline">
              Kontakt oss
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
