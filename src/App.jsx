import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import NavigationMenu from './components/NavigationMenu';
import { generateExcelFile } from './utils/excelGenerator';
import StudentsTable from './components/StudentsTable';
import Footer from './components/Footer';

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddStudent = (studentData) => {
    setStudents(prev => [...prev, { ...studentData, id: Date.now() }]);
  };

  const handleGenerateExcel = async () => {
    try {
      setLoading(true);
      await generateExcelFile(students);
    } catch (error) {
      console.error('Error generating Excel:', error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Gestion Scolaire</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <NavigationMenu />
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <StudentForm onSubmit={handleAddStudent} />
            <StudentsTable students={students} />
            
            <div className="bg-white rounded-lg shadow p-6">
              <button 
                onClick={handleGenerateExcel}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Génération en cours...' : 'Générer le Fichier Excel'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}