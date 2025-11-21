import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Tropp() {
  return (
    <div className="pt-12">
      <Section>
        <h1 className="text-4xl font-bold text-stifinner mb-4">Tropp (5.–10. trinn)</h1>
        <p className="text-xl text-gray-600 mb-8">Patruljer, leir og friluftsliv.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose prose-lg text-gray-700">
            <p>
              I troppen er speiderne delt inn i patruljer som ledes av en patruljefører. 
              Vi drar på lengre turer, sover i telt eller under åpen himmel, og lærer å klare oss selv.
            </p>
            <h3 className="text-xl font-bold text-stifinner mt-6 mb-2">Møtetid</h3>
            <p>Torsdager kl. 18:30 – 20:00</p>
            
            <h3 className="text-xl font-bold text-stifinner mt-6 mb-2">Ledere</h3>
            <ul className="list-disc list-inside">
              <li>Leder 1</li>
              <li>Leder 2</li>
            </ul>
          </div>
          <div className="bg-grey p-8 rounded-lg">
            <h3 className="text-xl font-bold text-stifinner mb-4">Bli med i Troppen</h3>
            <p className="mb-6">Vi bruker Spond for påmelding til møter og turer.</p>
            <Button href="/bli-med" variant="tropp">Se hvordan du blir med</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
