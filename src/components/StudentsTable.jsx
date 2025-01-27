import React from 'react';

export default function StudentsTable({ students }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Élèves Enregistrés ({students.length})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classe</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date de Naissance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map(student => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.birthDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}