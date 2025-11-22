"use client";

import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Generelt spørsmål',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    
    const bodyLines = [
      "Hei!",
      "",
      `Jeg heter ${name}.`,
      "",
      message
    ];
    
    const body = bodyLines.map(line => encodeURIComponent(line)).join('%0D%0A');
    window.location.href = `mailto:leder@bekkelagetspeider.no?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-primary mb-6 uppercase">Send oss en melding</h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase">Navn</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Ditt navn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="din@epost.no"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 uppercase">Hva gjelder det?</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
          >
            <option value="Generelt spørsmål">Generelt spørsmål</option>
            <option value="Bli medlem">Bli medlem</option>
            <option value="Utleie">Utleie</option>
            <option value="Annet">Annet</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase">Melding</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="Skriv meldingen din her..."
          ></textarea>
        </div>

        <Button variant="primary" className="w-full">
          Åpne i e-postprogram
        </Button>
      </div>
    </form>
  );
}
