import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function Kontakt() {
  return (
    <div className="pt-12">
      <Section>
        <h1 className="text-4xl font-bold text-vandrer mb-8">Kontakt oss</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Lurer du på noe? Ta gjerne kontakt med oss på e-post eller telefon.
            </p>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-bold text-lg text-vandrer">Gruppeleder</h3>
                <p className="text-gray-700">Navn Navnesen</p>
                <p className="text-gray-600">E-post: leder@bekkelagetspeider.no</p>
                <p className="text-gray-600">Tlf: 123 45 678</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-vandrer">Flokkleder</h3>
                <p className="text-gray-700">Navn Navnesen</p>
                <p className="text-gray-600">E-post: flokk@bekkelagetspeider.no</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-vandrer">Troppsleder</h3>
                <p className="text-gray-700">Navn Navnesen</p>
                <p className="text-gray-600">E-post: tropp@bekkelagetspeider.no</p>
              </div>
            </div>
            
            <ContactForm />
          </div>
          <div className="h-full min-h-[500px] w-full rounded-2xl overflow-hidden shadow-lg sticky top-24">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.5!2d10.76!3d59.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168d11e247151%3A0x1234567890abcdef!2sEkeberg%2C%20Oslo!5e0!3m2!1sen!2sno!4v1620000000000!5m2!1sen!2sno" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Kart over Ekeberg"
            ></iframe>
          </div>
        </div>
      </Section>
    </div>
  );
}
