import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Roverlag() {
  return (
    <div className="pt-12">
      <Section>
        <h1 className="text-4xl font-bold text-rover mb-4">Roverlag (16–25 år)</h1>
        <p className="text-xl text-gray-600 mb-8">Vennskap og prosjekter.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose prose-lg text-gray-700">
            <p>
              Roverlaget bestemmer selv hva de vil gjøre. Det kan være alt fra krevende fjellturer til sosiale kvelder med pizza og film. 
              Mange rovere er også ledere i flokk eller tropp.
            </p>
            <h3 className="text-xl font-bold text-rover mt-6 mb-2">Møtetid</h3>
            <p>Varierer, se Spond.</p>
            
            <h3 className="text-xl font-bold text-rover mt-6 mb-2">Kontakt</h3>
            <p>Roverleder</p>
          </div>
          <div className="bg-grey p-8 rounded-lg">
            <h3 className="text-xl font-bold text-rover mb-4">Bli med i Roverlaget</h3>
            <p className="mb-6">Ta kontakt for å bli med.</p>
            <Button href="/kontakt" variant="rover">Kontakt oss</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
