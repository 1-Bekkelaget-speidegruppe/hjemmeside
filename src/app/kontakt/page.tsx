import Section from "@/components/Section";

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
            <div className="space-y-6">
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
          </div>
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Kart kommer her</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
