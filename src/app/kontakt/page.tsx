"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function Kontakt() {
  const kontakter = [
    {
      role: "Gruppeleder",
      name: "Øystein Larsen",
      email: "oystlars64@gmail.com",
      phone: null,
      icon: "👑",
    },
    {
      role: "Flokkleder",
      name: "Lucas Bateson",
      email: "lucas.bateson@gmail.com",
      phone: null,
      icon: "🌟",
    },
    {
      role: "Troppsleder",
      name: "Jonas Larsen",
      email: null,
      phone: null,
      icon: "🏕️",
    },
    {
      role: "Roverleder",
      name: "Lucas Bateson",
      email: "lucas.bateson@gmail.com",
      phone: null,
      icon: "🎒",
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
              Ta kontakt
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-wide">
              Kontakt oss
            </h1>
            <p className="text-xl text-gray-600">
              Lurer du på noe? Vi svarer gjerne på spørsmål om speiding,
              medlemskap eller annet.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Info */}
      <Section bg="white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-smaspeider font-bold uppercase tracking-widest text-sm mb-4 block">
              Ledere
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Våre kontaktpersoner
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {kontakter.map((kontakt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-grey rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">
                    {kontakt.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-vandrer uppercase tracking-wider mb-1">
                      {kontakt.role}
                    </div>
                    <h3 className="font-bold text-foreground text-lg">
                      {kontakt.name}
                    </h3>
                    <a
                      href={`mailto:${kontakt.email}`}
                      className="text-gray-600 hover:text-primary text-sm block transition-colors"
                    >
                      {kontakt.email}
                    </a>
                    {kontakt.phone && (
                      <a
                        href={`tel:${(kontakt.phone as string).replace(
                          /\s/g,
                          ""
                        )}`}
                        className="text-gray-600 hover:text-primary text-sm block transition-colors"
                      >
                        {kontakt.phone}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.a
              href="mailto:oystlars64@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-smaspeider/10 hover:bg-smaspeider/20 rounded-xl p-6 text-center transition-all group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                📧
              </div>
              <div className="font-bold text-foreground text-sm uppercase">
                E-post
              </div>
            </motion.a>
            <motion.a
              href="https://spond.com/invite/XVWSM"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-vandrer/10 hover:bg-vandrer/20 rounded-xl p-6 text-center transition-all group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                📱
              </div>
              <div className="font-bold text-foreground text-sm uppercase">
                Spond
              </div>
            </motion.a>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section bg="grey" slopeTop slopeAngle="left">
        <div className="text-center mb-12">
          <span className="text-stifinner font-bold uppercase tracking-widest text-sm mb-4 block">
            Finn oss
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">
            Hvor vi holder til
          </h2>
          <p className="text-gray-600">
            Vi møtes på Speiderhytta på Ballsletta, Ekebergveien 243, 1166 Oslo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.7!2d10.7815!3d59.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8b4c6a4c4d%3A0x0!2sEkebergveien%20243%2C%201166%20Oslo!5e0!3m2!1sno!2sno!4v1701700000000!5m2!1sno!2sno"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Kart over Speiderhytta på Ballsletta"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>
      </Section>
    </div>
  );
}
