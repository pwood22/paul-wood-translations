import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
        <p className="text-lg text-gray-600">
          Professional translator with over 25 years of experience in technical and scientific translation,
          specializing in medical and scientific documentation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
        <div className="border-l-4 border-gray-200 pl-4 space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-900">Ph.D. in Medical Microbiology</h3>
            <p className="text-gray-600">Research focus on advanced microbiological techniques and applications</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Professional Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-gray-900">Technical & Scientific Translator</h3>
            <p className="text-gray-600 mt-2">
              25 years of specialized experience in translating complex technical and scientific documents,
              including medical research papers, clinical trials, and technical documentation.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
              <li>Expert in medical and scientific terminology</li>
              <li>Specialized in technical documentation translation</li>
              <li>Experience with research paper translations</li>
              <li>Proficient in maintaining technical accuracy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}