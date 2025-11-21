import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Flokk() {
  return (
    <div className="pt-12">
      <Section>
        <h1 className="text-4xl font-bold text-bever mb-4">Flokk (3.–4. trinn)</h1>
        <p className="text-xl text-gray-600 mb-8">Småspeidere som oppdager naturen.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose prose-lg text-gray-700">
            <p>
              I flokken er vi mye ute og leker. Vi lærer enkle speiderferdigheter som knuter, bålbygging og førstehjelp, 
              men det viktigste er å ha det gøy sammen.
            </p>
            <h3 className="text-xl font-bold text-bever mt-6 mb-2">Møtetid</h3>
            <p>Torsdager kl. 18:00 – 19:30</p>
            
            <h3 className="text-xl font-bold text-bever mt-6 mb-2">Ledere</h3>
            <ul className="list-disc list-inside">
              <li>Leder 1</li>
              <li>Leder 2</li>
            </ul>
          </div>
          <div className="bg-grey p-8 rounded-lg">
            <h3 className="text-xl font-bold text-bever mb-4">Bli med i Flokken</h3>
            <p className="mb-6">Vi bruker Spond for påmelding til møter og turer.</p>
            <Button href="/bli-med" variant="flokk">Se hvordan du blir med</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
