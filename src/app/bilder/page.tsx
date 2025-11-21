import Section from "@/components/Section";

export default function Bilder() {
  return (
    <div className="pt-12">
      <Section>
        <h1 className="text-4xl font-bold text-vandrer mb-8">Bilder fra turer og leir</h1>
        <p className="text-lg text-gray-700 mb-12">
          Her legger vi ut bilder fra våre aktiviteter.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              Bilde {i}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
