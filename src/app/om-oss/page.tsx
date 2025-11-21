import Section from "@/components/Section";

export default function OmOss() {
  return (
    <div className="pt-12">
      <Section>
        <h1 className="text-4xl font-bold text-vandrer mb-8">Om 1. Bekkelaget Speidergruppe</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl mb-6">
            1. Bekkelaget speidergruppe er en del av Norges Speiderforbund og holder til i bydel Nordstrand i Oslo.
          </p>
          <h2 className="text-2xl font-bold text-vandrer mt-8 mb-4">Hva er speiding?</h2>
          <p>
            Speiding handler om å utvikle seg selv gjennom opplevelser i naturen og samarbeid med andre. 
            Vi lærer å klare oss selv, ta ansvar og vise omsorg for naturen og menneskene rundt oss.
          </p>
          <h2 className="text-2xl font-bold text-vandrer mt-8 mb-4">Vår historie</h2>
          <p>
            1. Bekkelaget speidergruppe har lange tradisjoner i området. Vi har alltid hatt fokus på friluftsliv 
            og å bruke de flotte områdene rundt Ekeberg og fjorden.
          </p>
          <h2 className="text-2xl font-bold text-vandrer mt-8 mb-4">Trygghet og ledelse</h2>
          <p>
            Alle våre ledere må fremvise politiattest og gjennomgå lederkurs i regi av Norges Speiderforbund. 
            Sikkerhet på tur er vår høyeste prioritet.
          </p>
        </div>
      </Section>
    </div>
  );
}
