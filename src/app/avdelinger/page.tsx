import Section from "@/components/Section";
import Link from "next/link";

export default function Avdelinger() {
  return (
    <div className="pt-12">
      <Section>
          <h1 className="text-4xl font-bold text-vandrer mb-8">Våre avdelinger</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/avdelinger/flokk" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
              <h2 className="text-2xl font-bold text-bever mb-2 group-hover:underline">Flokk</h2>
              <p className="text-gray-600">3.–4. trinn</p>
            </Link>
            <Link href="/avdelinger/tropp" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
              <h2 className="text-2xl font-bold text-stifinner mb-2 group-hover:underline">Tropp</h2>
              <p className="text-gray-600">5.–10. trinn</p>
            </Link>
            <Link href="/avdelinger/roverlag" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
              <h2 className="text-2xl font-bold text-rover mb-2 group-hover:underline">Roverlag</h2>
              <p className="text-gray-600">16–25 år</p>
            </Link>
          </div>
      </Section>
    </div>
  );
}
