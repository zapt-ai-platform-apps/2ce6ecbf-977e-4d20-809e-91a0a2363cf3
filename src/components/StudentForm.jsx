import React, { useState } from 'react';
import StudentFormFields from './StudentFormFields';

export default function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    birthDate: '',
    gender: 'M',
    class: 'CP'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      lastName: '',
      firstName: '',
      birthDate: '',
      gender: 'M',
      class: 'CP'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Ajouter un Élève</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <StudentFormFields formData={formData} setFormData={setFormData} />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer"
        >
          Ajouter l'Élève
        </button>
      </form>
    </div>
  );
}