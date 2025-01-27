import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Saisie des Élèves', path: '/' },
  { name: 'Liste des Classes', path: '/classes' },
  { name: 'Trimestres', path: '/trimesters' },
  { name: 'Bulletins', path: '/reports' },
  { name: 'Moyennes', path: '/averages' }
];

export default function NavigationMenu() {
  return (
    <nav className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Menu Principal</h3>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `block px-4 py-2 rounded-md transition-colors cursor-pointer ${
                  isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}