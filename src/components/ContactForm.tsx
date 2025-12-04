"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Generelt spørsmål",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    const bodyLines = ["Hei!", "", `Jeg heter ${name}.`, "", message];

    const body = bodyLines
      .map((line) => encodeURIComponent(line))
      .join("%0D%0A");
    window.location.href = `mailto:leder@bekkelagetspeider.no?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-smaspeider focus:ring-4 focus:ring-smaspeider/10 outline-none transition-all bg-grey/50 focus:bg-white";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-smaspeider/10 flex items-center justify-center">
          <span className="text-2xl">✉️</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground uppercase">
            Send oss en melding
          </h3>
          <p className="text-sm text-gray-500">
            Vi svarer vanligvis innen 24 timer
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="relative">
          <label
            htmlFor="name"
            className={`block text-sm font-bold mb-2 uppercase transition-colors ${
              focused === "name" ? "text-smaspeider" : "text-gray-600"
            }`}
          >
            Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className={inputClasses}
            placeholder="Ditt navn"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className={`block text-sm font-bold mb-2 uppercase transition-colors ${
              focused === "email" ? "text-smaspeider" : "text-gray-600"
            }`}
          >
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className={inputClasses}
            placeholder="din@epost.no"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="subject"
            className={`block text-sm font-bold mb-2 uppercase transition-colors ${
              focused === "subject" ? "text-smaspeider" : "text-gray-600"
            }`}
          >
            Hva gjelder det?
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused(null)}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="Generelt spørsmål">Generelt spørsmål</option>
            <option value="Bli medlem">Bli medlem</option>
            <option value="Utleie">Utleie</option>
            <option value="Annet">Annet</option>
          </select>
        </div>

        <div className="relative">
          <label
            htmlFor="message"
            className={`block text-sm font-bold mb-2 uppercase transition-colors ${
              focused === "message" ? "text-smaspeider" : "text-gray-600"
            }`}
          >
            Melding
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className={`${inputClasses} resize-none`}
            placeholder="Skriv meldingen din her..."
          ></textarea>
        </div>

        <Button variant="flokk" className="w-full text-lg py-5">
          📧 Åpne i e-postprogram
        </Button>
      </div>
    </motion.form>
  );
}
