import Section from "@/components/Section";
import Button from "@/components/Button";

export default function BliMed() {
  return (
    <div className="pt-12">
      <Section>
        <h1 className="text-4xl font-bold text-vandrer mb-8">Bli med i speideren</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Har du lyst til å begynne i speideren? Så gøy! Vi tar gjerne imot nye medlemmer i alle aldre.
            </p>
            <h2 className="text-2xl font-bold text-vandrer mb-4">Slik melder du deg inn</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-8">
              <li>Last ned Spond-appen eller gå til spond.com.</li>
              <li>Bruk gruppekoden for din aldersgruppe (se under).</li>
              <li>Registrer barnet og foresatte.</li>
              <li>Møt opp på neste speidermøte!</li>
            </ol>
            <Button href="https://spond.com" variant="primary">Gå til Spond</Button>
          </div>
          <div className="bg-grey p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-vandrer mb-6">Gruppekoder for Spond</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Flokk (3.–4. trinn)</h3>
                <p className="text-gray-600">Kode: <span className="font-mono bg-white px-2 py-1 rounded">XXXXX</span></p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Tropp (5.–10. trinn)</h3>
                <p className="text-gray-600">Kode: <span className="font-mono bg-white px-2 py-1 rounded">YYYYY</span></p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Roverlag (16–25 år)</h3>
                <p className="text-gray-600">Ta kontakt med roverleder.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
