export default function References() {
  const references = [
    { subject: 'Clinical Trials Documentation', client: 'PharmaCorp International', year: '2023' },
    { subject: 'Medical Device Manuals', client: 'MedTech Solutions', year: '2022' },
    { subject: 'Research Papers - Microbiology', client: 'University Research Center', year: '2023' },
    { subject: 'Laboratory Protocols', client: 'BioResearch Labs', year: '2022' },
    { subject: 'Patent Documentation', client: 'Global Patent Office', year: '2023' },
    { subject: 'Scientific Equipment Manuals', client: 'TechnoScience Ltd', year: '2022' },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Translation Experience</h1>
      
      <div className="overflow-x-auto shadow-sm rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject Area
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {references.map((ref, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ref.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{ref.client}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{ref.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}