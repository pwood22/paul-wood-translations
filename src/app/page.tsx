import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Professional Technical & Scientific Translation Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized translation services for technical documentation, scientific papers, and research materials
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Technical Translation</h2>
          <p className="text-gray-600">Expert translation of technical documents, manuals, and specifications</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Scientific Papers</h2>
          <p className="text-gray-600">Accurate translation of research papers, journal articles, and academic works</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quality Assurance</h2>
          <p className="text-gray-600">Rigorous quality control process ensuring accurate and precise translations</p>
        </div>
      </section>
    </div>
  )
}
