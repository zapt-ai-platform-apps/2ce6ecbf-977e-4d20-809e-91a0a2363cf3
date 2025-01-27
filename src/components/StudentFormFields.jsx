import React from 'react';

export default function StudentFormFields({ formData, setFormData }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 box-border"
            />
          </label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 box-border"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date de Naissance
            <input
              type="date"
              required
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 box-border"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Classe
            <select
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 box-border"
            >
              <option value="CP">CP</option>
              <option value="CE1">CE1</option>
              <option value="6ème">6ème</option>
            </select>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sexe
          <div className="mt-1 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="M"
                checked={formData.gender === 'M'}
                onChange={() => setFormData({ ...formData, gender: 'M' })}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">Masculin</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="F"
                checked={formData.gender === 'F'}
                onChange={() => setFormData({ ...formData, gender: 'F' })}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">Féminin</span>
            </label>
          </div>
        </label>
      </div>
    </>
  );
}